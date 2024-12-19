import talisman1 from "../../talismanAnalogic/assets/productos/aura_oro.webp";
import talisman2 from "../../talismanAnalogic/assets/productos/modelo_halo.webp";
import talisman3 from "../../talismanAnalogic/assets/productos/modelo_bindu.webp";
import pulseraOro from "../../talismanAnalogic/assets/productos/pulsera_oro.webp"
import pulseraPlata from "../../talismanAnalogic/assets/productos/pulsera_plata.webp"
import talismanDigital from "./ejemplo1_talisman_digital.webp";

interface TalismanOptions {
  image: string;
  title: string;
  path: string;
}

export const infoTalismanes: TalismanOptions[] = [
  { image: talisman1, title: "Talismán Aura", path: "/buy-analogic?model=Aura&metal=Aleación bañada en oro&rock=Lapislázuli&chain=Cadena" },
  { image: talisman2, title: "Talismán Halo", path: "/buy-analogic?model=Halo" },
  { image: talisman3, title: "Talismán Bindu", path: "/buy-analogic?model=Bindu" },
  { image: pulseraOro, title: "Pulsera de Oro", path: "/buy-analogic?model=Pulsera" },
   { image: pulseraPlata, title: "Pulsera de Plata", path: "/buy-analogic?model=Pulsera&metal=Plata 925" },
  { image: talismanDigital, title: "Talismán Digital", path: "/buy-digital" },
];
