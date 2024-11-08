import { talismanTones, chineseHoroscope, stamps } from "../assets/talismanBoxInfo";
import dot from "../assets/misc/dot.png";
import { useEffect, useState } from "react";

interface TalismanBoxOptions {
  horoscope?: string;
  numerology?: number;
  kinMaya?: string;
  tones?: string;
  phrase?: string;
}

export const TalismanBox = ({
  numerology = 8,
  kinMaya = "dragon",
  tones = "cosmico",
  horoscope = "snake",
  phrase = "Activa tu talismán",
}: TalismanBoxOptions) => {
  
  // Function to generate an array of 'dots' based on numerology
  const dotFunction = (chineseNumber: number) => {
    const array = [];
    for (let i = 0; i < chineseNumber; i++) {
      array.push(i);
    }
    const array2=[1,2,3,4,5,6,7,8]
    return array2;
  };

  const [path, setPath] = useState({
    chinesePath: horoscope,
    solarSailPath: "",
    tonesPath: "",
    numerology: numerology,
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
    const solarSailPath = solarSailFilter(kinMaya);
    const tonesPath = tonesFilter(tones);
    const chinesePath=chineseHoroscopeFilter(horoscope)

    // Update state with paths for the talisman
    setPath({
      chinesePath, // Not sure if you want to set this dynamically from horoscope
      solarSailPath,
      tonesPath,
      numerology,
    });
  }, [kinMaya, tones, numerology]); // Re-run the effect if any of these change


  console.log("xxxxxxxxxxx",path)
  return (
    <div className="talismanBox-container">
      <div className="talismanBox-top-container">
        {dotFunction(path.numerology).map((_, i) => (
          <img key={i} src={dot} alt="dot" />
        ))}
      </div>

      <div className="talismanBox-bottom-container">
        <input type="text" value={phrase} readOnly /> {/* Make input readonly */}
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
