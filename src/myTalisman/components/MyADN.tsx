import {useContext, useState} from 'react';
import {CloseIcon} from '../../assets/icons/icons';
import {TalismanButtonFocusContext} from '../../context';
import {MyAdnProps} from '../interface/myAdn.interface';
import {ArticleMyADN} from './ArticleMyADN';

const sections = [
  {section: 'Números', title: 'Energía de los Números'},
  {section: 'Astros', title: 'Energía de los Astros'},
  {section: 'H. Chino', title: 'Energía de la Naturaleza'},
  {section: 'Kin Maya', title: 'Energía de los Mayas'},
];

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
  const {handleButtonFocus} = useContext(TalismanButtonFocusContext);

  const [sectionPosition, setSectionPosition] = useState<string>('Números');
  const handleSectionPosition = (item: string) => {
    setSectionPosition(item);
  };

  return (
    <div className="dropDownMyTalisman-container">
      <div className="dropDownMyTalisman-button-container">
        <div className="icon-container">
          <CloseIcon
            onClick={() => {
              handleButtonFocus('');
            }}
          />
        </div>
      </div>

      <div className="dropDownMyTalisman-title-wrapper">
        <h3>
          {sections.find(item => {
            return item.section === sectionPosition;
          })?.title ?? sections[0].title}
        </h3>
      </div>

      <div className="dropDownMyTalisman-top-container">
        <ul>
          {sections.map((item, i) => {
            return (
              <li
                onClick={() => handleSectionPosition(item.section)}
                className={
                  sectionPosition === item.section ? 'button-focus-style' : ''
                }
                key={i}>
                {item.section}
              </li>
            );
          })}
        </ul>
      </div>

      {sectionPosition === 'Números' && (
        <div className="dropDownMyTalisman-section-container">
          <ArticleMyADN
            title={numberUserInfo.title}
            text={numberUserInfo.text}
          />
        </div>
      )}

      {sectionPosition === 'Astros' && (
        <div className="dropDownMyTalisman-section-container">
          <ArticleMyADN title={sunUserInfo.title} text={sunUserInfo.text} />
          <br />
          <ArticleMyADN title={moonUserInfo.title} text={moonUserInfo.text} />
          <br />
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
      {sectionPosition === 'H. Chino' && (
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

      {sectionPosition === 'Kin Maya' && (
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
