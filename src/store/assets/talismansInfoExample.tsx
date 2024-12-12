import talisman1 from "../../talismanAnalogic/assets/productos/aura_oro.webp";
import talisman2 from "../../talismanAnalogic/assets/productos/modelo_halo.webp";
import talisman3 from "../../talismanAnalogic/assets/productos/modelo_bindu.webp";
import pulsera from "../../talismanAnalogic/assets/productos/pulsera_oro.webp"
import talismanDigital from "../../home/assets/home_td.webp";

interface TalismanOptions {
  image: string;
  title: string;
  path: string;
}

export const infoTalismanes: TalismanOptions[] = [
  { image: talisman1, title: "Talismán Aura", path: "/buy-analogic?model=Aura&metal=Aleación bañada en oro&rock=Lapislázuli&chain=Cadena" },
  { image: talisman2, title: "Talismán Halo", path: "/buy-analogic?model=Halo" },
  { image: talisman3, title: "Talismán Bindu", path: "/buy-analogic?model=Bindu" },
   { image: pulsera, title: "Pulsera Lovelia", path: "/buy-analogic?model=Pulsera" },
  { image: talismanDigital, title: "Talismán Digital", path: "/buy-digital" },
];
