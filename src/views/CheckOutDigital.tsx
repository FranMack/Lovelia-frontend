import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { MercadoPagoIcon, PayPalIcon } from "../assets/images/icons/icons";
import videoHome from "../assets/videos/videoHome.mp4";
import { envs } from "../config/envs";
import { ShopingCartContext } from "../context/modalShopingCart";
import { UserContext } from "../context/userContext";
import { CheckOutDigitalValidation } from "../helpers/checkOutDigitalValidations";
import { useForm } from "../hooks/useForm";

const sections = ["1. Datos usuario", "2. Pago"];

//el precio del envío me lo devería dar la api de correos
const deliveryPrice = 1;

const days = [
  1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const month = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function years() {
  const actualYear = new Date().getFullYear();
  const years = [1912];
  for (let i = 0; i <= actualYear - 1912; i++) {
    years.push(years[years.length - 1] + 1);
  }
  return years;
}

function minutes() {
  const minutes = [0];
  for (let i = 0; i < 60; i++) {
    minutes.push(minutes[minutes.length - 1] + 1);
  }
  return minutes;
}

function hours() {
  const hours = [1];
  for (let i = 1; i < 12; i++) {
    hours.push(hours[hours.length - 1] + 1);
  }
  return hours;
}

export function CheckOutDigital() {
  window.scrollTo(0, 0);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.1;
    }
  }, [videoRef]);

  const [buttonFocusPosition, setButttonFocusPosition] =
    useState("1. Datos usuario");

  const handleButtonFocus = (buttonName: string) => {
    setButttonFocusPosition(buttonName);
  };

  const { menuOpen } = useContext(ShopingCartContext);
  const { email } = useContext(UserContext);

  const [paymetType, setPaymentType] = useState<string>("");

  const handlePaymentType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentType(event.target.value);
  };

  const [dayOption, setDayOption] = useState("");
  const [monthOption, setMonthOption] = useState("");
  const [yearOption, setYearOption] = useState("");
  const [hourOption, setHourOption] = useState("");
  const [minuesOption, setMinutesOption] = useState("");
  const [meridiamOption, setMeridiamOption] = useState("");

  const handleDayOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setDayOption(event.target.value);
  };
  const handleMonthOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setMonthOption(event.target.value);
  };
  const handleYearOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setYearOption(event.target.value);
  };

  const handleHourOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setHourOption(event.target.value);
  };
  const handleMinutesOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setMinutesOption(event.target.value);
  };
  const handleMeridiam = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setMeridiamOption(event.target.value);
  };

  //form
  const initialForm = { country: "", state: "", city: "" };

  const { formState, onInputChange } = useForm(initialForm);

  const { country, state, city } = formState;

  //validation errors
  const [cityErrors, setCityErrors] = useState<string[]>([]);
  const [stateErrors, setStateErrors] = useState<string[]>([]);
  const [countryErrors, setCountryErrors] = useState<string[]>([]);

  const [errorWarning, setErrorWarning] = useState<string>("");
  const [errorAPI, setErrorAPI] = useState("");

  //is loading

  const [isLoading, setIsLoading] = useState(false);

  const handleBlur = (field: string) => {
    const [errors] = CheckOutDigitalValidation.create(formState);
    console.log(errors);
    const fieldError = errors?.find((error) =>
      Object.keys(error).includes(field)
    );
    switch (field) {
      case "city":
        setCityErrors(fieldError ? [fieldError[field]] : []);
        break;
      case "state":
        setStateErrors(fieldError ? [fieldError[field]] : []);
        break;
      case "country":
        setCountryErrors(fieldError ? [fieldError[field]] : []);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      setErrorAPI("Debes estar logueado para adquirir el talismán");
      return;
    }

    const [errors] = CheckOutDigitalValidation.create(formState);

    if (errors) {
      errors.map((error) => {
        if (Object.keys(error).includes("city")) {
          return setCityErrors((prevErrors) => [...prevErrors, error["city"]]);
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
      });

      //limpia los estados cuando no hay errores
      !errors.find((error) => {
        return Object.keys(error).includes("country");
      }) && setCountryErrors([]);
      !errors.find((error) => {
        return Object.keys(error).includes("state");
      }) && setStateErrors([]);
      !errors.find((error) => {
        return Object.keys(error).includes("city");
      }) && setCityErrors([]);

      setErrorWarning("validationErrors");
      return;
    }

    if (
      !dayOption ||
      !hourOption ||
      !minuesOption ||
      !yearOption ||
      !meridiamOption ||
      !monthOption
    ) {
      setErrorWarning("validationErrors");
      return;
    }
    if (!paymetType) {
      setErrorWarning("missing-payment-type");
      return;
    }

    setErrorWarning("");

    setIsLoading(true);
    const userInfo = {
      country,
      state,
      city,
      day: Number(dayOption),
      month: Number(monthOption),
      year: Number(yearOption),
      hour: Number(hourOption),
      min: Number(minuesOption),
      meridiam: meridiamOption,
    };

    if (paymetType === "mercadoPago") {
      const shopingCartMP = {
        title: "Digital Talisman",
        quantity: 1,
        unit_price: 2,
        currency_id: "USD",
      };

      axios
        .post(
          `${envs.API_DOMAIN}/api/v1/payment-mercadopago/create-order`,
          {
            email: email,
            type: "digital-product",
            items: [shopingCartMP],
            userInfo: userInfo,
          },
          { withCredentials: true }
        )
        .then((response) => {
          window.location.href = response.data.link_de_pago;
          setIsLoading(false);
        })
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setErrorAPI(error.response.data.error);
        });
    }

    if (paymetType === "paypal") {
      const shopingCartPaypal = {
        title: "Digital talismán",
        quantity: 1,
        unit_amount: {
          currency_code: "USD",
          value: 2,
        },
      };

      axios
        .post(
          `${envs.API_DOMAIN}/api/v1/payment-paypal/create-order`,
          {
            email: email,
            type: "digital-product",
            items: [shopingCartPaypal],
            userInfo: userInfo,
          },
          { withCredentials: true }
        )
        .then((response) => {
          window.location.href = response.data.link_de_pago;
          setIsLoading(false);
        })
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setErrorAPI(error.response.data.error);
        });
    }
  };

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
          {buttonFocusPosition === "1. Datos usuario" ? (
            <div className="checkout-botton-left-container">
              <div className="checkout-title-container">
                <h3>Identificación</h3>
                <h6>
                  Los siguientes datos son necesarios para la creación de tu
                  talismán.
                </h6>
              </div>

              <div className="checkout-form">
                <h2>Lugar de nacimiento</h2>
                <label htmlFor="country">País</label>
                <input
                  value={country}
                  onChange={onInputChange}
                  onBlur={() => {
                    handleBlur("country");
                  }}
                  name="country"
                  type="text"
                  placeholder="Ej. Argentina"
                  className={countryErrors.length > 0 ? "input-error" : ""}
                />
                {countryErrors.length > 0 && (
                  <span className="checkOut-helpers-error">
                    {countryErrors[0]}
                  </span>
                )}

                <label htmlFor="birthPlace">Provincia / Estado</label>
                <input
                  value={state}
                  onChange={onInputChange}
                  onBlur={() => {
                    handleBlur("state");
                  }}
                  name="state"
                  type="text"
                  placeholder="Ej. Santa Fe"
                  className={stateErrors.length > 0 ? "input-error" : ""}
                />
                {stateErrors.length > 0 && (
                  <span className="checkOut-helpers-error">
                    {stateErrors[0]}
                  </span>
                )}
                <label htmlFor="birthPlace">Ciudad</label>
                <input
                  value={city}
                  onChange={onInputChange}
                  onBlur={() => {
                    handleBlur("city");
                  }}
                  name="city"
                  type="text"
                  placeholder="Ej. Rosario"
                  className={cityErrors.length > 0 ? "input-error" : ""}
                />
                {cityErrors.length > 0 && (
                  <span className="checkOut-helpers-error">
                    {cityErrors[0]}
                  </span>
                )}
                <h2>Fecha de nacimiento</h2>

                <div className="checkout-form-names-container">
                  <div className="checkout-date-options-container">
                    <select
                      value={dayOption}
                      onChange={handleDayOption}
                      className={
                        errorWarning && !dayOption ? "select-error" : ""
                      }
                    >
                      <option value="">Dia</option>
                      {days.map((day) => {
                        return <option value={day}>{day}</option>;
                      })}
                    </select>

                    <select
                      value={monthOption}
                      onChange={handleMonthOption}
                      className={
                        errorWarning && !monthOption ? "select-error" : ""
                      }
                    >
                      <option value="">Mes</option>
                      {month.map((day) => {
                        return <option value={day}>{day}</option>;
                      })}
                    </select>

                    <select
                      value={yearOption}
                      onChange={handleYearOption}
                      className={
                        errorWarning && !yearOption ? "select-error" : ""
                      }
                    >
                      <option value="">Año</option>
                      {years().map((year) => {
                        return <option value={year}>{year}</option>;
                      })}
                    </select>
                  </div>
                </div>

                <h2>Hora de nacimiento</h2>

                <div className="checkout-form-names-container">
                  <div className="checkout-date-options-container">
                    <select
                      value={hourOption}
                      onChange={handleHourOption}
                      className={
                        errorWarning && !hourOption ? "select-error" : ""
                      }
                    >
                      <option value="">Hora</option>
                      {hours().map((hour) => {
                        return <option value={hour}>{hour}</option>;
                      })}
                    </select>

                    <select
                      value={minuesOption}
                      onChange={handleMinutesOption}
                      className={
                        errorWarning && !minuesOption ? "select-error" : ""
                      }
                    >
                      <option value="">Minutos</option>
                      {minutes().map((minute) => {
                        return <option value={minute}>{minute}</option>;
                      })}
                    </select>

                    <select
                      value={meridiamOption}
                      onChange={handleMeridiam}
                      className={
                        errorWarning && !meridiamOption ? "select-error" : ""
                      }
                    >
                      <option value="">AM/PM</option>
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>

                <button onClick={() => setButttonFocusPosition("2. Pago")}>
                  Continuar
                </button>
              </div>
            </div>
          ) : buttonFocusPosition === "2. Pago" ? (
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
                        <MercadoPagoIcon />
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
                        <PayPalIcon />
                      </label>
                    </div>
                  </div>
                </div>
                {paymetType === "paypal" && !errorWarning && !errorAPI ? (
                  <div className="complementary-info-payment-container">
                    <p>
                      Para completar la transacción, te enviaremos a los
                      servidores seguros de PayPal.
                    </p>
                  </div>
                ) : paymetType === "mercadoPago" &&
                  !errorWarning &&
                  !errorAPI ? (
                  <div className="complementary-info-payment-container">
                    <p>
                      Para completar la transacción, te enviaremos a los
                      servidores seguros de Mercado Pago.
                    </p>
                  </div>
                ) : (
                  <></>
                )}
                {errorWarning === "validationErrors" ? (
                  <div className="complementary-info-payment-container error">
                    <p>
                      POR FAVOR, VERIFIQUE HABER LLENADO CORRECTAMENTE LOS
                      CAMPOS
                    </p>
                  </div>
                ) : errorWarning === "missing-payment-type" ? (
                  <div className="complementary-info-payment-container error">
                    <p>DEBER SELECCIONAR UN MÉTODO DE PAGO.</p>
                  </div>
                ) : errorWarning === "empty-cart" ? (
                  <div className="complementary-info-payment-container error">
                    <p>NO HAY PRODUCTOS AÑADIDOS AL CARRITO DE COMPRA.</p>
                  </div>
                ) : errorAPI ? (
                  <div className="complementary-info-payment-container error">
                    <p>{errorAPI.toUpperCase()}</p>
                  </div>
                ) : (
                  <></>
                )}

                <button type="submit">
                  {isLoading && !errorAPI && !errorWarning ? (
                    <BeatLoader color={"white"} speedMultiplier={0.4} />
                  ) : (
                    "Ir a pagar"
                  )}
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="checkout-botton-right-container">
            <div className="checkout-title-container">
              <h3>Resumen de pedido</h3>
            </div>

            <div className="checkout-price-container">
              <div className="checkout-prince">
                <p>Total estimado</p>
                <p>${0}</p>
              </div>
              <div className="checkout-prince">
                <p>Envío express</p>
                <p>${deliveryPrice.toFixed(2)}</p>
              </div>
              <div className="checkout-prince">
                <p>Impuestos</p>
                <p>${0}</p>
              </div>
              <hr />
              <div className="checkout-prince">
                <p>
                  <strong>Total</strong>
                </p>
                <p>
                  <strong>${0}</strong>
                </p>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
