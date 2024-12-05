import talisman1 from "../../talismanAnalogic/assets/modelo_aura.png";
import talisman2 from "../../talismanAnalogic/assets/modelo_halo.png";
import talisman3 from "../../talismanAnalogic/assets/modelo_bindu.png";
import pulsera from "../../talismanAnalogic/assets/pulsera_oro.png"
import talismanDigital from "../../home/assets/home_td.webp";

interface TalismanOptions {
  image: string;
  title: string;
  path: string;
}

export const infoTalismanes: TalismanOptions[] = [
  { image: talisman1, title: "Talismán Aura", path: "/buy-analogic" },
  { image: talisman2, title: "Talismán Halo", path: "/buy-analogic" },
  { image: talisman3, title: "Talismán Bindu", path: "/buy-analogic" },
   { image: pulsera, title: "Pulsera Lovelia", path: "/buy-analogic" },
  { image: talismanDigital, title: "Talismán Digital", path: "/buy-digital" },
];
