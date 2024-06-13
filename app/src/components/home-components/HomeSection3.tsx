import wallpaper from "../../assets/images/imagen-colgante.png";

import { WallpaperTipo1 } from "../WallpaperTipo1";
import { Wallpaper1Options } from "../WallpaperTipo1";
import { TalismanesComponent } from "../TalismanesComponent";

const infoWallpaper: Wallpaper1Options = {
  image: wallpaper,
  height: "70vh",
};


export function HomeSection3() {
  return (
    <>
    <div className="section3-auxiliar-wrapper1">
      <TalismanesComponent />
      </div>
      <div className="section3-auxiliar-wrapper2">
      <WallpaperTipo1 {...infoWallpaper} />
      </div>
    </>
  );
}
