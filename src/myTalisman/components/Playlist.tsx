import { useContext, useState } from "react";
import { CloseIcon, PlayIcon, StopIcon } from "../../assets/icons/icons";
import { TalismanButtonFocusContext } from "../../context/talismanButtonFocusContext";

type SoundsType = {
  name: string;
  url: string;
  duration?:string
};

export interface DropdownOptions {
  sounds: SoundsType[];
  playTrack: (i: number, type: string) => void;
  pauseTrack: (type: string) => void;
  restartTrack: (i: number, type: string) => void;
  trackIndex?: number | null;
  playing: boolean;
  audioType: string;
}

export function Playlist({
  sounds,
  audioType,
  trackIndex,
  playTrack,
  pauseTrack,
  restartTrack,
  playing,
}: DropdownOptions) {
  const { buttonFocusPosition, handleButtonFocus } = useContext(
    TalismanButtonFocusContext
  );

  const [tableFocus, setTableFocus] = useState(0);


  console.log("tableFocus",tableFocus)
  console.log("buttonFocusPosition",buttonFocusPosition)
  console.log("audioType",audioType)


  return (
    <div className="playlist-container">
      <div className="playlist-button-container">
        <div onClick={() => handleButtonFocus("")} className="icon-container">
          <CloseIcon
            onClick={() => {
              handleButtonFocus("");
            }}
          />
        </div>
      </div>

      <div className="playlist-title-wrapper">
        <h3>{buttonFocusPosition}</h3>
      </div>

      <div className="playlist-section-container">
        <table className="playlist-sounds-table">
          <thead>
            <tr>
              <th>###</th>
              <th className="th-trackname-column">
                <strong>Pista</strong>
              </th>
              <th>Duración</th>
            </tr>
          </thead>
          {buttonFocusPosition === "sonidos lovelia" &&
            sounds.map((item, i) => {
              return (
                <tbody>
                  <tr
                    title="Doble click para reproducir."
                    className={
                      trackIndex === i && audioType === "sound"
                        ? "selected-track"
                        : ""
                    }
                    key={i}
                    onDoubleClick={() => {
                      restartTrack(i, "sound");
                    }}
                    onMouseEnter={() => {
                      setTableFocus(i + 1);
                    }}
                    onMouseLeave={() => {
                      setTableFocus(0);
                    }}
                  >
                    <td>
                      {tableFocus === i + 1 ? (
                        <div className="play-icon-container">
                          {trackIndex === i &&
                          audioType === "sound" &&
                          playing ? (
                            <StopIcon
                              onClick={() => {
                                pauseTrack("sound");
                              }}
                            />
                          ) : (
                            <PlayIcon
                              onClick={() => {
                                playTrack(i, "sound");
                              }}
                            />
                          )}
                        </div>
                      ) : trackIndex === i &&
                        audioType === "sound" &&
                        playing ? (
                        <div className="play-icon-container">
                          <StopIcon
                            onClick={() => {
                              pauseTrack("sound");
                            }}
                          />
                        </div>
                      ) : (
                        i + 1
                      )}
                    </td>
                    <td className="td-trackname-column">
                      <strong>{item.name}</strong>
                      <p>{item.name}</p>
                    </td>
                    <td>{item.duration}</td>
                  </tr>
                </tbody>
              );
            })}

          {buttonFocusPosition === "meditaciones lovelia" &&
            sounds.map((item, i) => {
              return (
                <tbody>
                  <tr
                  title="Doble click para reproducir."
                    className={
                      trackIndex === i && audioType === "meditation"
                        ? "selected-track"
                        : ""
                    }
                    key={i}
                    onDoubleClick={() => {
                      restartTrack(i, "meditation");
                    }}
                    onMouseEnter={() => {
                      setTableFocus(i + 1);
                    }}
                    onMouseLeave={() => {
                      setTableFocus(0);
                    }}
                  >
                    <td>
                      {tableFocus === i + 1 ? (
                        <div className="play-icon-container">
                          {trackIndex === i && audioType === "meditation" && playing ? (
                            <StopIcon
                              onClick={() => {
                                pauseTrack("meditation");
                              }}
                            />
                          ) : (
                            <PlayIcon
                              onClick={() => {
                                playTrack(i, "meditation");
                              }}
                            />
                          )}
                        </div>
                      ) : trackIndex === i && audioType === "meditation" ? (
                        <div className="play-icon-container">
                          <StopIcon
                            onClick={() => {
                              pauseTrack("meditation");
                            }}
                          />
                        </div>
                      ) : (
                        i + 1
                      )}
                    </td>
                    <td className="td-trackname-column">
                      <strong>{item.name}</strong>
                      <p>{item.name}</p>
                    </td>
                    <td>{item.duration}</td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
    </div>
  );
}
