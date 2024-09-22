import { ObliqueArrow } from "../../assets/icons/icons";

export interface FrontPage2Options {
  image: string;
  title: string;
  color:string;
  secundaryTitle?: string;
}

export const FrontPage2 = ({
  image,
  title,
  color,
  secundaryTitle,
}: FrontPage2Options) => {
  const titleArray = title.split(" ");

  return (
    <section className="frontPage2-container" style={{color:color}}>
      <img src={image} alt="wallpaper" />
      <div className="frontPage2-center-container">
        <div className="frontPage2-text-container revealLogo">
          <h2>
            <div className="icon-container">
              <ObliqueArrow color={color} />
            </div>
            {titleArray[0]}
          </h2>
          <h2>{titleArray[1]}</h2>
          <h3>{secundaryTitle}</h3>
        </div>
      </div>
    </section>
  );
};
