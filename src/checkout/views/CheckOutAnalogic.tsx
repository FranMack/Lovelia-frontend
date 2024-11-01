import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import { MercadoPagoIcon, PayPalIcon } from "../../assets//icons/icons";
import { envs } from "../../config/envs";
import { ShopingCartContext } from "../../context/modalShopingCartContext";
import { useForm } from "../../hooks/useForm";
import { BackgroundVideo } from "../../ui/components";
import { ProductosOptions } from "../../ui/components/ShopingCart";
import logoDhl from "../assets/logo-dhl.png";
import { CheckOutNavbar } from "../components/CheckOutNavbar";
import { BillingValidation } from "../helpers/billingValidations";
import { CheckOutValidation } from "../helpers/checkOutValidations";

const sections = ["1. Identificación", "2. Envío", "3. Pago"];

//el precio del envío me lo devería dar la api de correos
const deliveryPrice = 200;

const taxRegimeOptions = [
  "General de Ley Personas Morales",
  "Personas morales con fines no lucrativos",
  "Sueldos y salarios e ingresos asimilados a salarios",
  "Arrendamiento",
  "Régimen de enajenación o adquisición de bienes",
  "Demás ingresos",
  "Residentes en el extrangero sin establecimiento permanente en Mexico",
  "Ingresos por dividendos (socios y accionistas)",
  "Personas fisicas con actividades empresariales yprofesionales",
  "Ingresos por intereses",
  "Régimen de los ingresos por obtención de premios",
  "Sin obligaciones fiscales",
  "Sociedades cooperaivas de producción que optan por diferir sus ingresos",
  "Incorporación Fiscal",
  "Actividades agricolas, ganaderas, silvícolas y pesqueras",
  "Opcional para grupos de sociedades",
  "Coordinados",
  "Régimen simplificado de confianza",
  "Régimen de las actividades empresariales con ingresos a travéz de plataformas tecnológicas",
];

