import { useContext, useEffect, useRef, useState,CSSProperties  } from "react";
import { useForm } from "../hooks/useForm";
import { ShopingCartContext } from "../context/modalShopingCart";
import { ProductosOptions } from "../components/ShopingCart";
import videoHome from "../assets/videos/videoHome.mp4";
import { CheckOutValidation } from "../helpers/checkOutValidations";
import axios from "axios";
import { MercadoPagoIcon,PayPalIcon } from "../assets/images/icons/icons";
import BeatLoader from "react-spinners/BeatLoader";

const sections = ["1. Identificación", "2. Envío", "3. Pago"];

//el precio del envío me lo devería dar la api de correos
const deliveryPrice = 1;

export function CheckOutAnalogic() {
  window.scrollTo(0, 0);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.1;
    }
  }, [videoRef]);

  const [buttonFocusPosition, setButttonFocusPosition] =
    useState("1. Identificación");

  const handleButtonFocus = (buttonName: string) => {
    setButttonFocusPosition(buttonName);
  };

  const { menuOpen } = useContext(ShopingCartContext);

  const [shopingCartItems, setShopingCartItems] = useState<ProductosOptions[]>(
    []
  );

  useEffect(() => {
    const shopingCartJSON = localStorage.getItem("shopingCart") || "[]";
    setShopingCartItems(JSON.parse(shopingCartJSON));
  }, []);

  const productsPrice = () => {
    return shopingCartItems.reduce((acc, item) => acc + item.price, 0);
  };

  //FORM

  const initialForm = {
    name: "",
    lastname: "",
    email: "",
    dni: "",
    phone: "",
    receiver: "",
    street: "",
    streetNumber: "",
    apartmentNumber: "",
    state: "",
    city: "",
    country: "",
    postalCode: "",
  };

  const { formState, onInputChange, onResetForm } = useForm(initialForm);
  const {
    name,
    lastname,
    email,
    dni,
    phone,
    receiver,
    street,
    streetNumber,
    apartmentNumber,
    state,
    city,
    country,
    postalCode,
  } = formState;

  const [paymetType, setPaymentType] = useState<string>("");

  const handlePaymentType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentType(event.target.value);
  };

  //validation errors
  const [nameErrors, setNameErrors] = useState<string[]>([]);
  const [lastNameErrors, setLastnameErrors] = useState<string[]>([]);
  const [emailErrors, setEmailErrors] = useState<string[]>([]);
  const [dniErrors, setDniErrors] = useState<string[]>([]);
  const [phoneErrors, setPhoneErrors] = useState<string[]>([]);
  const [receiverErrors, setReceiverErrors] = useState<string[]>([]);
  const [streetErrors, setStreetErrors] = useState<string[]>([]);
  const [streetNumberErrors, setStreetNumberErrors] = useState<string[]>([]);
  const [cityErrors, setCityErrors] = useState<string[]>([]);
  const [stateErrors, setStateErrors] = useState<string[]>([]);
  const [countryErrors, setCountryErrors] = useState<string[]>([]);
  const [postalCodeErrors, setPostalCodeErrors] = useState<string[]>([]);
  const [errorWarning,setErrorWarning]=useState<string>("")

  //is loading

  const [isLoading,setIsLoading]=useState(false)
 
  const handleBlur = (field: string) => {
    const [errors] = CheckOutValidation.create(formState);
    const fieldError = errors?.find((error) =>
      Object.keys(error).includes(field)
    );
    switch (field) {
      case "name":
        setNameErrors(fieldError ? [fieldError[field]] : []);
        break;
      case "lastname":
        setLastnameErrors(fieldError ? [fieldError[field]] : []);
        break;
      case "email":
        setEmailErrors(fieldError ? [fieldError[field]] : []);
        break;
      case "dni":
        setDniErrors(fieldError ? [fieldError[field]] : []);
        break;
      case "phone":
        setPhoneErrors(fieldError ? [fieldError[field]] : []);
        break;
      case "receiver":
        setReceiverErrors(fieldError ? [fieldError[field]] : []);
        break;
      case "street":
        setStreetErrors(fieldError ? [fieldError[field]] : []);
        break;
      case "streetNumber":
        setStreetNumberErrors(fieldError ? [fieldError[field]] : []);
        break;
      case "city":
        setCityErrors(fieldError ? [fieldError[field]] : []);
        break;
      case "state":
        setStateErrors(fieldError ? [fieldError[field]] : []);
        break;
      case "country":
        setCountryErrors(fieldError ? [fieldError[field]] : []);
        break;
      case "postalCode":
        setPostalCodeErrors(fieldError ? [fieldError[field]] : []);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
   

    const [errors] = CheckOutValidation.create(formState);

    if (errors) {
      errors.map((error) => {
        if (Object.keys(error).includes("name")) {
          return setNameErrors((prevErrors) => [...prevErrors, error["name"]]);
        }
        if (Object.keys(error).includes("lastname")) {
          return setLastnameErrors((prevErrors) => [
            ...prevErrors,
            error["lastname"],
          ]);
        }
        if (Object.keys(error).includes("email")) {
          return setEmailErrors((prevErrors) => [
            ...prevErrors,
            error["email"],
          ]);
        }

        if (Object.keys(error).includes("dni")) {
          return setDniErrors((prevErrors) => [
            ...prevErrors,
            error["dni"],
          ]);
        }

        if (Object.keys(error).includes("phone")) {
          return setPhoneErrors((prevErrors) => [
            ...prevErrors,
            error["phone"],
          ]);
        }

        if (Object.keys(error).includes("receiver")) {
          return setReceiverErrors((prevErrors) => [
            ...prevErrors,
            error["receiver"],
          ]);
        }

        if (Object.keys(error).includes("street")) {
          return setStreetErrors((prevErrors) => [
            ...prevErrors,
            error["street"],
          ]);
        }

        if (Object.keys(error).includes("streetNumber")) {
          return setStreetNumberErrors((prevErrors) => [
            ...prevErrors,
            error["streetNumber"],
          ]);
        }

        if (Object.keys(error).includes("city")) {
          return setCityErrors((prevErrors) => [
            ...prevErrors,
            error["city"],
          ]);
        }

        if (Object.keys(error).includes("state")) {
          return setStateErrors((prevErrors) => [
            ...prevErrors,
            error["state"],
          ]);
        }

        if (Object.keys(error).includes("country")) {
          return setCountryErrors((prevErrors) => [
            ...prevErrors,
            error["country"],
          ]);
        }

        if (Object.keys(error).includes("postalCode")) {
          return setPostalCodeErrors((prevErrors) => [
            ...prevErrors,
            error["postalCode"],
          ]);
        }



      });

      //limpia los estados cuando no hay errores
      !errors.find((error) => {
        return Object.keys(error).includes("name");
      }) && setNameErrors([]);
      !errors.find((error) => {
        return Object.keys(error).includes("lastname");
      }) && setLastnameErrors([]);
      !errors.find((error) => {
        return Object.keys(error).includes("email");
      }) && setEmailErrors([]);

      setErrorWarning("validationErrors")
      return;
    }

    if (!paymetType) {
      setErrorWarning("missing-payment-type")
      return;
    }

    if(shopingCartItems.length<1){
      setErrorWarning("empty-cart")
      return
    }

    setIsLoading(true)

    const formData = { name, lastname, email };

    //VERS SI ESTO VA
    localStorage.setItem("checkout-form", JSON.stringify(formData));

    const productDetails = shopingCartItems.map((item) => {
      return {
        ...item,
        receiver,
        phone,
        email,
        name: "Talisman",
        postal_code: postalCode,
        address: `${street} ${streetNumber} ${apartmentNumber && `Piso o Departamento ${apartmentNumber}`} - ${city}, ${state}, ${country} `,
        payment_method: `${paymetType==="mercadoPago" ? "Mercado Pago" :"Paypal"}`,
      };
    });

    if (paymetType === "mercadoPago") {
      const shopingCartMP = shopingCartItems.map((item: ProductosOptions) => {
        return {
          title: item.model,
          quantity: item.quantity,
          unit_price: item.price,
          currency_id: "USD",
        };
      });

      const delivery = {
        title: "Envío",
        quantity: 1,
        unit_price: deliveryPrice,
        currency_id: "USD",
      };

      axios
        .post(
          "http://localhost:3000/api/v1/payment-mercadopago/create-order",
          {
            items: [...shopingCartMP, delivery],
            email: email,
            type: "analog-product",
            productDetails: productDetails,
          },
          { withCredentials: true }
        )
        .then((response) => {
          localStorage.removeItem("shopingCart");
          window.location.href = response.data.link_de_pago;
          setIsLoading(false)
        })
        .then(()=>{ setIsLoading(false)})
        .catch((error) => {
          console.log(error);
        });
    }

    if (paymetType === "paypal") {

      const shopingCartPaypal = shopingCartItems.map((item: ProductosOptions) => {
        return {
          title: item.model,
          quantity: item.quantity,
          unit_amount: {
            currency_code: "USD",
            value: item.price,
          }
        
        };
      });

      const delivery = {
        title: "Envío",
        quantity: 1,
        unit_amount: {
          currency_code: "USD",
          value: deliveryPrice,
        }
      };



      axios
      .post(
        "http://localhost:3000/api/v1/payment-paypal/create-order",{email, type: "analog-product",productDetails,items:[...shopingCartPaypal,delivery]})
        .then((response)=>{
          localStorage.removeItem("shopingCart");
          window.location.href = response.data.link_de_pago;
       
        })
        .then(()=>{ setIsLoading(false)})
        .catch((error) => {
          console.log(error);
        });


    };




  };

  console.log(dniErrors)

  return (
    <main className={menuOpen ? "viewport-background" : ""}>
      <section className="checkout-container efectoReveal">
        <video autoPlay muted loop ref={videoRef}>
          <source src={videoHome} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="checkout-top-container">
          <ul>
            {sections.map((item, i) => {
              return (
                <li
                  onClick={() => handleButtonFocus(item)}
                  className={
                    buttonFocusPosition === item ? "button-focus-style" : ""
                  }
                  key={i}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="checkout-botton-container">
          {buttonFocusPosition === "1. Identificación" ? (
            <div className="checkout-botton-left-container">
              <div className="checkout-title-container">
                <h3>Identificación</h3>
                <h6>Ingresa los datos para la dirección de envío.</h6>
              </div>

              <div className="checkout-form">
                <div className="checkout-form-names-container">
                  <div className="checkout-form-names-internal-container">
                  <label htmlFor="name">Nombre</label>
                  <input
                    value={name}
                    onChange={onInputChange}
                    onBlur={() => handleBlur("name")}
                    name="name"
                    type="text"
                    placeholder="Ej. John"
                    className={
                      nameErrors.length > 0 
                        ? "input-error"
                        : ""
                    }
                  />
                   {nameErrors.length > 0 && (
                    <span className="checkOut-helpers-error">{nameErrors[0]}</span>
                  )}
                  </div>

                  <div className="checkout-form-names-internal-container">
                  <label htmlFor="lastname">Apellido</label>
                  <input
                    value={lastname}
                    onChange={onInputChange}
                    onBlur={() => handleBlur("lastname")}
                    name="lastname"
                    type="text"
                    placeholder="Ej. Doe"
                    className={
                      lastNameErrors.length > 0 
                        ? "input-error"
                        : ""
                    }
                  />
                    {lastNameErrors.length > 0 && (
                    <span className="checkOut-helpers-error">{lastNameErrors[0]}</span>
                  )}
                  </div>
                </div>
                <label htmlFor="email">Email</label>
                <input
                  value={email}
                  onChange={onInputChange}
                  onBlur={() => handleBlur("email")}
                  name="email"
                  type="email"
                  placeholder="ejemplo@gmail.com"
                  className={
                    emailErrors.length > 0  ? "input-error" : ""
                  }
                />
                {emailErrors.length > 0 && (
          <span className="checkOut-helpers-error">{emailErrors[0]}</span>
        )}

                <div className="checkout-form-names-container">
                <div className="checkout-form-names-internal-container">
                <label htmlFor="dni">DNI</label>
                  <input
                    value={dni}
                    onChange={onInputChange}
                    onBlur={() => handleBlur("dni")}
                    name="dni"
                    type="text"
                    placeholder="Ej. 35498535"
                    className={
                      dniErrors.length > 0  ? "input-error" : ""
                    }
                  />
                  {dniErrors.length > 0 && (
          <span className="checkOut-helpers-error">{dniErrors[0]}</span>
        )}
                  </div>
                  <div className="checkout-form-names-internal-container">
                  <label htmlFor="phone">Telefóno</label>
                  <input
                    value={phone}
                    onChange={onInputChange}
                    onBlur={() => handleBlur("phone")}
                    name="phone"
                    type="text"
                    placeholder="Ej. +54 9 342 6544569"
                    className={
                      phoneErrors.length > 0 
                        ? "input-error"
                        : ""
                    }
                  />
                  {phoneErrors.length > 0 && (
          <span className="checkOut-helpers-error">{phoneErrors[0]}</span>
        )}
                  </div>
                </div>

                <button onClick={() => setButttonFocusPosition("2. Envío")}>
                  Continuar
                </button>
              </div>
            </div>
          ) : buttonFocusPosition === "2. Envío" ? (
            <div className="checkout-botton-left-container">
              <div className="checkout-title-container">
                <h3>Detalle de envío</h3>
                <h6>Ingresa los datos envío.</h6>
              </div>

              <div className="checkout-form">
              <label htmlFor="receiver">Destinatario</label>
                <input
                  value={receiver}
                  onChange={onInputChange}
                  onBlur={() => handleBlur("receiver")}
                  name="receiver"
                  type="text"
                  placeholder="Ej. John Doe"
                  className={
                    receiverErrors.length > 0 
                      ? "input-error"
                      : ""
                  }
                 
                />
                 {receiverErrors.length > 0 && (
                    <span className="checkOut-helpers-error">{receiverErrors[0]}</span>
                  )}

                <div className="checkout-form-names-container">
                <div className="checkout-form-names-internal-container">
                <label htmlFor="receiver">Calle</label>
                  <input
                    value={street}
                    onChange={onInputChange}
                    onBlur={() => handleBlur("street")}
                    name="street"
                    type="text"
                    placeholder="Ej. Av. Las Américas"
                    className={
                      streetErrors.length > 0 
                        ? "input-error"
                        : ""
                    }
                  />

{streetErrors.length > 0 && (
                    <span className="checkOut-helpers-error">{streetErrors[0]}</span>
                  )}
                  </div>

                  <div className="checkout-form-names-internal-container">
                  <label htmlFor="streetNumber">Número</label>
                  <input
                    value={streetNumber}
                    onChange={onInputChange}
                    onBlur={() => handleBlur("streetNumber")}
                    name="streetNumber"
                    type="text"
                    placeholder="Ej. 2030"
                    className={
                      streetNumberErrors.length > 0 
                        ? "input-error"
                        : ""
                    }
                  />
                  {streetNumberErrors.length > 0 && (
                    <span className="checkOut-helpers-error">{streetNumberErrors[0]}</span>
                  )}
                  </div>
                </div>
                <label htmlFor="apartmentNumber">Departamento</label>
                <input
                  value={apartmentNumber}
                  onChange={onInputChange}
                  onBlur={() => handleBlur("apartmentNumber")}
                  name="apartmentNumber"
                  type="text"
                  placeholder="Ej. 8A"
              
                />

                <div className="checkout-form-names-container">
                <div className="checkout-form-names-internal-container">
                <label htmlFor="city">Departamento</label>
                  <input
                    value={city}
                    onChange={onInputChange}
                    onBlur={() => handleBlur("city")}
                    name="city"
                    type="text"
                    placeholder="Ej. Rosario"
                    className={
                      cityErrors.length > 0 
                        ? "input-error"
                        : ""
                    }
                  />
                   {cityErrors.length > 0 && (
                    <span className="checkOut-helpers-error">{cityErrors[0]}</span>
                  )}
                  </div>
                  <div className="checkout-form-names-internal-container">
                  <label htmlFor="state">Provincia</label>
                  <input
                    value={state}
                    onChange={onInputChange}
                    onBlur={() => handleBlur("state")}
                    name="state"
                    type="text"
                    placeholder="Ej. Santa Fe"
                    className={
                      stateErrors.length > 0 
                        ? "input-error"
                        : ""
                    }
                  />
                  {stateErrors.length > 0 && (
                    <span className="checkOut-helpers-error">{stateErrors[0]}</span>
                  )}
                  </div>
                </div>

                <div className="checkout-form-names-container">
                <div className="checkout-form-names-internal-container">
                <label htmlFor="country">País</label>
                  <input
                    value={country}
                    onChange={onInputChange}
                    onBlur={() => handleBlur("country")}
                    name="country"
                    type="text"
                    placeholder="Ej. Argentina"
                    className={
                      countryErrors.length > 0 
                        ? "input-error"
                        : ""
                    }
                  />
                  {countryErrors.length > 0 && (
                    <span className="checkOut-helpers-error">{countryErrors[0]}</span>
                  )}
                  </div>
                  <div className="checkout-form-names-internal-container">
                  <label htmlFor="postalCode">Codigo postal</label>
                  <input
                    value={postalCode}
                    onChange={onInputChange}
                    onBlur={() => handleBlur("postalCode")}
                    name="postalCode"
                    type="text"
                    placeholder="Ej. 2000"
                    className={
                      postalCodeErrors.length > 0 
                        ? "input-error"
                        : ""
                    }
                  />
                   {stateErrors.length > 0 && (
                    <span className="checkOut-helpers-error">{stateErrors[0]}</span>
                  )}
                  </div>
                </div>

                <button onClick={() => setButttonFocusPosition("3. Pago")}>
                  Continuar
                </button>
              </div>
            </div>
          ) : (
            <div className="checkout-botton-left-container">
              <div className="checkout-title-container">
                <h3>Detalle de pago</h3>
                <h6>Ingresa los datos según tu método de pago seleccionado.</h6>
              </div>

              <div className="checkout-form">
                <div className="checkout-tipo-envio-container">
                  <h5>Selecciona un método de pago</h5>
                  <div className="tipo-envio">
                    <div className="tipo-envio-auxiliar">
                      <label>
                        <input
                          onChange={handlePaymentType}
                          type="radio"
                          name="mercadoPago"
                          value="mercadoPago"
                          checked={paymetType === "mercadoPago"}
                        />
                       <MercadoPagoIcon/>
                      </label>
                    </div>

                    <div className="tipo-envio-auxiliar">
                      <label>
                        <input
                          onChange={handlePaymentType}
                          className="checkmark"
                          type="radio"
                          name="paypal"
                          value="paypal"
                          checked={paymetType === "paypal"}
                        />
                        <PayPalIcon/>
                      </label>
                    </div>
                  </div>
                </div>
                {(paymetType === "paypal" && !errorWarning) ? (
                  <div className="complementary-info-payment-container">
                    <p>
                      Para completar la transacción, te enviaremos a los
                      servidores seguros de PayPal.
                    </p>
                  </div>
                ) :(paymetType === "mercadoPago" && !errorWarning) ? (
                  <div className="complementary-info-payment-container">
                    <p>
                      Para completar la transacción, te enviaremos a los
                      servidores seguros de Mercado Pago.
                    </p>
                  </div>
                ):<></>}
                {errorWarning==="validationErrors" ? <div className="complementary-info-payment-container error">
                    <p>
                    POR FAVOR, VERIFIQUE HABER LLENADO CORRECTAMENTE LOS CAMPOS
                    </p>
                  </div>: errorWarning==="missing-payment-type" ? <div className="complementary-info-payment-container error">
                    <p>
                      DEBER SELECCIONAR UN MÉTODO DE PAGO.
                    </p>
                  </div>:
                  errorWarning==="empty-cart" ? <div className="complementary-info-payment-container error">
                  <p>
                 NO HAY PRODUCTOS AÑADIDOS AL CARRITO DE COMPRA.
                  </p>
                </div>:
                  <></>

                }

                <button type="submit">{isLoading && !errorWarning ? <BeatLoader color={"white"} speedMultiplier={0.4}	/>: "Ir a pagar"}</button>
              </div>
            </div>
          )}
          <div className="checkout-botton-right-container">
            <div className="checkout-title-container">
              <h3>Resumen de pedido</h3>
            </div>
            <div className="checkout-botton-right-center-container">
              {shopingCartItems.map((item) => {
                return (
                  <div key={item.id} className="checkout-card-container">
                    <div className="card-image-container">
                      <img src={item.image} alt={item.product} />
                    </div>

                    <div className="checkout-card-info-container">
                      <div className="card-title">
                        <h4>{item.product}</h4>
                      </div>
                      <table>
                        <tr>
                          <th className="">Cantidad</th>
                          <th className="">Modelo</th>
                          <th className="">Material</th>
                          <th className="">Colgado</th>
                          <th className="">Intension</th>
                        </tr>
                        <tr>
                          <td className="">{item.quantity}</td>
                          <td className="">{item.model}</td>
                          <td className="">{item.material}</td>
                          <td className="">{item.chain}</td>
                          <td className="">{item.intention}</td>
                        </tr>
                      </table>
                      <div className="precio-unitario-container">
                        <p>Precio unitario</p>
                        <strong>{`$ ${item.price}`}</strong>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="checkout-price-container">
              <div className="checkout-prince">
                <p>Total estimado</p>
                <p>${productsPrice().toFixed(2)}</p>
              </div>
              <div className="checkout-prince">
                <p>Envío express</p>
                <p>${deliveryPrice.toFixed(2)}</p>
              </div>
              <div className="checkout-prince">
                <p>Impuestos</p>
                <p>${(productsPrice() * 0.21).toFixed(2)}</p>
              </div>
              <hr />
              <div className="checkout-prince">
                <p>
                  <strong>Total</strong>
                </p>
                <p>
                  <strong>
                    ${(productsPrice() * 1.21 + deliveryPrice).toFixed(2)}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
