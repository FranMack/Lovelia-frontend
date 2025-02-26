import {
  talismanTones,
  chineseHoroscope,
  stamps,
} from "../assets/talismanBoxInfo";
import dot from "../assets/misc/dot.png";
import { useEffect, useState } from "react";

interface TalismanBoxOptions {
  chineseSymbol?: string;
  numerologySymbol?: number;
  solarSailSymbol?: string;
  toneSymbol?: string;
  phrase?: string;
}

export const TalismanBox = ({
  numerologySymbol = 8,
  solarSailSymbol = "dragon",
  toneSymbol = "cosmico",
  chineseSymbol = "snake",
  phrase = "Activa tu talismán",
}: TalismanBoxOptions) => {
  // Function to generate an array of 'dots' based on numerology
  const dotFunction = (chineseNumber: number) => {
    const array = [];
    for (let i = 0; i < chineseNumber; i++) {
      array.push(i);
    }

    return array;
  };

  const [path, setPath] = useState({
    chinesePath: chineseSymbol,
    solarSailPath: "",
    tonesPath: "",
    numerologyPath: numerologySymbol,
  });

  // Function to filter solar sail path based on kinMaya
  const solarSailFilter = (kinMaya: string) => {
    const solarSail = stamps.find((item) => item.stamp === kinMaya);
    return solarSail?.path || ""; // Return an empty string if not found
  };

  // Function to filter tones path based on the tone value
  const tonesFilter = (tone: string) => {
    const toneItem = talismanTones.find((item) => item.tone === tone);
    return toneItem?.path || ""; // Return an empty string if not found
  };

  const chineseHoroscopeFilter = (animal: string) => {
    const horoscopeItem = chineseHoroscope.find((item) => item.sign === animal);
    return horoscopeItem?.path || ""; // Return an empty string if not found
  };

  useEffect(() => {
    const solarSailPath = solarSailFilter(solarSailSymbol);
    const tonesPath = tonesFilter(toneSymbol);
    const chinesePath = chineseHoroscopeFilter(chineseSymbol);

    // Update state with paths for the talisman
    setPath({
      chinesePath, // Not sure if you want to set this dynamically from horoscope
      solarSailPath,
      tonesPath,
      numerologyPath: numerologySymbol,
    });
  }, [solarSailSymbol, toneSymbol, numerologySymbol,chineseSymbol]); // Re-run the effect if any of these change

  return (
    <div className="talismanBox-container efectoRevealTalisman">
      <div className="talismanBox-top-container">
        {dotFunction(path.numerologyPath).map((_, i) => (
          <img key={i} src={dot} alt="dot" />
        ))}
      </div>

      <div className="talismanBox-bottom-container">
        <input type="text" value={phrase} readOnly />{" "}
        {/* Make input readonly */}
        <div className="symbols-container">
          <div className="chinese-icon-container">
            <img src={path.chinesePath} alt="chinese horoscope sign" />
          </div>
          <div className="cosmicTone-icon-container">
            <img src={path.tonesPath} alt="cosmic tone" />
          </div>
          <div className="solarSail-auxiliar">
            <div className="solarSail-icon-container">
              <img src={path.solarSailPath} alt="solar sail" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
