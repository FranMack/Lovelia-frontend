import giftWallpaper from "../assets/images/gift-wallpaper.png"

export function GiftComponent(){

    return(
        <div className="giftComponent-container">
        <img src={giftWallpaper} alt="Talisman" />

        <div className="giftComponent-info">
          <h5>Activa tu Talismán</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut labore et dolore
            <br /> magna aliqua.
          </p>
        </div>
      </div>
    )
}