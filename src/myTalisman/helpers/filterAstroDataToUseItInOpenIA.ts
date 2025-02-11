import { MyAdnProps } from "../interface/myAdn.interface";

export function generateAstroProfile(astroData: MyAdnProps) {
return `

Información de mi ascendente: ${astroData.ascendantUserInfo.text.join("")}
`
}
