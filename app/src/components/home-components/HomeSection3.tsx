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
      <TalismanesComponent />
      <WallpaperTipo1 {...infoWallpaper} />
    </>
  );
}
