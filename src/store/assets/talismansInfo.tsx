import talisman1 from "../../talismanAnalogic/assets/talisman1.png"
import talisman2 from "../../talismanAnalogic/assets/talisman2.png"
import talisman3 from "../../talismanAnalogic/assets/talisman3.png"
import talismanDigital from "../../home/assets/home_td.png";

interface TalismanOptions{
    image:string,
    title:string
    }

export const infoTalismanes:TalismanOptions[]=[
    {image:talisman1,title:"Talismán Aura"},{image:talisman2,title:"Talismán Halo"},{image:talisman3,title:"Talismán Bindu"},{image:talismanDigital,title:"Talismán Digital"},
]