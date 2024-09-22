import axios from "axios";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import * as Yup from "yup";
import { DeleteIcon } from "../../assets/icons";
import { envs } from "../../config/envs";
import { MobileMenuContext } from "../../context/mobileMenuContext";
import { ScreenSizeContext } from "../../context/screenSize.context";
import { ShopingCartContext } from "../../context/shopingCart.context";
import logoMp from "../assets/mercado_pago_logo.png";

export const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { screenWidth } = useContext(ScreenSizeContext);

  const [step, setStep] = useState<string>("resume");
  const nextStep = () => {
    setStep("finalForm");
  };

  const { shopingCartItems, setShopingCartItems } =
    useContext(ShopingCartContext);

  const { menuOpen } = useContext(MobileMenuContext);

  const totalPrice = () => {
    if (shopingCartItems.length === 0) {
      return 0; // Devuelve 0 si el carrito aún no ha cargado.
    }

    const consultPrice = shopingCartItems[0].consultPrice
      ? shopingCartItems[0].consultPrice
      : 5;

    const plansPrice = shopingCartItems.reduce(
      (acc, item) => acc + item.price,
      0
    );

    const consultNumbers = shopingCartItems.filter(
      (item) => item.consult === true
    ).length;

    const total = plansPrice + consultNumbers * consultPrice;

    return total;
  };
  const deleteShopingCartItem = (id: number) => {
    if (shopingCartItems.length === 0) {
      return 0; // Devuelve 0 si el carrito aún no ha cargado.
    }
    const shopingCartUpdated = shopingCartItems.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    localStorage.setItem("shopingCart", JSON.stringify(shopingCartUpdated));
    setShopingCartItems(shopingCartUpdated);
  };

  const singUpForm = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .required("Campo requerido"),
      lastname: Yup.string()
        .min(2, "El apellido debe tener al menos 2 caracteres")
        .required("Campo requerido"),
      email: Yup.string().email("Email invalido").required("Campo requerido"),
      phone: Yup.string().matches(
        /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        "Número de teléfono no válido"
      ),
    }),

    onSubmit: async (values) => {
      if(isLoading){
        return
      }
      setIsLoading(true);
      const buyerInfo = {
        name: values.name,
        lastname: values.lastname,
        email: values.email,
        phone: values.phone,
      };
      const items = shopingCartItems.map((item) => {
        return {
          id: item.id,
          title: item.consult ? `${item.product} (+ Consulta)` : item.product,
          unit_price: item.consult
            ? item.consultPrice + item.price
            : item.price,
          currency: "ARS",
          quantity: 1,
        };
      });

      try {
        const createOrder = await axios.post(
          `${envs.API_DOMAIN}/api/payment-mercadopago/create-order`,
          { buyerInfo, items }
        );
        localStorage.removeItem("shopingCart");
        window.location.href = createOrder.data.link_de_pago;
      } catch (error) {
        console.log(error);
      }
    },
  });

  console.log("xxxxxxxxxxx", shopingCartItems);
  return (
    <section
      className={
        menuOpen ? "mobileModalOpen checkout-container" : "checkout-container"
      }
    >
      <h2>INICIO / PLANES / TIENDA / MI CARRITO / CHECKOUT</h2>
      <div className="checkout-center-container">
        {(screenWidth >= 1024 || step === "finalForm") && (
          <div className="checkout-internal-container">
            <form onSubmit={singUpForm.handleSubmit}>
              <h3>Tus datos</h3>

              <label htmlFor="">
                Nombre
                <input
                  className={
                    singUpForm.touched.name && singUpForm.errors.name
                      ? "input-error"
                      : ""
                  }
                  type="text"
                  required
                  value={singUpForm.values.name}
                  onChange={singUpForm.handleChange}
                  onBlur={singUpForm.handleBlur}
                  id="name"
                />
                {singUpForm.touched.name && singUpForm.errors.name && (
                  <p>{singUpForm.errors.name}</p>
                )}
              </label>
              <label htmlFor="">
                Apellido
                <input
                  type="text"
                  className={
                    singUpForm.touched.lastname && singUpForm.errors.lastname
                      ? "input-error"
                      : ""
                  }
                  required
                  value={singUpForm.values.lastname}
                  onChange={singUpForm.handleChange}
                  onBlur={singUpForm.handleBlur}
                  id="lastname"
                />
                {singUpForm.touched.lastname && singUpForm.errors.lastname && (
                  <p>{singUpForm.errors.lastname}</p>
                )}
              </label>
              <label htmlFor="">
                Email
                <input
                  type="email"
                  className={
                    singUpForm.touched.email && singUpForm.errors.email
                      ? "input-error"
                      : ""
                  }
                  required
                  value={singUpForm.values.email}
                  onChange={singUpForm.handleChange}
                  onBlur={singUpForm.handleBlur}
                  id="email"
                />
                {singUpForm.touched.email && singUpForm.errors.email && (
                  <p>{singUpForm.errors.email}</p>
                )}
              </label>
              <label htmlFor="">
                Telefono
                <input
                  type="text"
                  className={
                    singUpForm.touched.phone && singUpForm.errors.phone
                      ? "input-error"
                      : ""
                  }
                  id="phone"
                  value={singUpForm.values.phone}
                  onChange={singUpForm.handleChange}
                  onBlur={singUpForm.handleBlur}
                />
                {singUpForm.touched.phone && singUpForm.errors.phone && (
                  <p>{singUpForm.errors.phone}</p>
                )}
              </label>

              <div className="mp-info-container">
                <div className="image-container">
                  <img src={logoMp} alt="logo mercado pago" />
                </div>
                <div className="info-container">
                  <h3>Pago seguro</h3>
                  <p>
                    Para completar la transacción, te enviaremos a los
                    servidores seguros de Mercadopago.
                  </p>
                </div>
              </div>

              <button type="submit">
                {isLoading ? (
                  <BeatLoader color={"white"} speedMultiplier={0.4} />
                ) : (
                  "Continuar"
                )}
              </button>
            </form>
          </div>
        )}
        <div className="checkout-internal-container left">
          <div className="resume-container">
            <h3>Resumén del pedido</h3>

            {shopingCartItems.map((item) => {
              return (
                <div key={item.id} className="checkout-card-container">
                  <img src={item.image} alt={item.product} />
                  <div className="card-info-container">
                    <div className="card-title">
                      <DeleteIcon
                        onClick={() => {
                          deleteShopingCartItem(item.id);
                        }}
                      />
                    </div>

                    <h5>{item.product}</h5>
                    <div className="card-price-container">
                      <div className="item-price-container">
                        <p>Plan</p>
                        <strong>{`$ ${item.price}`}</strong>
                      </div>

                      {item.consult && (
                        <div className="item-price-container">
                          <p>Consulta profesional</p>
                          <strong>{`$ ${item.consultPrice}`}</strong>
                        </div>
                      )}

                      <div className="item-price-container">
                        <p>Subtotal</p>
                        <strong>{`$ ${
                          item.price + (item.consult ? item.consultPrice : 0)
                        }`}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="card-prince-container">
            <p>TOTAL</p>
            <p>{`$${totalPrice()}`}</p>
          </div>
          {screenWidth < 1024 && step === "resume" && (
            <button className="next-step-button" onClick={nextStep}>
              Continuar
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