function CheckOutAnalogic() {
  //is loading

  const [isLoading, setIsLoading] = useState(false);

  const [buttonFocusPosition, setButttonFocusPosition] =
    useState("1. Identificación");

  const handleButtonFocus = (buttonName: string) => {
    setButttonFocusPosition(buttonName);
  };

  const { shopingCartOpen, shopingCartItems, setShopingCartItems } =
    useContext(ShopingCartContext);

  const [billing, setBilling] = useState<boolean>(false);
  const handleBilling = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBilling(event.target.checked);
  };


  const [siteTerms, setSiteTerms] = useState<boolean>(false);
  const handleSiteTerms = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSiteTerms(event.target.checked);
  };


  useEffect(() => {
    window.scrollTo(0, 0);
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

  const { formState, onInputChange } = useForm(initialForm);
  const {
    name,
    lastname,
    email,
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

  const initialFormBilling = {
    billingName: "",
    billingLastname: "",
    billingRfc: "",
    billingLegalName: "",
    billingTaxRegime: "",
  };

  const billingForm = useForm(initialFormBilling);

  const {
    billingName,
    billingLastname,
    billingRfc,
    billingLegalName,
    billingTaxRegime,
  } = billingForm.formState;

  const [paymetType, setPaymentType] = useState<string>("");

  const handlePaymentType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentType(event.target.value);
  };

  //validation errors
  const [nameErrors, setNameErrors] = useState<string[]>([]);
  const [lastNameErrors, setLastnameErrors] = useState<string[]>([]);
  const [emailErrors, setEmailErrors] = useState<string[]>([]);
  const [phoneErrors, setPhoneErrors] = useState<string[]>([]);
  const [receiverErrors, setReceiverErrors] = useState<string[]>([]);
  const [streetErrors, setStreetErrors] = useState<string[]>([]);
  const [streetNumberErrors, setStreetNumberErrors] = useState<string[]>([]);
  const [cityErrors, setCityErrors] = useState<string[]>([]);
  const [stateErrors, setStateErrors] = useState<string[]>([]);
  const [countryErrors, setCountryErrors] = useState<string[]>([]);
  const [postalCodeErrors, setPostalCodeErrors] = useState<string[]>([]);
  const [errorWarning, setErrorWarning] = useState<string>("");

  const cleanErrorsMessage = () => {
    setNameErrors([]);
    setLastnameErrors([]);
    setEmailErrors([]);
    setPhoneErrors([]);
    setReceiverErrors([]);
    setStreetErrors([]);
    setStreetNumberErrors([]);
    setCountryErrors([]);
    setPostalCodeErrors([]);
  };

  //billing erros
  const [billingnameErrors, setBillingNameErrors] = useState<string[]>([]);
  const [billingLastNameErrors, setBillingLastnameErrors] = useState<string[]>(
    []
  );

  const [billingRfcErrors, setBillingRfcErrors] = useState<string[]>([]);
  const [billingLegalNameErrors, setBillingLegalNameErrors] = useState<
    string[]
  >([]);
  const [billingTaxRegimeErrors, setBillingTaxRegimeErrors] = useState<
    string[]
  >([]);

  const cleanBillingErrorsMessage = () => {
    setBillingNameErrors([]);
    setBillingLastnameErrors([]);
    setBillingRfcErrors([]);
    setBillingLegalNameErrors([]);
    setBillingTaxRegimeErrors([]);
  };

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

  const handleBlurBilling = (field: string) => {
    const [billingErrors] = BillingValidation.create(billingForm.formState);
    const fieldError = billingErrors?.find((error) =>
      Object.keys(error).includes(field)
    );
    switch (field) {
      case "name":
        setBillingNameErrors(fieldError ? [fieldError[field]] : []);
        break;
      case "lastname":
        setBillingLastnameErrors(fieldError ? [fieldError[field]] : []);
        break;
      case "rfc":
        setBillingRfcErrors(fieldError ? [fieldError[field]] : []);
        break;
      case "legalName":
        setBillingLegalNameErrors(fieldError ? [fieldError[field]] : []);
        break;
      case "taxRegime":
        setBillingTaxRegimeErrors(fieldError ? [fieldError[field]] : []);
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
      !errors.find((error) => {
        return Object.keys(error).includes("receiver");
      }) && setReceiverErrors([]);
      !errors.find((error) => {
        return Object.keys(error).includes("street");
      }) && setStreetErrors([]);
      !errors.find((error) => {
        return Object.keys(error).includes("streetNumber");
      }) && setStreetNumberErrors([]);
      !errors.find((error) => {
        return Object.keys(error).includes("city");
      }) && setCityErrors([]);
      !errors.find((error) => {
        return Object.keys(error).includes("state");
      }) && setStateErrors([]);
      !errors.find((error) => {
        return Object.keys(error).includes("country");
      }) && setCountryErrors([]);
      !errors.find((error) => {
        return Object.keys(error).includes("postalCode");
      }) && setPostalCodeErrors([]);
      !errors.find((error) => {
        return Object.keys(error).includes("phone");
      }) && setPhoneErrors([]);

      setErrorWarning("validationErrors");

      return;
    }

    const [billingErrors] = BillingValidation.create(billingForm.formState);
    if (billingErrors && billing) {
      billingErrors.map((error) => {
        if (Object.keys(error).includes("name")) {
          return setBillingNameErrors((prevErrors) => [
            ...prevErrors,
            error["name"],
          ]);
        }
        if (Object.keys(error).includes("lastname")) {
          return setBillingLastnameErrors((prevErrors) => [
            ...prevErrors,
            error["lastname"],
          ]);
        }

        if (Object.keys(error).includes("rfc")) {
          return setBillingRfcErrors((prevErrors) => [
            ...prevErrors,
            error["rfc"],
          ]);
        }

        if (Object.keys(error).includes("legalName")) {
          return setBillingLegalNameErrors((prevErrors) => [
            ...prevErrors,
            error["legalName"],
          ]);
        }

        if (Object.keys(error).includes("taxRegime")) {
          return setBillingTaxRegimeErrors((prevErrors) => [
            ...prevErrors,
            error["taxRegime"],
          ]);
        }
      });

      //limpia los estados cuando no hay errores
      !billingErrors.find((error) => {
        return Object.keys(error).includes("name");
      }) && setBillingNameErrors([]);
      !billingErrors.find((error) => {
        return Object.keys(error).includes("lastname");
      }) && setBillingLastnameErrors([]);
      !billingErrors.find((error) => {
        return Object.keys(error).includes("rfc");
      }) && setBillingRfcErrors([]);
      !billingErrors.find((error) => {
        return Object.keys(error).includes("legalName");
      }) && setBillingLegalNameErrors([]);
      !billingErrors.find((error) => {
        return Object.keys(error).includes("taxRegime");
      }) && setBillingTaxRegimeErrors([]);

      setErrorWarning("validationErrors");

      return;
    }
    cleanErrorsMessage();
    cleanBillingErrorsMessage();
    setErrorWarning("");

    if (!paymetType) {
      setErrorWarning("missing-payment-type");
      return;
    }

    if (shopingCartItems.length < 1) {
      setErrorWarning("empty-cart");
      return;
    }

    if(!siteTerms){
      setErrorWarning("site-terms");
      return;
    }

    setIsLoading(true);

    const formData = { name, lastname, email };

    //VERS SI ESTO VA
    localStorage.setItem("checkout-form", JSON.stringify(formData));

    const billingDetails = {
      name: billingName,
      lastname: billingLastname,
      rfc: billingRfc,
      legalName: billingLegalName,
      taxRegime: billingTaxRegime,
    };

    const deliveryDetails = {
      receiver,
      phone,
      postal_code: postalCode,
      address: `${street} ${streetNumber} ${
        apartmentNumber && `Piso o Departamento ${apartmentNumber}`
      } - ${city}, ${state}, ${country} `,
      price: deliveryPrice,
    };

    const productDetails = shopingCartItems.map((item) => {
      return {
        ...item,
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
          `${envs.API_DOMAIN}/api/v1/payment-mercadopago/create-order`,
          {
            items: [...shopingCartMP, delivery],
            email: email,
            productDetails,
            deliveryDetails,
            billingDetails: billing ? billingDetails : undefined,
          },
          { withCredentials: true }
        )
        .then((response) => {
          localStorage.removeItem("shopingCart");
          setShopingCartItems([]);
          window.location.href = response.data.link_de_pago;
          setIsLoading(false);
        })
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (paymetType === "paypal") {
      const shopingCartPaypal = shopingCartItems.map(
        (item: ProductosOptions) => {
          return {
            title: item.model,
            quantity: item.quantity,
            unit_amount: {
              currency_code: "USD",
              value: item.price,
            },
          };
        }
      );

      const delivery = {
        title: "Envío",
        quantity: 1,
        unit_amount: {
          currency_code: "USD",
          value: deliveryPrice,
        },
      };

      axios
        .post(`${envs.API_DOMAIN}/api/v1/payment-paypal/create-order`, {
          email,
          productDetails,
          deliveryDetails,
          billingDetails: billing ? billingDetails : undefined,
          items: [...shopingCartPaypal, delivery],
        })
        .then((response) => {
          localStorage.removeItem("shopingCart");
          setShopingCartItems([]);
          window.location.href = response.data.link_de_pago;
        })
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
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

        <form onSubmit={handleSubmit} className="checkout-botton-container">
          {buttonFocusPosition === "1. Identificación" ? (
            <div className="checkout-botton-left-container">
              <div className="checkout-title-container">
                <h3>Identificación</h3>
                <h6>Datos del cliente</h6>
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
                      className={nameErrors.length > 0 ? "input-error" : ""}
                    />
                    {nameErrors.length > 0 && (
                      <span className="checkOut-helpers-error">
                        {nameErrors[0]}
                      </span>
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
                      className={lastNameErrors.length > 0 ? "input-error" : ""}
                    />
                    {lastNameErrors.length > 0 && (
                      <span className="checkOut-helpers-error">
                        {lastNameErrors[0]}
                      </span>
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
                  className={emailErrors.length > 0 ? "input-error" : ""}
                />
                {emailErrors.length > 0 && (
                  <span className="checkOut-helpers-error">
                    {emailErrors[0]}
                  </span>
                )}

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
                  className={receiverErrors.length > 0 ? "input-error" : ""}
                />
                {receiverErrors.length > 0 && (
                  <span className="checkOut-helpers-error">
                    {receiverErrors[0]}
                  </span>
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
                      className={streetErrors.length > 0 ? "input-error" : ""}
                    />

                    {streetErrors.length > 0 && (
                      <span className="checkOut-helpers-error">
                        {streetErrors[0]}
                      </span>
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
                        streetNumberErrors.length > 0 ? "input-error" : ""
                      }
                    />
                    {streetNumberErrors.length > 0 && (
                      <span className="checkOut-helpers-error">
                        {streetNumberErrors[0]}
                      </span>
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
                    <label htmlFor="city">Ciudad</label>
                    <input
                      value={city}
                      onChange={onInputChange}
                      onBlur={() => handleBlur("city")}
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
                  </div>
                  <div className="checkout-form-names-internal-container">
                    <label htmlFor="state">Provincia/Estado</label>
                    <input
                      value={state}
                      onChange={onInputChange}
                      onBlur={() => handleBlur("state")}
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
                      className={countryErrors.length > 0 ? "input-error" : ""}
                    />
                    {countryErrors.length > 0 && (
                      <span className="checkOut-helpers-error">
                        {countryErrors[0]}
                      </span>
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
                        postalCodeErrors.length > 0 ? "input-error" : ""
                      }
                    />
                    {stateErrors.length > 0 && (
                      <span className="checkOut-helpers-error">
                        {postalCodeErrors[0]}
                      </span>
                    )}
                  </div>
                </div>
                <label htmlFor="phone">Telefóno</label>
                <input
                  value={phone}
                  onChange={onInputChange}
                  onBlur={() => handleBlur("phone")}
                  name="phone"
                  type="text"
                  placeholder="Ej. +54 9 342 6544569"
                  className={phoneErrors.length > 0 ? "input-error" : ""}
                />
                {phoneErrors.length > 0 && (
                  <span className="checkOut-helpers-error">
                    {phoneErrors[0]}
                  </span>
                )}
                {city &&
                  state &&
                  streetNumber &&
                  street &&
                  country &&
                  postalCode && (
                    <>
                      <h6>Método de entrega</h6>

                      <div className="complementary-info-payment-container">
                        <div>
                          <div className="logo-container">
                            <img src={logoDhl} alt="logo-dhl" />
                          </div>
                          <p>Miercoles 14 de agosto</p>
                        </div>
                        <strong>{`$${deliveryPrice}`}</strong>
                      </div>
                    </>
                  )}

                <button onClick={() => setButttonFocusPosition("3. Pago")}>
                  Continuar
                </button>
              </div>
            </div>
          ) : (
            <div className="checkout-botton-left-container">
              <div className="checkout-title-container">
                <h3>Detalle de pago</h3>
                <h6>Selecciona tu método de pago.</h6>
              </div>

              <div className="checkout-form">
                <div className="checkout-facturacion-container">
                  {country!.toLowerCase() === "mexico" && (
                    <div className="facturacion-checkbox">
                      <label htmlFor="">
                        Si requieres factura fiscal, marque la casilla
                        y complete los campos
                      </label>
                      <input
                        type="checkbox"
                        checked={billing}
                        onChange={handleBilling}
                      />
                    </div>
                  )}
                </div>

                {billing && (
                  <>
                    <div className="checkout-form-names-container">
                      <div className="checkout-form-names-internal-container">
                        <label htmlFor="billingName">Nombre</label>
                        <input
                          value={billingName}
                          onChange={billingForm.onInputChange}
                          onBlur={() => handleBlurBilling("name")}
                          name="billingName"
                          type="text"
                          placeholder="Ej. John"
                          className={
                            billingnameErrors.length > 0 ? "input-error" : ""
                          }
                        />
                        {billingnameErrors.length > 0 && (
                          <span className="checkOut-helpers-error">
                            {billingnameErrors[0]}
                          </span>
                        )}
                      </div>

                      <div className="checkout-form-names-internal-container">
                        <label htmlFor="billingLastname">Apellido</label>
                        <input
                          value={billingLastname}
                          onChange={billingForm.onInputChange}
                          onBlur={() => handleBlurBilling("lastname")}
                          name="billingLastname"
                          type="text"
                          placeholder="Ej. Doe"
                          className={
                            billingLastNameErrors.length > 0
                              ? "input-error"
                              : ""
                          }
                        />
                        {billingLastNameErrors.length > 0 && (
                          <span className="checkOut-helpers-error">
                            {billingLastNameErrors[0]}
                          </span>
                        )}
                      </div>
                    </div>

                    <label htmlFor="billingRfc">RFC</label>
                    <input
                      value={billingRfc}
                      onChange={billingForm.onInputChange}
                      onBlur={() => handleBlurBilling("rfc")}
                      name="billingRfc"
                      type="text"
                      placeholder="RFC"
                      className={
                        billingRfcErrors.length > 0 ? "input-error" : ""
                      }
                    />
                    {billingRfcErrors.length > 0 && (
                      <span className="checkOut-helpers-error">
                        {billingRfcErrors[0]}
                      </span>
                    )}
                    <label htmlFor="billingLegalName">Razón social</label>
                    <input
                      value={billingLegalName}
                      onChange={billingForm.onInputChange}
                      onBlur={() => handleBlurBilling("legalName")}
                      name="billingLegalName"
                      type="text"
                      placeholder="Razón social"
                      className={
                        billingLegalNameErrors.length > 0 ? "input-error" : ""
                      }
                    />
                    {billingLegalNameErrors.length > 0 && (
                      <span className="checkOut-helpers-error">
                        {billingLegalNameErrors[0]}
                      </span>
                    )}

                    <label htmlFor="billingTaxRegime">Régimen Fiscal</label>

                    <select
                      name="billingTaxRegime"
                      onBlur={() => handleBlurBilling("taxRegime")}
                      onChange={billingForm.onInputChange}
                      value={billingTaxRegime}
                      className={
                        billingTaxRegimeErrors.length > 0
                          ? "billing-taxRegime input-error"
                          : "billing-taxRegime"
                      }
                      style={{ color: !billingTaxRegime ? "gray" : "" }}
                    >
                      <option value="">Régimen Fiscal</option>
                      {taxRegimeOptions.map((item) => {
                        return <option value={item}>{item}</option>;
                      })}
                    </select>
                    {billingTaxRegimeErrors.length > 0 && (
                      <span className="checkOut-helpers-error">
                        {billingTaxRegimeErrors[0]}
                      </span>
                    )}
                  </>
                )}

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
                <div className="checkout-siteTerms-container">
              
              <div className="siteTerms-checkbox">
                <label htmlFor="">
                  Acepto los <Link to="/terminos-y-condiciones">Términos y condiciones</Link> y <Link to="/politica-de-privacidad">Políticas de privacidad</Link> 
                </label>
                <input
                  type="checkbox"
                  checked={siteTerms}
                  onChange={handleSiteTerms}
                />
              </div>
              
            </div>
                {paymetType === "paypal" && !errorWarning ? (
                  <div className="complementary-info-payment-container">
                    <p>
                      Para completar la transacción, te enviaremos a los
                      servidores seguros de PayPal.
                    </p>
                  </div>
                ) : paymetType === "mercadoPago" && !errorWarning ? (
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
                ) :errorWarning === "site-terms" ? (
                  <div className="complementary-info-payment-container error">
                    <p>PARA REALIZAR LA COMPRA DEBE ACEPTAR TÉRMINOS Y CONDICIONES</p>
                  </div>
                ): (
                  <></>
                )}

          

                <button type="submit">
                  {isLoading && !errorWarning ? (
                    <BeatLoader color={"white"} speedMultiplier={0.4} />
                  ) : (
                    "Ir a pagar"
                  )}
                </button>
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
                        <h4>{`Talismán ${item.model}`}</h4>
                      </div>
                      <div className="card-td">
                        <strong>Metal:</strong>
                        <p>{item.material}</p>
                      </div>
                      <div className="card-td">
                        <strong>Piedra:</strong>
                        <p>{item.rock}</p>
                      </div>
                      <div className="card-td">
                        <strong>Calgante:</strong>
                        <p>{item.chain}</p>
                      </div>
                      <div className="card-td">
                        <strong>Intención:</strong>
                        <p>{item.intention}</p>
                      </div>

                      <div className="card-td">
                        <strong>Precio:</strong>
                        <span>{`$ ${item.price}`}</span>
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

export default CheckOutAnalogic;
