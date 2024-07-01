import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import {
  ActivationIcon,
  ClockIcon,
  EyeClose,
  EyeOpen,
  HomeIcon,
  MeditationIcon,
  MusicIcon,
  MyAdnIcon,
  NextAudioIcon,
  NotSoundIcon,
  PlayIcon,
  PreviousAudioIcon,
  SoundIcon,
  StopIcon,
  TalismanSoundIcon,
} from "../assets/images/icons/icons";
import { IntentionContext } from "../context/intentionContext";
import { TalismanButtonFocusContext } from "../context/talismanButtonFocusContext";
import { UserContext } from "../context/userContext";
import { VolumeContext } from "../context/volumeContext";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DropDownMyTalisman } from "../commons/DropDownMyTalisman";
import { PopUpMyTalisman } from "../commons/PopUpMyTalisman";
import { envs } from "../config/envs";
import { audioDurationTransform } from "../helpers/audioDurationTransform";
import { useOpenModal } from "../hooks/useOpenModal";

interface MeditationsOptions {
  name: string;
  url: string;
}

export const ThreeJsFrame = () => {
  const navigate = useNavigate();
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const { email, setSuscription } = useContext(UserContext);
  const { handleButtonFocus } = useContext(TalismanButtonFocusContext);
  const [astrologicalInfo, setAstrologicalInfo] = useState(false);
  const [trackIndex, setTrackIndex] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [audioType, setAudioType] = useState("");
  const [trackDuration, setTrackDuration] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [buttonsVisibility, setButtonsVisibility] = useState(true);
  const handleButtonsVisibility = () => {
    setButtonsVisibility(!buttonsVisibility);
  };
  const [audioURL, setAuidioURL] = useState("");
  const userSoundRef = useRef<HTMLAudioElement | null>(null);

  const playUserSound = () => {
    if (userSoundRef.current) {
      userSoundRef.current.volume = volume;
      userSoundRef.current.play();
    }
  };

  const dropdownInfoTalisman = useOpenModal();
  const popUpActivation = useOpenModal();

  const [volumeBar, setVolumeBar] = useState(false);
  const handleVolumeBar = () => {
    setVolumeBar(!volumeBar);
  };
  const { volume, setVolume } = useContext(VolumeContext);
  const { intention, setIntention } = useContext(IntentionContext);

  const buttonsLeft = [
    {
      title: "Home",
      icon: HomeIcon,
      function: () => {
        navigate("/");
      },
    },
    {
      title: "Visibiity",
      icon: buttonsVisibility ? EyeOpen : EyeClose,
      function: () => {
        handleButtonsVisibility();
      },
    },
    {
      title: "Sound",
      icon: volume ? SoundIcon : NotSoundIcon,
      function: () => {
        handleVolumeBar();
      },
    },
  ];

  const buttonsCenter = [
    {
      title: "Previous",
      icon: PreviousAudioIcon,
      function: () => {
        const index = trackIndex! - 1;
        restartTrack(index, audioType);
      },
    },
    {
      title: "Play",
      icon: playing ? StopIcon : PlayIcon,
      function: () => {
        playing ? pauseTrack(audioType) : playTrack(trackIndex!, audioType);
      },
    },
    {
      title: "Next",
      icon: NextAudioIcon,
      function: () => {
        const index = trackIndex! + 1;
        restartTrack(index, audioType);
      },
    },
  ];

  const buttonsRight = [
    {
      title: "Talisman sound",
      icon: TalismanSoundIcon,
      function: () => {
        playUserSound();
      },
    },
    {
      title: "Activation",
      icon: ActivationIcon,
      function: () => {
        popUpActivation.handleOpenModal();
      },
    },
    {
      title: "Meditation",
      icon: MeditationIcon,
      function: () => {
        dropdownInfoTalisman.handleOpenModal(),
          handleButtonFocus("Meditaciones lovelia");
      },
    },
    {
      title: "Energetc ADN",
      icon: MyAdnIcon,
      function: () => {
        dropdownInfoTalisman.handleOpenModal(),
          handleButtonFocus("Mi ADN Energético");
      },
    },
    {
      title: "Sounds",
      icon: MusicIcon,
      function: () => {
        dropdownInfoTalisman.handleOpenModal(),
          handleButtonFocus("Biblioteca de sonidos");
      },
    },
    {
      title: "Timer",
      icon: ClockIcon,
      function: () => {},
    },
  ];

  useEffect(() => {
    async function getUserInfo(email: string) {
      try {
        if (email) {
          const userInfo = await axios.get(
            `${envs.API_DOMAIN}/api/v1/user/astrological-info?email=${email}`,
            { withCredentials: true }
          );
          const userIntention = await axios.get(
            `${envs.API_DOMAIN}/api/v1/user/my-intention/${email}`,
            { withCredentials: true }
          );

          if (userInfo.data) {
            setAstrologicalInfo(true);
            localStorage.setItem("subscriptionActive", "true");
            setSuscription(true);
          }

          const userSound = await axios.get(
            `${envs.API_DOMAIN}/api/v1/user/astrological-sound/${email}`,
            { withCredentials: true, responseType: "blob" }
          );

          setAuidioURL(URL.createObjectURL(userSound.data));
          if (userIntention) {
            setIntention(userIntention.data);
          }

          setTimeout(() => {
            axios.post(
              `${envs.API_DOMAIN}/api/v1/user/cleanUserJSON`,
              { email },
              { withCredentials: true }
            );
          }, 120000);

          return;
        }
      } catch (error) {
        console.log(error);
      }
    }

    getUserInfo(email);
  }, [email]);

  const soundRefs = useRef<HTMLAudioElement[]>([]);
  const meditationsRefs = useRef<HTMLAudioElement[]>([]);

  const [meditations, setMeditations] = useState<MeditationsOptions[]>([]);
  const [sounds, setSounds] = useState<MeditationsOptions[]>([]);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleTimeBar = (event: ChangeEvent<HTMLInputElement>) => {
    const time = (Number(event.target.value) / 100) * trackDuration;
    if (soundRefs.current[trackIndex!] && audioType === "sound") {
      soundRefs.current[trackIndex!].currentTime = time;
    } else if (
      meditationsRefs.current[trackIndex!] &&
      audioType === "meditation"
    ) {
      meditationsRefs.current[trackIndex!].currentTime = time;
    }
    setSeconds(time);
  };

  const playTrack = (index: number, type: string) => {
    if (type === "sound") {
      if (index > soundRefs.current.length) {
        setTrackIndex(null);
        return;
      }
      setAudioType("sound");
      soundRefs.current.forEach((audio) => audio.pause());
      soundRefs.current.forEach((audio) =>
        audio.addEventListener("ended", () => {
          setTrackIndex(index + 1);
          playTrack(index + 1, "sound"), setSeconds(0);
        })
      );

      if (soundRefs.current[index]) {
        soundRefs.current[index].play();
        setTrackDuration(soundRefs.current[index].duration);
        setTrackIndex(index);
        setPlaying(true);

        startTimer();
      }
    } else {
      if (index > meditationsRefs.current.length) {
        setTrackIndex(null);
        return;
      }
      setAudioType("meditation");
      meditationsRefs.current.forEach((audio) => audio.pause());
      meditationsRefs.current.forEach((audio) =>
        audio.addEventListener("ended", () => {
          setTrackIndex(index + 1);
          playTrack(index + 1, "meditation");
        })
      );

      if (meditationsRefs.current[index]) {
        meditationsRefs.current[index].play();
        setTrackIndex(index);
      }
    }
  };

  const pauseTrack = (type: string) => {
    if (type === "sound") {
      soundRefs.current.forEach((audio) => audio.pause());
      setPlaying(false);
      stopTimer();
      return;
    } else {
      meditationsRefs.current.forEach((audio) => audio.pause());
      setPlaying(false);
      return;
    }
  };

  const restartTrack = (index: number, type: string) => {
    setSeconds(0);

    if (type === "sound") {
      soundRefs.current.forEach((audio) => {
        audio.pause(), (audio.currentTime = 0), (audio.volume = volume);
      });
      meditationsRefs.current.forEach((audio) => {
        audio.pause(), (audio.currentTime = 0), (audio.volume = volume);
      });
      playTrack(index, "sound");
      setPlaying(true);
      return;
    } else {
      meditationsRefs.current.forEach((audio) => {
        audio.pause(), (audio.currentTime = 0);
      });
      soundRefs.current.forEach((audio) => audio.pause());
      playTrack(index, "meditation");
      setPlaying(true);
      return;
    }
  };

  const handleVolumeChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(event.target.value);
    if (soundRefs.current && meditationsRefs.current && userSoundRef.current) {
      soundRefs.current.forEach((audio) => (audio.volume = volume));
      meditationsRefs.current.forEach((audio) => (audio.volume = volume));
      userSoundRef.current.volume = volume;
      setVolume(soundRefs.current[0].volume);
    }
  };

  const handleExitMenu = (event: MouseEvent) => {
    if (
      volumeBar &&
      event.target instanceof HTMLElement &&
      !event.target.closest("#volume-range")
    ) {
      setVolumeBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleExitMenu);
    return () => {
      window.removeEventListener("click", handleExitMenu);
    };
  }, [volumeBar]);

  useEffect(() => {
    axios
      .get(`${envs.API_DOMAIN}/api/v1/user/meditations`, {
        withCredentials: true,
      })
      .then((response) => {
        setMeditations(response.data);
      });

    axios
      .get(`${envs.API_DOMAIN}/api/v1/user/sounds`, {
        withCredentials: true,
      })
      .then((response) => {
        setSounds(response.data);
      });
  }, []);

  return (
    <>
      {astrologicalInfo && (
        <>
          <iframe
            className="efectoReveal"
            onLoad={() => {
              setTimeout(() => {
                setIframeLoaded(true);
              }, 2000);
            }}
            title="Modelo 3D"
            src={`https://lovelia.org/public/index.html?userProfile=api/${email}.json`}
            style={{ width: "100vw", height: "100vh", border: "none" }}
          />
          <div className="myTalisman-controls-container">
            <div className="myTalisman-controls-internal-container left">
              {buttonsLeft.map((item) => {
                return (
                  <button
                    key={item.title}
                    title={item.title}
                    onClick={item.function}
                    id={item.title === "Sound" ? "volume-range" : ""}
                  >
                    {<item.icon />}
                  </button>
                );
              })}
              {volumeBar && (
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  defaultValue={volume}
                  onChange={handleVolumeChange2}
                />
              )}
            </div>

            {buttonsVisibility && audioType && (
              <div className="myTalisman-audio-controls-container">
                <div className="myTalisman-controls-internal-container center">
                  {buttonsCenter.map((item) => {
                    return (
                      <button
                        key={item.title}
                        title={item.title}
                        onClick={item.function}
                      >
                        {<item.icon />}
                      </button>
                    );
                  })}
                </div>
                <div className="audio-range-bar-container">
                  <p>{audioDurationTransform(seconds)}</p>
                  <input
                    className="progress-bar"
                    type="range"
                    onChange={handleTimeBar}
                    defaultValue={0}
                    value={(100 / trackDuration) * (seconds + 1)}
                  />
                  <p>{audioDurationTransform(trackDuration)}</p>
                </div>
              </div>
            )}

            {buttonsVisibility && (
              <div className="myTalisman-controls-internal-container right">
                {buttonsRight.map((item) => {
                  return (
                    <button
                      key={item.title}
                      title={item.title}
                      onClick={item.function}
                    >
                      {<item.icon />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          {audioURL && <audio ref={userSoundRef} src={audioURL} />}
          {dropdownInfoTalisman.openModal && (
            <DropDownMyTalisman
              sounds={sounds}
              meditations={meditations}
              audioType={audioType}
              trackIndex={trackIndex}
              playTrack={playTrack}
              pauseTrack={pauseTrack}
              restartTrack={restartTrack}
              handleDropDown={dropdownInfoTalisman.handleOpenModal}
              playing={playing}
            />
          )}
          {popUpActivation.openModal && (
            <PopUpMyTalisman handlePopUp={popUpActivation.handleOpenModal} />
          )}
          {iframeLoaded && intention && (
            <div className="myTalisman-intention-container efectoReveal">
              <p>{intention}</p>
            </div>
          )}
        </>
      )}

      {sounds.map((item, i) => {
        return (
          <audio ref={(el) => (soundRefs.current[i] = el!)}>
            <source src={`${envs.API_DOMAIN}${item.url}`} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        );
      })}

      {meditations.map((item, i) => {
        return (
          <audio ref={(el) => (meditationsRefs.current[i] = el!)}>
            <source src={`${envs.API_DOMAIN}${item.url}`} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        );
      })}
    </>
  );
};
