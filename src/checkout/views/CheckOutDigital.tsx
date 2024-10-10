import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { envs } from "../../config/envs";
import { ShopingCartContext } from "../../context/modalShopingCartContext";
import { BackgroundVideo } from "../../ui/components";
import { MercadoPagoCheckoutForm } from "../../ui/components/MercadoPagoCheckoutForm";
import { CheckOutNavbar } from "../components/CheckOutNavbar";

const sections = ["1. Datos usuario", "2. Pago"];

const days = [
  1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const month = [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function years() {
  const actualYear = new Date().getFullYear();
  const years = [1924];
  for (let i = 0; i <= actualYear - 1925; i++) {
    years.push(years[years.length - 1] + 1);
  }
  return years.reverse();
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

 function CheckOutDigital() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [buttonFocusPosition, setButttonFocusPosition] =
    useState("1. Datos usuario");

  const [validationErrors, setValidationErrors] = useState({
    locationValidation: false,
    dayOptionValidation: false,
    hourOptionValidation: false,
    minuesOptionValidation: false,
    yearOptionValidation: false,
    meridiamOptionValidation: false,
    monthOptionValidation: false,
  });

  const handleButtonFocus = (buttonName: string) => {
    if (buttonFocusPosition === "1. Datos usuario") {
      if (
        !location ||
        !dayOption ||
        !hourOption ||
        !minuesOption ||
        !yearOption ||
        !meridiamOption ||
        !monthOption
      ) {
        setValidationErrors({
          locationValidation: !location,
          dayOptionValidation: !dayOption,
          hourOptionValidation: !hourOption,
          minuesOptionValidation: !minuesOption,
          yearOptionValidation: !yearOption,
          meridiamOptionValidation: !meridiamOption,
          monthOptionValidation: !monthOption,
        });
        return;
      } else {
        setButttonFocusPosition(buttonName);

        setValidationErrors({
          locationValidation: false,
          dayOptionValidation: false,
          hourOptionValidation: false,
          minuesOptionValidation: false,
          yearOptionValidation: false,
          meridiamOptionValidation: false,
          monthOptionValidation: false,
        });
      }
    } else {
      setButttonFocusPosition(buttonName);
    }
  };

  const { shopingCartOpen } = useContext(ShopingCartContext);

  const [dayOption, setDayOption] = useState("");
  const [monthOption, setMonthOption] = useState("");
  const [yearOption, setYearOption] = useState("");
  const [hourOption, setHourOption] = useState("");
  const [minuesOption, setMinutesOption] = useState("");
  const [meridiamOption, setMeridiamOption] = useState("");

  const handleDayOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setDayOption(event.target.value);
    setValidationErrors({ ...validationErrors, dayOptionValidation: false });
  };
  const handleMonthOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setMonthOption(event.target.value);
    setValidationErrors({ ...validationErrors, monthOptionValidation: false });
  };
  const handleYearOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setYearOption(event.target.value);
    setValidationErrors({ ...validationErrors, yearOptionValidation: false });
  };

  const handleHourOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setHourOption(event.target.value);
    setValidationErrors({ ...validationErrors, hourOptionValidation: false });
  };
  const handleMinutesOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setMinutesOption(event.target.value);
    setValidationErrors({ ...validationErrors, minuesOptionValidation: false });
  };
  const handleMeridiam = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setMeridiamOption(event.target.value);
    setValidationErrors({
      ...validationErrors,
      meridiamOptionValidation: false,
    });
  };

  const [location, setLocation] = useState<string>("");
  const [result, setResult] = useState<string[]>([]);

  const locationPrediction = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
    axios
      .get(`${envs.API_DOMAIN}/api/v1/autocomplete?input=${event.target.value}`)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const selectLocation = (itemLocation: string) => {
    setLocation(itemLocation);
    setResult([]);
    setValidationErrors({ ...validationErrors, locationValidation: false });
  };

  return (
    <main className={shopingCartOpen ? "viewport-background" : ""}>
      <section className="checkout-container efectoReveal">
        <BackgroundVideo />

        <CheckOutNavbar
          sections={sections}
          buttonFocusPosition={buttonFocusPosition}
          handleButtonFocus={handleButtonFocus}
        />

        <div className="checkout-botton-container">
          <div
            className="checkout-botton-left-container"
            style={{
              display: buttonFocusPosition === "1. Datos usuario" ? "" : "none",
            }}
          >
            <div className="checkout-title-container">
              <h3>Datos de nacimiento</h3>
              <h6>
                Los siguientes datos son necesarios para la creación de tu
                talismán.
              </h6>
            </div>

            <div className="checkout-form">
              <h2>Lugar de nacimiento</h2>
              <input
                className={
                  validationErrors.locationValidation ? "input-error" : ""
                }
                type="text"
                value={location}
                onChange={locationPrediction}
                placeholder="Ciudad, Provincia, País"
              />

              {result.length > 0 && (
                <div className="predictions-container">
                  {result.map((item, i) => {
                    return (
                      <p key={i} onClick={() => selectLocation(item)}>
                        {item}
                      </p>
                    );
                  })}
                </div>
              )}

              <h2>Fecha de nacimiento</h2>

              <div className="checkout-form-names-container">
                <div className="checkout-date-options-container">
                  <select
                    value={dayOption}
                    onChange={handleDayOption}
                    className={
                      validationErrors.dayOptionValidation ? "select-error" : ""
                    }
                  >
                    <option value="">Dia</option>
                    {days.map((day) => {
                      return (
                        <option key={day} value={day}>
                          {day < 10 ? `0${day}` : day}
                        </option>
                      );
                    })}
                  </select>

                  <select
                    value={monthOption}
                    onChange={handleMonthOption}
                    className={
                      validationErrors.monthOptionValidation
                        ? "select-error"
                        : ""
                    }
                  >
                    <option value="">Mes</option>
                    {month.map((month) => {
                      return (
                        <option key={month} value={month}>
                          {month < 10 ? `0${month}` : month}
                        </option>
                      );
                    })}
                  </select>

                  <select
                    value={yearOption}
                    onChange={handleYearOption}
                    className={
                      validationErrors.yearOptionValidation
                        ? "select-error"
                        : ""
                    }
                  >
                    <option value="">Año</option>
                    {years().map((year) => {
                      return <option key={year} value={year}>{year}</option>;
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
                      validationErrors.hourOptionValidation
                        ? "select-error"
                        : ""
                    }
                  >
                    <option value="">Hora</option>
                    {hours().map((hour) => {
                      return (
                        <option key={hour} value={hour}>
                          {hour < 10 ? `0${hour}` : hour}
                        </option>
                      );
                    })}
                  </select>

                  <select
                    value={minuesOption}
                    onChange={handleMinutesOption}
                    className={
                      validationErrors.minuesOptionValidation
                        ? "select-error"
                        : ""
                    }
                  >
                    <option value="">Minutos</option>
                    {minutes().map((minute) => {
                      return (
                        <option key={minute} value={minute}>
                          {minute < 10 ? `0${minute}` : minute}
                        </option>
                      );
                    })}
                  </select>

                  <select
                    value={meridiamOption}
                    onChange={handleMeridiam}
                    className={
                      validationErrors.meridiamOptionValidation
                        ? "select-error"
                        : ""
                    }
                  >
                    <option value="">AM/PM</option>
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>

              {Object.values(validationErrors).includes(true) && (
                <div className="warning-container">
                  Por favor completa todos los campos !
                </div>
              )}

              <button onClick={() => handleButtonFocus("2. Pago")}>
                Continuar
              </button>
            </div>
          </div>

          <div
            className="checkout-botton-left-container"
            style={{ display: buttonFocusPosition === "2. Pago" ? "" : "none" }}
          >
            <div className="checkout-title-container">
              <h3>Pago</h3>
              <h6>Tu primer mes de subscripción es gratis.</h6>
            </div>
            <MercadoPagoCheckoutForm
              userInfo={{
                location,
                day: Number(dayOption),
                month: Number(monthOption),
                year: Number(yearOption),
                hour: Number(hourOption),
                min: Number(minuesOption),
                meridiam: meridiamOption,
              }}
            />
          </div>

          <div className="checkout-botton-right-container">
            <div className="checkout-title-container">
              <h3>Resumen de pedido</h3>
            </div>

            <div className="checkout-price-container">
              <div className="checkout-prince">
                <p>Total estimado</p>
                <p>${15}</p>
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
                  <strong>${15}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CheckOutDigital