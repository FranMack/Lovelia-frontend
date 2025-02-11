export interface GeneralInfo {
  title: string;
  text: string[];
}

interface aspectingPlanet {
  title: string;
}

export interface ChineseUserInfo {
  commonInfo: GeneralInfo;
  particularInfo: GeneralInfo;
}

interface AspectsAndPlanetsGeneralInfo {
  title: string;
  text: string;
}
interface UserAspect {
  planet: GeneralInfo;
  aspect: GeneralInfo;
  aspectingPlanet: aspectingPlanet;
}

export interface AspectsAndPlanetsUserInfo {
  generalInfo: AspectsAndPlanetsGeneralInfo;
  userAspects: UserAspect[];
  filterAspects: AspectsAndPlanetsGeneralInfo[];
}

export interface MyAdnProps {
  kingMayaUserInfo: GeneralInfo;
  tonesUserInfo: GeneralInfo;
  chineseUserInfo: ChineseUserInfo;
  ascendantUserInfo: GeneralInfo;
  sunHouseUserInfo: GeneralInfo;
  moonHouseUserInfo: GeneralInfo;
  sunUserInfo: GeneralInfo;
  moonUserInfo: GeneralInfo;
  aspectsAndPlanetsUserInfo: AspectsAndPlanetsUserInfo;
  numberUserInfo: GeneralInfo;
}

export interface AstrologicalDataProps {
  numerologySymbol: number;
  chinseseSymbol: string;
  solarSailSymbol: string;
  toneSymbol: string;
  constellation: string;
  kingMayaUserInfo: GeneralInfo;
  tonesUserInfo: GeneralInfo;
  chineseUserInfo: ChineseUserInfo;
  ascendantUserInfo: GeneralInfo;
  sunHouseUserInfo: GeneralInfo;
  moonHouseUserInfo: GeneralInfo;
  sunUserInfo: GeneralInfo;
  moonUserInfo: GeneralInfo;
  aspectsAndPlanetsUserInfo: AspectsAndPlanetsUserInfo;
  numberUserInfo: GeneralInfo;
}
