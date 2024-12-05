import { useContext, useState } from "react";
import { CloseIcon } from "../../assets/icons/icons";
import { TalismanButtonFocusContext } from "../../context";
import { ArticleMyADN } from "./ArticleMyADN";
import { MyAdnProps } from "../interface/myAdn.interface";


const sections = ["Números", "Astros", "Naturaleza", "Mayas"];

export const MyADN = ({
  kingMayaUserInfo,
  tonesUserInfo,
  chineseUserInfo,
  ascendantUserInfo,
  sunHouseUserInfo,
  moonHouseUserInfo,
  sunUserInfo,
  moonUserInfo,
  aspectsAndPlanetsUserInfo,
  numberUserInfo,
}: MyAdnProps) => {
  const { handleButtonFocus } = useContext(TalismanButtonFocusContext);

  const [sectionPosition, setSectionPosition] = useState<string>("Números");
  const handleSectionPosition = (item: string) => {
    setSectionPosition(item);
  };

  return (
    <div className="dropDownMyTalisman-container">
      <div className="dropDownMyTalisman-button-container">
        <div className="icon-container">
          <CloseIcon
            onClick={() => {
              handleButtonFocus("");
            }}
          />
        </div>
      </div>

      <div className="dropDownMyTalisman-title-wrapper">
        <h3>
          {sectionPosition === "Naturaleza"
            ? `Energía de la ${sectionPosition}`
            : `Energía de los ${sectionPosition}`}
        </h3>
      </div>

      <div className="dropDownMyTalisman-top-container">
        <ul>
          {sections.map((item, i) => {
            return (
              <li
                onClick={() => handleSectionPosition(item)}
                className={sectionPosition === item ? "button-focus-style" : ""}
                key={i}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>

      {sectionPosition === "Números" && (
        <div className="dropDownMyTalisman-section-container">
          <ArticleMyADN
            title={numberUserInfo.title}
            text={numberUserInfo.text}
          />
        </div>
      )}

      {sectionPosition === "Astros" && (
        <div className="dropDownMyTalisman-section-container">
          <ArticleMyADN
            title={ascendantUserInfo.title}
            text={ascendantUserInfo.text}
          />
          <br />
          <ArticleMyADN
            title={sunHouseUserInfo.title}
            text={sunHouseUserInfo.text}
          />
          <br />
          <ArticleMyADN
            title={moonHouseUserInfo.title}
            text={moonHouseUserInfo.text}
          />
          <br />
          <ArticleMyADN title={sunUserInfo.title} text={sunUserInfo.text} />
          <br />
          <ArticleMyADN title={moonUserInfo.title} text={moonUserInfo.text} />
          <br />
          {aspectsAndPlanetsUserInfo && (
            <>
              <div className="dropDownMyTalisman-card-container">
                <h5>{aspectsAndPlanetsUserInfo.generalInfo.title}</h5>

                <p>{aspectsAndPlanetsUserInfo.generalInfo.text}</p>
              </div>
              <br />
              {aspectsAndPlanetsUserInfo.filterAspects.map((item, j) => {
                return (
                  <ArticleMyADN key={j} title={item.title} text={item.text} />
                );
              })}

              {aspectsAndPlanetsUserInfo.userAspects.map((item, j) => {
                return (
                  <ArticleMyADN
                    key={j}
                    title={`${item.planet.title} ${item.aspect}`}
                    text={item.planet.text}
                  />
                );
              })}
            </>
          )}
        </div>
      )}
      {sectionPosition === "Naturaleza" && (
        <div className="dropDownMyTalisman-section-container">
          <ArticleMyADN
            title={chineseUserInfo.commonInfo.title}
            text={chineseUserInfo.commonInfo.text}
          />
          <br />
          <ArticleMyADN
            title={chineseUserInfo.particularInfo.title}
            text={chineseUserInfo.particularInfo.text}
          />
        </div>
      )}

      {sectionPosition === "Mayas" && (
        <div className="dropDownMyTalisman-section-container">
          <ArticleMyADN
            title={kingMayaUserInfo.title}
            text={kingMayaUserInfo.text}
          />
          <br />
          <ArticleMyADN title={tonesUserInfo.title} text={tonesUserInfo.text} />
        </div>
      )}
    </div>
  );
};
