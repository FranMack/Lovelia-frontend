import { ArrowDown } from "../../assets/images/icons/icons"
export function HomeSection1(){

    return(
        <section className="home-front-page-container">
        <div className="home-center-container">
          <h1>lovelia</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad cum
            vero sunt a, temporibus perferendis aspernatur omnis tempora at
            deleniti rerum eius cupiditate laborum fugit exercitationem aliquam
            quam iste.
          </p>
        </div>
  
        <div className="home-bottom-container">
          <p>Descubre más</p>
  
          <div className="home-icon-container">
            <ArrowDown />
          </div>
        </div>
      </section>
    )
}