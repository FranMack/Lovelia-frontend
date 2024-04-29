import { ButtonArrowDown } from "../../commons/ButtonArrowDown"
import videoWallpaper from "../../assets/videos/videoHome.mp4"
export function IntensionesSection1(){

    return( <article className="intensiones-section1-container">
        <video autoPlay muted loop>
        <source src={videoWallpaper} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className="intensiones-section1-center-container">
        <h2>¿Qué son las intenciones lovelia?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br/> exercitation ullamco laboris nisi ut aliquip ex ea consequat. </p>
        <div className="auxiliar-container">
        <ButtonArrowDown title="Explora"/>
        </div>
        </div>
        
    </article>)
}