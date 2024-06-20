import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { TalismanButtonFocusContext } from "../context/talismanButtonFocusContext";
import {
  HomeIcon,
  EyeOpen,
  SoundIcon,
  TalismanSoundIcon,
  FingerPrintIcon,
  PlantIcon,
  SandClockIcon,
  ClockIcon,
  MusicIcon,
} from "../assets/images/icons/icons";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DropDownMyTalisman } from "../commons/DropDownMyTalisman";
import { PopUpMyTalisman } from "../commons/PopUpMyTalisman";
import { useOpenModal } from "../hooks/useOpenModal";

export const ThreeJsFrame = () => {
  const navigate = useNavigate();
  const { email, setSuscription } = useContext(UserContext);
  const { handleButtonFocus } = useContext(TalismanButtonFocusContext);
  const [astrologicalInfo, setAstrologicalInfo] = useState("");
  const [audioURL, setAuidioURL] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const dropdownInfoTalisman = useOpenModal();
  const popUpActivation = useOpenModal();

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
      icon: EyeOpen,
      function: () => {},
    },
    {
      title: "Sound",
      icon: SoundIcon,
      function: () => {},
    },
  ];

  const buttonsRight = [
    {
      title: "Talisman sound",
      icon: TalismanSoundIcon,
      function: () => {
        playAudio();
      },
    },
    {
      title: "Activation",
      icon: FingerPrintIcon,
      function: () => {
        popUpActivation.handleOpenModal();
      },
    },
    {
      title: "Meditation",
      icon: PlantIcon,
      function: () => {
        dropdownInfoTalisman.handleOpenModal(),
          handleButtonFocus("Meditaciones lovelia");
      },
    },
    {
      title: "Energetc ADN",
      icon: SandClockIcon,
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
        const userInfo = await axios.get(
          `http://localhost:3000/api/v1/user/astrological-info?email=${email}`,
          { withCredentials: true }
        );
        if (userInfo.data) {
          setAstrologicalInfo(userInfo.data);
          localStorage.setItem("subscriptionActive", "true");
          setSuscription(true);
        }

        const userSound = await axios.get(
          `http://localhost:3000/api/v1/user/astrological-sound/${email}`,
          { withCredentials: true, responseType: "blob" }
        );

        setAuidioURL(URL.createObjectURL(userSound.data));

        setTimeout(() => {
          axios.post(
            `http://localhost:3000/api/v1/user/cleanUserJSON`,
            { email },
            { withCredentials: true }
          );
        }, 2000);

        return;
      } catch (error) {
        console.log(error);
      }
    }

    getUserInfo(email);
  }, [email]);

  return (
    <>
      {astrologicalInfo && (
        <>
          <iframe
            title="Modelo 3D"
            src={`http://localhost:3000/?userProfile=/api/${email}.json`}
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
                  >
                    {<item.icon />}
                  </button>
                );
              })}
            </div>
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
          </div>
          {audioURL && <audio ref={audioRef} src={audioURL} />}
          {dropdownInfoTalisman.openModal && (
            <DropDownMyTalisman
              handleDropDown={dropdownInfoTalisman.handleOpenModal}
            />
          )}
          {popUpActivation.openModal && (
            <PopUpMyTalisman handlePopUp={popUpActivation.handleOpenModal} />
          )}
        </>
      )}
    </>
  );
};
