import axios from 'axios';
import {ChangeEvent, useContext, useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
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
} from '../../assets/icons/icons';
import {envs} from '../../config/envs';
import {IntentionContext} from '../../context';
import {ActivationStepsContex} from '../../context/activationStepsContext';
import {TalismanAudioContext} from '../../context/talismanAudioContext';
import {TalismanButtonFocusContext} from '../../context/talismanButtonFocusContext';
import {UserContext} from '../../context/userContext';
import {audioDurationTransform} from '../helpers/audioDurationTransform';
import {lineSubtitle} from '../helpers/subtitles';
import {AstrologicalDataProps} from '../interface/myAdn.interface';
import {Activation} from './Activation';
import {ChatBot} from './ChatBot';
import {Chronometer} from './Chronometer';
import {ConstelationBox} from './ConstelationBox';
import {MyADN} from './MyADN';
import {Playlist} from './Playlist';
import {TalismanBox} from './TalismanBox';
import {Timer} from './Timer';

interface MeditationsOptions {
  name: string;
  url: string;
  duration: string;
}

export const ThreeJsFrame = () => {
  const navigate = useNavigate();

  const {email, setSuscription, setTalismanActivated} = useContext(UserContext);
  const {handleButtonFocus, buttonFocusPosition} = useContext(
    TalismanButtonFocusContext,
  );
  const [astrologicalInfo, setAstrologicalInfo] = useState(false);
  //AUDIO STATES
  const {
    trackIndex,
    setTrackIndex,
    playing,
    handlePlaying,
    audioType,
    setAudioType,
    trackDuration,
    setTrackDuration,
    seconds,
    setSeconds,
    volume,
    setVolume,
    handleVolumeBarVisibility,
    volumeBarVisibility,
  } = useContext(TalismanAudioContext);

  const [buttonsVisibility, setButtonsVisibility] = useState(true);
  const handleButtonsVisibility = () => {
    setButtonsVisibility(!buttonsVisibility);
  };

  const [userSoundURL, setUserSoundURL] = useState('');
  const userSoundRef = useRef<HTMLAudioElement | null>(null);
  const activationSoundRef = useRef<HTMLAudioElement | null>(null);

  const playUserSound = () => {
    if (userSoundRef.current) {
      userSoundRef.current.volume = volume;
      userSoundRef.current.play();
    }
  };

  const [readyForActivation, setReadyForActivation] = useState<boolean>(false);

  const handleActivation = () => {
    setReadyForActivation(!readyForActivation);
  };
  const {setStep} = useContext(ActivationStepsContex);

  const playActivationSound = () => {
    if (activationSoundRef.current) {
      activationSoundRef.current.volume = volume;
      activationSoundRef.current.currentTime = 0;

      let playCount = 0;
      const maxPlays = 1;

      const playUserSoundWithCount = (): Promise<void> => {
        return new Promise<void>(resolve => {
          if (userSoundRef.current) {
            userSoundRef.current.currentTime = 0;
            userSoundRef.current.volume = volume;
            userSoundRef.current.play();
            handleButtonFocus('');
            userSoundRef.current.addEventListener('ended', function handler() {
              playCount++;
              userSoundRef.current!.removeEventListener('ended', handler);
              resolve(); // Resuelve la promesa cuando el sonido ha terminado
            });
          } else {
            resolve(); // Resuelve inmediatamente si no hay referencia al sonido
          }
        });
      };
      const playUserSoundsSequentially = async () => {
        while (playCount < maxPlays) {
          await playUserSoundWithCount();
        }

        // Continuar con el resto del código después de reproducir 3 veces
        activationSoundRef.current!.play();
        setSeconds(0);
        setTrackDuration(activationSoundRef.current!.duration);
        startTimer();
        setAudioType('activation');
        setReadyForActivation(false);

        soundRefs.current.forEach(audio => {
          audio.pause();
          audio.currentTime = 0;
          audio.volume = volume;
        });
        meditationsRefs.current.forEach(audio => {
          audio.pause();
          audio.currentTime = 0;
          audio.volume = volume;
        });

        activationSoundRef.current!.addEventListener('ended', () => {
          stopTimer();
          setSeconds(0);
          handlePlaying(false);
          setAudioType('');
          setStep('Paso 5');
          handleButtonFocus('activation');
        });

        handlePlaying(true);
      };

      playUserSoundsSequentially();
    }
  };

  const timerSoundRefs = useRef<HTMLAudioElement[]>([]);

  const {intention, setIntention} = useContext(IntentionContext);

  const buttonsLeft = [
    {
      title: 'Home',
      icon: HomeIcon,
      function: () => {
        navigate('/');
        handleButtonFocus('');
      },
    },
    {
      title: 'Visibilidad',
      icon: buttonsVisibility ? EyeOpen : EyeClose,
      function: () => {
        handleButtonsVisibility();
      },
    },
    {
      title: 'Volumen',
      icon: volume ? SoundIcon : NotSoundIcon,
      function: () => {
        handleVolumeBarVisibility();
      },
    },
  ];

  const buttonsCenter = [
    {
      title: 'Atras',
      icon: PreviousAudioIcon,
      function: () => {
        if (audioType === 'sound') {
          if (trackIndex === 0) {
            const index = sounds.length - 1;
            restartTrack(index, audioType);
          } else {
            const index = trackIndex! - 1;
            restartTrack(index, audioType);
          }
          return;
        }
        if (audioType === 'meditation') {
          if (trackIndex === 0) {
            const index = sounds.length - 1;
            restartTrack(index, audioType);
          } else {
            const index = trackIndex! - 1;
            restartTrack(index, audioType);
          }
          return;
        }
      },
    },
    {
      title: 'Play',
      icon: playing ? StopIcon : PlayIcon,
      function: () => {
        playing ? pauseTrack(audioType) : playTrack(trackIndex!, audioType);
      },
    },
    {
      title: 'Adelante',
      icon: NextAudioIcon,
      function: () => {
        if (audioType === 'sound') {
          if (trackIndex === sounds.length - 1) {
            const index = 0;
            restartTrack(index, audioType);
          } else {
            const index = trackIndex! + 1;
            restartTrack(index, audioType);
          }
          return;
        }
        if (audioType === 'meditation') {
          if (trackIndex === meditations.length - 1) {
            const index = 0;
            restartTrack(index, audioType);
          } else {
            const index = trackIndex! + 1;
            restartTrack(index, audioType);
          }
          return;
        }
      },
    },
  ];

  const buttonsRight = [
    {
      title: 'Mi sonido',
      icon: TalismanSoundIcon,
      function: () => {
        playUserSound();
      },
    },
    {
      title: 'Activación',
      icon: ActivationIcon,
      function: () => {
        handleButtonFocus('activation');
      },
    },
    {
      title: 'Meditaciónes',
      icon: MeditationIcon,
      function: () => {
        handleButtonFocus('meditaciones lovelia');
      },
    },
    {
      title: 'Mi ADN',
      icon: MyAdnIcon,
      function: () => {
        handleButtonFocus('Mi ADN Energético');
      },
    },
    {
      title: 'Sonidos',
      icon: MusicIcon,
      function: () => {
        handleButtonFocus('sonidos lovelia');
      },
    },
    {
      title: 'Alarma',
      icon: ClockIcon,
      function: () => {
        handleButtonFocus('timer');
      },
    },
    /* {
      title: 'Chatbot',
      icon: ChatIcon,
      function: () => {
        handleButtonFocus('chatbot');
      },
    }, */
  ];

  const initialAstrologicalData: AstrologicalDataProps = {
    numerologySymbol: 0,
    chinseseSymbol: '',
    solarSailSymbol: '',
    toneSymbol: '',
    constellation: '',
    kingMayaUserInfo: {
      title: '',
      text: [],
    },
    tonesUserInfo: {
      title: '',
      text: [],
    },
    chineseUserInfo: {
      commonInfo: {
        title: '',
        text: [],
      },
      particularInfo: {
        title: '',
        text: [],
      },
    },

    ascendantUserInfo: {
      title: '',
      text: [],
    },
    sunHouseUserInfo: {
      title: '',
      text: [],
    },
    moonHouseUserInfo: {
      title: '',
      text: [],
    },

    sunUserInfo: {
      title: '',
      text: [],
    },
    moonUserInfo: {
      title: '',
      text: [],
    },

    aspectsAndPlanetsUserInfo: {
      generalInfo: {
        title: '',
        text: '',
      },
      userAspects: [
        {
          planet: {
            title: '',
            text: [],
          },
          aspect: {
            title: '',
            text: [],
          },
        },
      ],
      filterAspects: [],
    },
    numberUserInfo: {
      title: '',
      text: [],
    },
  };

  const [astrologicalData, setAstrologicalData] =
    useState<AstrologicalDataProps>(initialAstrologicalData);

  useEffect(() => {
    setAudioType('');

    async function getUserInfo(email: string) {
      try {
        if (email) {
          const userInfo = await axios.get(
            `${envs.API_DOMAIN}/api/v1/user/astrological-info?email=${email}`,
            {withCredentials: true},
          );

          const userIntention = await axios.get(
            `${envs.API_DOMAIN}/api/v1/user/my-intention/${email}`,
            {withCredentials: true},
          );

          if (userInfo.data) {
            setAstrologicalData(userInfo.data);
            setAstrologicalInfo(true);

            localStorage.setItem('subscriptionActive', 'true');
            localStorage.setItem('talismanActivated', 'true');

            setSuscription(true);
            setTalismanActivated(true);

            setUserSoundURL(userInfo.data.soundPath);
          }

          {
            if (userIntention) {
              setIntention(userIntention.data);
            }
          }

          /*setTimeout(() => {
            axios.post(
              `${envs.API_DOMAIN}/api/v1/user/cleanUserJSON`,
              {email},
              {withCredentials: true},
            );
          }, 12000000);*/

          return;
        }
      } catch (error) {
        console.log(error);
      }
    }

    getUserInfo(email);
  }, [email]);

  const [subtitleLine, setSubtitleLine] = useState<string>('');

  useEffect(() => {
    if (audioType === 'activation') {
      const line = lineSubtitle(seconds)!;
      setSubtitleLine(line);
    }
  }, [seconds]);

  const soundRefs = useRef<HTMLAudioElement[]>([]);
  const meditationsRefs = useRef<HTMLAudioElement[]>([]);

  const [meditations, setMeditations] = useState<MeditationsOptions[]>([]);
  const [sounds, setSounds] = useState<MeditationsOptions[]>([]);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
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
    if (soundRefs.current[trackIndex!] && audioType === 'sound') {
      soundRefs.current[trackIndex!].currentTime = time;
    } else if (
      meditationsRefs.current[trackIndex!] &&
      audioType === 'meditation'
    ) {
      meditationsRefs.current[trackIndex!].currentTime = time;
    } else if (activationSoundRef.current && audioType === 'activation') {
      activationSoundRef.current.currentTime = time;
    }

    setSeconds(time);
  };

  const playTrack = (index: number, type: string) => {
    if (type === 'sound') {
      if (index > soundRefs.current.length - 1) {
        soundRefs.current.forEach(audio => {
          audio.pause();
        });
        stopTimer();
        setSeconds(0);
        handlePlaying(false);
        setAudioType('');
        return;
      }
      setAudioType('sound');
      soundRefs.current.forEach(audio => {
        audio.pause(),
          audio.addEventListener('ended', () => {
            setTrackIndex(index + 1);
            playTrack(index + 1, 'sound'), setSeconds(0);
          });
      });

      if (soundRefs.current[index]) {
        soundRefs.current[index].play();
        setTrackDuration(soundRefs.current[index].duration);
        setTrackIndex(index);
        handlePlaying(true);

        startTimer();
      }
    } else if (type === 'activation') {
      if (activationSoundRef.current) {
        activationSoundRef.current.play();
        setTrackDuration(activationSoundRef.current.duration);
        handlePlaying(true);
        startTimer();
      }
    } else if (type === 'timerSound') {
      if (index > timerSoundRefs.current.length - 1) {
        timerSoundRefs.current.forEach(audio => {
          audio.pause();
        });
        stopTimer();
        setSeconds(0);
        handlePlaying(false);
        setAudioType('');
        return;
      }
      soundRefs.current.forEach(audio => {
        audio.pause(), (audio.currentTime = 0), (audio.volume = volume);
      });
      meditationsRefs.current.forEach(audio => {
        audio.pause(), (audio.currentTime = 0), (audio.volume = volume);
      });

      setAudioType('timerSound');
      soundRefs.current.forEach(audio => {
        audio.pause(), (audio.currentTime = 0), (audio.volume = volume);

        /* audio.addEventListener("ended", () => {
            
            });*/
      });

      if (timerSoundRefs.current[index]) {
        timerSoundRefs.current[index].play();
        setTrackDuration(soundRefs.current[index].duration);
        setTrackIndex(index);
        handlePlaying(true);

        startTimer();
      }
    } else {
      if (index > meditationsRefs.current.length - 1) {
        meditationsRefs.current.forEach(audio => {
          audio.pause();
        });
        stopTimer();
        setSeconds(0);
        handlePlaying(false);
        setAudioType('');
        return;
      }
      setAudioType('meditation');
      meditationsRefs.current.forEach(audio => {
        audio.pause(),
          audio.addEventListener('ended', () => {
            setTrackIndex(index + 1);
            playTrack(index + 1, 'meditation');
            setSeconds(0);
          });
      });

      if (meditationsRefs.current[index]) {
        meditationsRefs.current[index].play();
        setTrackDuration(meditationsRefs.current[index].duration);
        setTrackIndex(index);
        handlePlaying(true);

        startTimer();
      }
    }
  };

  const pauseTrack = (type: string) => {
    if (type === 'sound') {
      soundRefs.current.forEach(audio => audio.pause());
      handlePlaying(false);
      stopTimer();
      return;
    } else if (type === 'activation') {
      if (activationSoundRef.current) {
        activationSoundRef.current.pause();
        handlePlaying(false);
        stopTimer();
      }
    } else {
      meditationsRefs.current.forEach(audio => audio.pause());
      handlePlaying(false);
      stopTimer();
      return;
    }
  };

  const restartTrack = (index: number, type: string) => {
    setSeconds(0);

    if (type === 'sound') {
      soundRefs.current.forEach(audio => {
        audio.pause(), (audio.currentTime = 0), (audio.volume = volume);
      });
      meditationsRefs.current.forEach(audio => {
        audio.pause(), (audio.currentTime = 0), (audio.volume = volume);
      });
      activationSoundRef.current?.pause();
      setAudioType('sound');
      playTrack(index, 'sound');
      handlePlaying(true);
      return;
    } else {
      meditationsRefs.current.forEach(audio => {
        audio.pause(), (audio.currentTime = 0);
      });
      soundRefs.current.forEach(audio => audio.pause());
      activationSoundRef.current?.pause();
      setAudioType('meditation');
      playTrack(index, 'meditation');
      handlePlaying(true);
      return;
    }
  };

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(event.target.value);

    soundRefs.current.forEach(audio => (audio.volume = volume));
    meditationsRefs.current.forEach(audio => (audio.volume = volume));
    userSoundRef.current!.volume = volume;
    activationSoundRef.current!.volume = volume;
    setVolume(soundRefs.current[0].volume);
  };

  const handleExitMenu = (event: MouseEvent) => {
    if (
      volumeBarVisibility &&
      event.target instanceof HTMLElement &&
      !event.target.closest('#volume-range')
    ) {
      handleVolumeBarVisibility();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleExitMenu);
    return () => {
      window.removeEventListener('click', handleExitMenu);
    };
  }, [volumeBarVisibility]);

  //obtiene la duración de cada audio de la lista
  const fetchAudioDurations = async (
    items: MeditationsOptions[],

    refs: React.MutableRefObject<HTMLAudioElement[]>,
  ): Promise<MeditationsOptions[]> => {
    // Cambiamos aquí para que solo devuelva MeditationsOptions[]
    return Promise.all(
      items.map((item, index) => {
        return new Promise<MeditationsOptions>(resolve => {
          // Especificamos el tipo de resolución
          const audio = new Audio(item.url);
          refs.current[index] = audio;

          audio.addEventListener('loadedmetadata', () => {
            resolve({
              ...item,
              duration: audioDurationTransform(audio.duration), // Dejamos la duración como número
            });
          });
        });
      }),
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Tipamos explícitamente la respuesta de axios
        const [meditationsResponse, soundsResponse] = await Promise.all([
          axios.get<MeditationsOptions[]>(
            `${envs.API_DOMAIN}/api/v1/user/meditations`,
            {
              withCredentials: true,
            },
          ),
          axios.get<MeditationsOptions[]>(
            `${envs.API_DOMAIN}/api/v1/user/sounds`,
            {
              withCredentials: true,
            },
          ),
        ]);

        // Obtenemos duraciones para meditaciones y sonidos
        const meditationsWithDuration = await fetchAudioDurations(
          meditationsResponse.data,
          meditationsRefs,
        );
        const soundsWithDuration = await fetchAudioDurations(
          soundsResponse.data,
          soundRefs,
        );

        // Actualizamos los estados con los resultados
        setMeditations(meditationsWithDuration);
        setSounds(soundsWithDuration);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  




  return (
    <>
      {astrologicalInfo ? (
        <>
          <TalismanBox
            numerologySymbol={astrologicalData.numerologySymbol}
            solarSailSymbol={astrologicalData.solarSailSymbol}
            toneSymbol={astrologicalData.toneSymbol}
            phrase={intention}
            chineseSymbol={astrologicalData.chinseseSymbol}
          />

          <ConstelationBox constellation={astrologicalData.constellation} />
          <iframe
            className="threejs-container"
            title="Modelo 3D"
            src={`https://lovelia.org/public/index.html?userProfile=api/${email}.json`}
          />
          <div className="myTalisman-controls-container">
            <div className="myTalisman-controls-internal-container left">
              {buttonsLeft.map(item => {
                return (
                  <button
                    key={item.title}
                    title={item.title}
                    onClick={item.function}>
                    {<item.icon color="#ffff" />}
                  </button>
                );
              })}
              {volumeBarVisibility && (
                <input
                  id="volume-range"
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  defaultValue={volume}
                  onChange={handleVolumeChange}
                />
              )}
            </div>

            {buttonFocusPosition === 'chronometer' && (
              <Chronometer playTrack={playTrack} />
            )}

            {buttonsVisibility &&
              audioType &&
              buttonFocusPosition !== 'chronometer' && (
                <div className="myTalisman-audio-controls-container">
                  <div className="myTalisman-controls-internal-container center">
                    {buttonsCenter.map(item => {
                      return (
                        <button
                          key={item.title}
                          title={item.title}
                          onClick={item.function}>
                          <div className="icon-container">{<item.icon />}</div>
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
                      value={(100 / trackDuration) * seconds}
                    />
                    <p>{audioDurationTransform(trackDuration)}</p>
                  </div>
                </div>
              )}

            {buttonsVisibility && (
              <div className="myTalisman-controls-internal-container right">
                {buttonsRight.map((item, i) => {
                  return (
                    <button
                      className={`${
                        i === 0 && readyForActivation
                          ? 'soundButton-motion'
                          : ''
                      } ${
                        i === 1 && !intention ? 'soundButton-motion' : ''
                      }   `}
                      key={item.title}
                      title={item.title}
                      onClick={
                        i === 0 && readyForActivation
                          ? playActivationSound
                          : item.function
                      }>
                      {<item.icon />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          {userSoundURL && (
            <audio
              ref={userSoundRef}
              src={`https://lovelia.org/public/userSounds/${userSoundURL}`}
            />
          )}

          <audio
            ref={activationSoundRef}
            src={`https://lovelia.org/public/activation/activationExample.mp4`}
          />

          {buttonFocusPosition === 'Mi ADN Energético' && (
            <MyADN {...astrologicalData} />
          )}
          {buttonFocusPosition === 'activation' && (
            <Activation
              handleActivation={handleActivation}
              pauseTrack={pauseTrack}
            />
          )}

          {buttonFocusPosition === 'sonidos lovelia' && (
            <Playlist
              sounds={sounds}
              audioType={audioType}
              trackIndex={trackIndex}
              playTrack={playTrack}
              pauseTrack={pauseTrack}
              restartTrack={restartTrack}
              playing={playing}
            />
          )}
          {buttonFocusPosition === 'meditaciones lovelia' && (
            <Playlist
              sounds={meditations}
              audioType={audioType}
              trackIndex={trackIndex}
              playTrack={playTrack}
              pauseTrack={pauseTrack}
              restartTrack={restartTrack}
              playing={playing}
            />
          )}
          {buttonFocusPosition === 'timer' && <Timer sounds={sounds} />}

          <ChatBot astroData={astrologicalData} />
        </>
      ) : (
        <div className="myTalisman-pre-loading">Loading...</div>
      )}

      {sounds.map((item, i) => {
        return (
          <audio key={i} ref={el => (soundRefs.current[i] = el!)}>
            <source src={`${item.url}`} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        );
      })}

      {meditations.map((item, i) => {
        return (
          <audio key={i} ref={el => (meditationsRefs.current[i] = el!)}>
            <source src={`${item.url}`} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        );
      })}
      {audioType === 'activation' && (
        <div className="subtitles-container">
          <p>{subtitleLine}</p>
        </div>
      )}
      {/*IMPORTANTE: DEBE CAMBIARSE SOUNDS POR LOS SONIDOS CORRESPONDIENTES AL TIMER */}
      {sounds.map((item, i) => {
        return (
          <audio key={i} ref={el => (timerSoundRefs.current[i] = el!)}>
            <source src={`${item.url}`} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        );
      })}
    </>
  );
};
