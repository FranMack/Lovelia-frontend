import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { envs } from "../../config/envs";
import { BackgroundVideo } from "../../ui/components/BackgroundVideo";
//import { ShopingCartContext } from "../../context/modalShopingCartContext";
import { ShopingCartContext } from "../../context";
import { TimerContext } from "../../context/timerContext";
import { UserContext } from "../../context/userContext";
import { AcountInfo, ProfileNavbar } from "../components";

import {
  ShopingHistory,
  ShopingHistoryProp,
} from "../components/ShopingHistory";

function Profile() {
  const [buttonFocusPosition, setButttonFocusPosition] =
    useState("Datos de cuenta");

  const handleButtonFocus = (buttonName: string) => {
    setButttonFocusPosition(buttonName);
  };

  // const { shopingCartOpen } = useContext(ShopingCartContext);
  const { name, lastname, email, subscription, talismanActivated,setSuscription,setTalismanActivated } =
    useContext(UserContext);

  const [shopingHistory, setShopingHistory] = useState<ShopingHistoryProp>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (email) {
      axios
        .get(`${envs.API_DOMAIN}/api/v1/sold-product/list/${email}`, {
          withCredentials: true,
        })
        .then((response) => {
          setShopingHistory(response.data.combinedArray.reverse());
          setSuscription(response.data.talismanDigitalStatus.subscription)
          setTalismanActivated(response.data.talismanDigitalStatus.activated)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [email]);

  const { activatedAlarm } = useContext(TimerContext);
  const { shopingCartOpen } = useContext(ShopingCartContext);


console.log("xxxxxxxxxxxx",talismanActivated)
  return (
    <main
      className={activatedAlarm || shopingCartOpen ? "viewport-background" : ""}
    >
      <section className="profile-container efectoReveal">
        <BackgroundVideo />
        <ProfileNavbar
          buttonFocusPosition={buttonFocusPosition}
          handleButtonFocus={handleButtonFocus}
        />
        {buttonFocusPosition === "Datos de cuenta" && (
          <AcountInfo
            name={name}
            lastname={lastname}
            email={email}
            subscription={subscription}
            talismanActivated={talismanActivated}
          />
        )}

        {buttonFocusPosition === "Historial de compras" && (
          <ShopingHistory shopingHistory={shopingHistory} />
        )}
      </section>
    </main>
  );
}

export default Profile;
