import { LoveliaIcon } from "../../assets/images/icons/icons"
import { ButtonArrowDown } from "../../commons/ButtonArrowDown"
import videoHome from "../../assets/videos/videoHome.mp4"
export function HomeSection1(){

    return(
        <section className="home-front-page-container">
          <video autoPlay muted loop>
        <source src={videoHome} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className="home-center-container">
         <LoveliaIcon/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad cum
            vero sunt a, temporibus perferendis aspernatur omnis tempora at
            deleniti rerum eius cupiditate laborum fugit exercitationem aliquam
            quam iste.
          </p>
    
        </div>
        <div className="auxiliar-container">
  <ButtonArrowDown title="Descubre más"/>
  </div>
      </section>
    )
}

