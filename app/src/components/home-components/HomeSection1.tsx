import { ArrowDown } from "../../assets/images/icons/icons"
import { LoveliaIcon } from "../../assets/images/icons/icons"
export function HomeSection1(){

    return(
        <section className="home-front-page-container">
        <div className="home-center-container">
         <LoveliaIcon/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad cum
            vero sunt a, temporibus perferendis aspernatur omnis tempora at
            deleniti rerum eius cupiditate laborum fugit exercitationem aliquam
            quam iste.
          </p>
        </div>
  
        <div className="home-bottom-container">
          <h6>Descubre más</h6>
  
          <div className="home-icon-container">
            <ArrowDown />
          </div>
        </div>
      </section>
    )
}