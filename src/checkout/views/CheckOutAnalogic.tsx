import axios from 'axios';
import {useFormik} from 'formik';
import {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import * as Yup from 'yup';
import {MercadoPagoIcon, PayPalIcon} from '../../assets//icons/icons';
import {envs} from '../../config/envs';
import {UserContext} from '../../context';
import {
  ShopingCartContext,
  ShopingCartItemOptions,
} from '../../context/modalShopingCartContext';
import {BackgroundVideo} from '../../ui/components';

import logoDhl from '../assets/logo-dhl.png';
import {CheckOutCard} from '../components/CheckOutCard';
import {CheckOutNavbar} from '../components/CheckOutNavbar';
import {taxRegimeOptions} from '../helpers/taxRegimeOptions';

//el precio del envío me lo devería dar la api de correos
const deliveryPrice = 1;

function CheckOutAnalogic() {
  //is loading

  const [isLoading, setIsLoading] = useState(false);

  const [buttonFocusPosition, setButttonFocusPosition] =
    useState('1. Identificación');

  const handleButtonFocus = (buttonName: string) => {
    setButttonFocusPosition(buttonName);
  };

  const {shopingCartOpen, shopingCartItems, setShopingCartItems} =
    useContext(ShopingCartContext);

  const userContextInfo = useContext(UserContext);

  const [billing, setBilling] = useState<boolean>(false);
  const handleBilling = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBilling(event.target.checked);
  };

  const [delivery, setDelivery] = useState<boolean>(true);

  const [siteTerms, setSiteTerms] = useState<boolean>(false);
  const handleSiteTerms = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSiteTerms(event.target.checked);
  };

  const [sections, setSections] = useState([
    '1. Identificación',
    '2. Envío',
    '3. Pago',
  ]);
  const [numberOfDigitalTalisman, setNumberOfDigitalTalisman] =
    useState<number>(0);

  const [talismanDigitalAcounts, setTalismanDigitalAcounts] = useState(['']);
  const [talismanDigitalAcountsErrors, setTalismanDigitalAcountsErrors] =
    useState<string[]>([]);

  const talismanDigitalAcountsHandleBlur = (index: number) => {
    const updatedErrors = [...talismanDigitalAcountsErrors];
    if (!talismanDigitalAcounts[index]) {
      updatedErrors[index] = 'Campo requerido';
      setTalismanDigitalAcountsErrors(updatedErrors);
      return;
    }
    if (
      talismanDigitalAcounts[index] &&
      !talismanDigitalAcounts[index].includes('@')
    ) {
      updatedErrors[index] = 'Email no valido';
      setTalismanDigitalAcountsErrors(updatedErrors);
      return;
    } else {
      updatedErrors.splice(index), 1;
      setTalismanDigitalAcountsErrors(updatedErrors);
      return;
    }
  };

  // Manejar el cambio en cada input
  const handleTalismanDigitalInput = (index: number, value: string) => {
    setTalismanDigitalAcounts(prev => {
      const updatedEmails = [...prev];
      updatedEmails[index] = value; // Modifica el índice correspondiente
      return updatedEmails;
    });

    setTalismanAcounts(prev => {
      const updatedTalismans = [...prev];
      updatedTalismans[index] = ''; // Asigna una cadena vacía en el índice correspondiente
      return updatedTalismans;
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const hasTalismanDigital = shopingCartItems.some(item => {
      return item.model === 'Digital';
    });
    const hasTalismanAnalog = shopingCartItems.some(item => {
      return item.model !== 'Digital';
    });
    if (hasTalismanDigital && hasTalismanAnalog) {
      setSections([
        '1. Identificación',
        '2. Envío',
        '3. Talismán Digital',
        '4. Pago',
      ]);
      const numberOfTalismans = shopingCartItems.filter(item => {
        return item.model === 'Digital';
      }).length;

      setNumberOfDigitalTalisman(numberOfTalismans);

      setTalismanDigitalAcounts(Array(numberOfTalismans).fill(''));

      return;
    }
    if (hasTalismanDigital && !hasTalismanAnalog) {
      setSections(['1. Identificación', '2. Talismán Digital', '3. Pago']);
      const numberOfTalismans = shopingCartItems.filter(item => {
        return item.model === 'Digital';
      }).length;

      setNumberOfDigitalTalisman(numberOfTalismans);

      setTalismanDigitalAcounts(Array(numberOfTalismans).fill(''));
      setDelivery(false);
      return;
    }
  }, [shopingCartItems]);

  const productsPrice = () => {
    return shopingCartItems.reduce((acc, item) => acc + item.price, 0);
  };

  //FORM

  const [paymetType, setPaymentType] = useState<string>('');

  const handlePaymentType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentType(event.target.value);
  };

  //validation errors

  const [errorWarning, setErrorWarning] = useState<string>('');

  //chequear si la el correo del talismán existe

  const [talismanAcounts, setTalismanAcounts] = useState<Array<string | null>>(
    [],
  );

  const checkTalismanAcount = async () => {
    try {
      const response = await axios.post(
        `${envs.API_DOMAIN}/api/v1/user/check-talisman-acounts`,
        {
          talismanAcounts: talismanDigitalAcounts,
        },
      );

      const talismanAcounts = await response.data;

      setTalismanAcounts(talismanAcounts);

      if (talismanAcounts.every((email: string | null) => !email)) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  };

  const singUpForm = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      phone: '',
      receiver: '',
      street: '',
      streetNumber: '',
      apartmentNumber: '',
      state: '',
      city: '',
      country: '',
      postalCode: '',
      billingName: '',
      billingLastname: '',
      billingRfc: '',
      billingLegalName: '',
      billingTaxRegime: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Campo requerido')
        .matches(/^[a-zA-Z\s]+$/, 'Solo se permiten letras'),
      lastname: Yup.string()
        .required('Campo requerido')
        .matches(/^[a-zA-Z\s]+$/, 'Solo se permiten letras'),
      email: Yup.string().required('Campo requerido').email('Email no valido'),
      //delivery validations
      phone: delivery
        ? Yup.string()
            .required('Campo requerido')
            .matches(
              /^\+?[0-9\s\-()]+$/,
              'El teléfono debe ser válido y puede incluir un prefijo internacional',
            )
            .min(8, 'El teléfono debe tener al menos 8 dígitos')
            .max(15, 'El teléfono no debe exceder los 15 dígitos')
        : Yup.string(),
      receiver: delivery
        ? Yup.string()
            .required('Campo requerido')
            .matches(/^[a-zA-Z\s]+$/, 'Solo se permiten letras')
            .test(
              'two-words', // Nombre del test
              'Debe contener nombre y apellido', // Mensaje de error
              value => (value ? value.trim().split(/\s+/).length >= 2 : false),
            )
        : Yup.string(),
      street: delivery
        ? Yup.string().required('Campo requerido')
        : Yup.string(),
      streetNumber: delivery
        ? Yup.string().required('Campo requerido')
        : Yup.string(),
      apartmentNumber: delivery ? Yup.string().notRequired() : Yup.string(),
      state: delivery ? Yup.string().required('Campo requerido') : Yup.string(),
      city: delivery ? Yup.string().required('Campo requerido') : Yup.string(),
      country: delivery
        ? Yup.string().required('Campo requerido')
        : Yup.string(),
      postalCode: delivery
        ? Yup.string().required('Campo requerido')
        : Yup.string(),
      //billing validations
      billingName: billing
        ? Yup.string().required('Campo requerido')
        : Yup.string(),
      billingLastname: billing
        ? Yup.string().required('Campo requerido')
        : Yup.string(),
      billingRfc: billing
        ? Yup.string().required('Campo requerido')
        : Yup.string(),
      billingLegalName: billing
        ? Yup.string().required('Campo requerido')
        : Yup.string(),
      billingTaxRegime: billing
        ? Yup.string().required('Campo requerido')
        : Yup.string(),
    }),

    onSubmit: async values => {
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
        billingName,
        billingLastname,
        billingRfc,
        billingLegalName,
        billingTaxRegime,
      } = values;

      if (isLoading) {
        return;
      }

      if (numberOfDigitalTalisman > 0) {
        talismanDigitalAcounts.map((_, index) => {
          talismanDigitalAcountsHandleBlur(index);
        });

        if (talismanDigitalAcountsErrors.length > 0) {
          setErrorWarning('validationErrors');
          return;
        }
        if (talismanAcounts.length > 0) {
          const checkedAcounts = await checkTalismanAcount();
          if (!checkedAcounts) {
            setErrorWarning('validationErrors');
            return;
          }
        }
      }

      if (!paymetType) {
        setErrorWarning('missing-payment-type');
        return;
      }

      if (shopingCartItems.length < 1) {
        setErrorWarning('empty-cart');
        return;
      }

      if (!siteTerms) {
        setErrorWarning('site-terms');
        return;
      }

      setErrorWarning('');

      setIsLoading(true);

      const buyerInfo = {email, name, lastname};

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

      const productDetails = shopingCartItems.map(item => {
        return {
          ...item,
        };
      });

      const needDelivery = shopingCartItems.some(item => {
        if (item.model !== 'Digital') {
          return true;
        }
      });

      const talismanDigitalOwners = talismanDigitalAcounts[0]
        ? talismanDigitalAcounts.map(email => {
            return {email: email};
          })
        : undefined;

      if (paymetType === 'mercadoPago') {
        const shopingCartMP = shopingCartItems.map(
          (item: ShopingCartItemOptions) => {
            return {
              title: item.model,
              quantity: item.quantity,
              unit_price: item.price,
              currency_id: 'USD',
            };
          },
        );

        const delivery = {
          title: 'Envío',
          quantity: 1,
          unit_price: deliveryPrice,
          currency_id: 'USD',
        };

        axios
          .post(
            `${envs.API_DOMAIN}/api/v1/payment-mercadopago/create-order`,
            {
              items: needDelivery
                ? [...shopingCartMP, delivery]
                : [...shopingCartMP],
              buyerInfo,
              productDetails,
              deliveryDetails: needDelivery ? deliveryDetails : undefined,
              billingDetails: billing ? billingDetails : undefined,
              talismanDigitalOwners: talismanDigitalOwners,
              user_id: userContextInfo.id || null,
            },
            {withCredentials: true},
          )
          .then(response => {
            localStorage.removeItem('shopingCart');
            setShopingCartItems([]);
            window.location.href = response.data.link_de_pago;
            setIsLoading(false);
          })

          .catch(error => {
            console.log(error);
          });
      }

      if (paymetType === 'paypal') {
        const shopingCartPaypal = shopingCartItems.map(
          (item: ShopingCartItemOptions) => {
            return {
              title: item.model,
              quantity: item.quantity,
              unit_amount: {
                currency_code: 'USD',
                value: item.price,
              },
            };
          },
        );

        const delivery = {
          title: 'Envío',
          quantity: 1,
          unit_amount: {
            currency_code: 'USD',
            value: deliveryPrice,
          },
        };

        axios
          .post(`${envs.API_DOMAIN}/api/v1/payment-paypal/create-order`, {
            items: needDelivery
              ? [...shopingCartPaypal, delivery]
              : [...shopingCartPaypal],
            buyerInfo,
            productDetails,
            deliveryDetails: needDelivery ? deliveryDetails : undefined,
            billingDetails: billing ? billingDetails : undefined,
            talismanDigitalOwners: talismanDigitalOwners,
            user_id: userContextInfo.id || null,
          })
          .then(response => {
            localStorage.removeItem('shopingCart');
            setShopingCartItems([]);
            window.location.href = response.data.link_de_pago;
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
  });

  useEffect(() => {
    // Si hay errores de validación, se establece `errorWarning` en true
    if (Object.keys(singUpForm.errors).length > 0) {
      setErrorWarning('validationErrors');
    } else {
      setErrorWarning('');
    }
  }, [singUpForm.errors]);



  return (
    <main className={shopingCartOpen ? 'viewport-background' : ''}>
      <section className="checkout-container efectoReveal">
        <BackgroundVideo />

        <CheckOutNavbar
          sections={sections}
          buttonFocusPosition={buttonFocusPosition}
          handleButtonFocus={handleButtonFocus}
        />

        <form
          onSubmit={singUpForm.handleSubmit}
          className="checkout-botton-container">
          {buttonFocusPosition.includes('Identificación') ? (
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
                      value={singUpForm.values.name}
                      onChange={singUpForm.handleChange}
                      onBlur={singUpForm.handleBlur}
                      name="name"
                      type="text"
                      placeholder="Ej. John"
                      className={
                        singUpForm.touched.name && singUpForm.errors.name
                          ? 'input-error'
                          : ''
                      }
                    />
                    {singUpForm.touched.name && singUpForm.errors.name && (
                      <span className="checkOut-helpers-error">
                        {singUpForm.errors.name}
                      </span>
                    )}
                  </div>

                  <div className="checkout-form-names-internal-container">
                    <label htmlFor="lastname">Apellido</label>
                    <input
                      value={singUpForm.values.lastname}
                      onChange={singUpForm.handleChange}
                      onBlur={singUpForm.handleBlur}
                      name="lastname"
                      type="text"
                      placeholder="Ej. Doe"
                      className={
                        singUpForm.touched.lastname &&
                        singUpForm.errors.lastname
                          ? 'input-error'
                          : ''
                      }
                    />
                    {singUpForm.touched.lastname &&
                      singUpForm.errors.lastname && (
                        <span className="checkOut-helpers-error">
                          {singUpForm.errors.lastname}
                        </span>
                      )}
                  </div>
                </div>
                <label htmlFor="email">Email</label>
                <input
                  value={singUpForm.values.email}
                  onChange={singUpForm.handleChange}
                  onBlur={singUpForm.handleBlur}
                  name="email"
                  type="email"
                  placeholder="ejemplo@gmail.com"
                  className={
                    singUpForm.touched.email && singUpForm.errors.email
                      ? 'input-error'
                      : ''
                  }
                />
                {singUpForm.touched.email && singUpForm.errors.email && (
                  <span className="checkOut-helpers-error">
                    {singUpForm.errors.email}
                  </span>
                )}

                <button onClick={() => setButttonFocusPosition(sections[1])}>
                  Continuar
                </button>
              </div>
            </div>
          ) : buttonFocusPosition.includes('Talismán Digital') ? (
            <div className="checkout-botton-left-container">
              <div className="checkout-title-container">
                <h3>Talismán digital</h3>
                <h6>Introduzca los correos de activación</h6>
              </div>

              <div className="checkout-form">
                {[...Array(numberOfDigitalTalisman)].map((_, i) => {
                  return (
                    <>
                      <label htmlFor="email">Email</label>
                      <input
                        value={talismanDigitalAcounts[i]}
                        onChange={e =>
                          handleTalismanDigitalInput(i, e.target.value)
                        }
                        onBlur={() => talismanDigitalAcountsHandleBlur(i)}
                        name={`email${i}`}
                        type={`email${i}`}
                        placeholder="ejemplo@gmail.com"
                        className={
                          talismanDigitalAcountsErrors[i] ||
                          talismanAcounts[i] ||
                          (errorWarning === 'validationErrors' &&
                            !talismanDigitalAcounts[i])
                            ? 'input-error'
                            : ''
                        }
                      />
                      {(talismanDigitalAcountsErrors[i] ||
                        (errorWarning === 'validationErrors' &&
                          !talismanDigitalAcounts[i])) && (
                        <span className="checkOut-helpers-error">
                          {talismanDigitalAcountsErrors[i] || 'Campo requerido'}
                        </span>
                      )}
                      {talismanAcounts[i] && (
                        <span className="checkOut-helpers-error">
                          Correo ya registrado
                        </span>
                      )}
                    </>
                  );
                })}

                <button
                  type="button"
                  onClick={async () => {
                    const checkAcounts = await checkTalismanAcount();

                    if (checkAcounts) {
                      setButttonFocusPosition(sections[sections.length - 1]);
                    }
                  }}>
                  Continuar
                </button>
              </div>
            </div>
          ) : buttonFocusPosition.includes('Envío') ? (
            <div className="checkout-botton-left-container">
              <div className="checkout-title-container">
                <h3>Detalle de envío</h3>
                <h6>Ingresa los datos envío.</h6>
              </div>

              <div className="checkout-form">
                <label htmlFor="receiver">Destinatario</label>
                <input
                  value={singUpForm.values.receiver}
                  onChange={singUpForm.handleChange}
                  onBlur={singUpForm.handleBlur}
                  name="receiver"
                  type="text"
                  placeholder="Ej. John Doe"
                  className={
                    singUpForm.touched.receiver && singUpForm.errors.receiver
                      ? 'input-error'
                      : ''
                  }
                />
                {singUpForm.touched.receiver && singUpForm.errors.receiver && (
                  <span className="checkOut-helpers-error">
                    {singUpForm.errors.receiver}
                  </span>
                )}

                <div className="checkout-form-names-container">
                  <div className="checkout-form-names-internal-container">
                    <label htmlFor="receiver">Calle</label>
                    <input
                      value={singUpForm.values.street}
                      onChange={singUpForm.handleChange}
                      onBlur={singUpForm.handleBlur}
                      name="street"
                      type="text"
                      placeholder="Ej. Av. Las Américas"
                      className={
                        singUpForm.touched.street && singUpForm.errors.street
                          ? 'input-error'
                          : ''
                      }
                    />
                    {singUpForm.touched.street && singUpForm.errors.street && (
                      <span className="checkOut-helpers-error">
                        {singUpForm.errors.street}
                      </span>
                    )}
                  </div>

                  <div className="checkout-form-names-internal-container">
                    <label htmlFor="streetNumber">Número</label>
                    <input
                      value={singUpForm.values.streetNumber}
                      onChange={singUpForm.handleChange}
                      onBlur={singUpForm.handleBlur}
                      name="streetNumber"
                      type="text"
                      placeholder="Ej. 2030"
                      className={
                        singUpForm.touched.streetNumber &&
                        singUpForm.errors.street
                          ? 'input-error'
                          : ''
                      }
                    />
                    {singUpForm.touched.streetNumber &&
                      singUpForm.errors.streetNumber && (
                        <span className="checkOut-helpers-error">
                          {singUpForm.errors.streetNumber}
                        </span>
                      )}
                  </div>
                </div>
                <label htmlFor="apartmentNumber">Departamento</label>
                <input
                  value={singUpForm.values.apartmentNumber}
                  onChange={singUpForm.handleChange}
                  onBlur={singUpForm.handleBlur}
                  name="apartmentNumber"
                  type="text"
                  placeholder="Ej. 8A"
                  className={
                    singUpForm.touched.apartmentNumber &&
                    singUpForm.errors.apartmentNumber
                      ? 'input-error'
                      : ''
                  }
                />
                {singUpForm.touched.apartmentNumber &&
                  singUpForm.errors.apartmentNumber && (
                    <span className="checkOut-helpers-error">
                      {singUpForm.errors.apartmentNumber}
                    </span>
                  )}

                <div className="checkout-form-names-container">
                  <div className="checkout-form-names-internal-container">
                    <label htmlFor="city">Ciudad</label>
                    <input
                      value={singUpForm.values.city}
                      onChange={singUpForm.handleChange}
                      onBlur={singUpForm.handleBlur}
                      name="city"
                      type="text"
                      placeholder="Ej. Rosario"
                      className={
                        singUpForm.touched.city && singUpForm.errors.city
                          ? 'input-error'
                          : ''
                      }
                    />
                    {singUpForm.touched.city && singUpForm.errors.city && (
                      <span className="checkOut-helpers-error">
                        {singUpForm.errors.city}
                      </span>
                    )}
                  </div>
                  <div className="checkout-form-names-internal-container">
                    <label htmlFor="state">Provincia/Estado</label>
                    <input
                      value={singUpForm.values.state}
                      onChange={singUpForm.handleChange}
                      onBlur={singUpForm.handleBlur}
                      name="state"
                      type="text"
                      placeholder="Ej. Santa Fe"
                      className={
                        singUpForm.touched.state && singUpForm.errors.state
                          ? 'input-error'
                          : ''
                      }
                    />
                    {singUpForm.touched.state && singUpForm.errors.state && (
                      <span className="checkOut-helpers-error">
                        {singUpForm.errors.state}
                      </span>
                    )}
                  </div>
                </div>

                <div className="checkout-form-names-container">
                  <div className="checkout-form-names-internal-container">
                    <label htmlFor="country">País</label>
                    <input
                      value={singUpForm.values.country}
                      onChange={singUpForm.handleChange}
                      onBlur={singUpForm.handleBlur}
                      name="country"
                      type="text"
                      placeholder="Ej. Argentina"
                      className={
                        singUpForm.touched.country && singUpForm.errors.country
                          ? 'input-error'
                          : ''
                      }
                    />
                    {singUpForm.touched.country &&
                      singUpForm.errors.country && (
                        <span className="checkOut-helpers-error">
                          {singUpForm.errors.country}
                        </span>
                      )}
                  </div>
                  <div className="checkout-form-names-internal-container">
                    <label htmlFor="postalCode">Codigo postal</label>
                    <input
                      value={singUpForm.values.postalCode}
                      onChange={singUpForm.handleChange}
                      onBlur={singUpForm.handleBlur}
                      name="postalCode"
                      type="text"
                      placeholder="Ej. 2000"
                      className={
                        singUpForm.touched.postalCode &&
                        singUpForm.errors.postalCode
                          ? 'input-error'
                          : ''
                      }
                    />
                    {singUpForm.touched.postalCode &&
                      singUpForm.errors.postalCode && (
                        <span className="checkOut-helpers-error">
                          {singUpForm.errors.postalCode}
                        </span>
                      )}
                  </div>
                </div>
                <label htmlFor="phone">Telefóno</label>
                <input
                  value={singUpForm.values.phone}
                  onChange={singUpForm.handleChange}
                  onBlur={singUpForm.handleBlur}
                  name="phone"
                  type="text"
                  placeholder="Ej. +54 9 342 6544569"
                  className={
                    singUpForm.touched.phone && singUpForm.errors.phone
                      ? 'input-error'
                      : ''
                  }
                />
                {singUpForm.touched.phone && singUpForm.errors.phone && (
                  <span className="checkOut-helpers-error">
                    {singUpForm.errors.phone}
                  </span>
                )}
                {singUpForm.values.city &&
                  singUpForm.values.state &&
                  singUpForm.values.streetNumber &&
                  singUpForm.values.street &&
                  singUpForm.values.country &&
                  singUpForm.values.postalCode && (
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

                <button onClick={() => setButttonFocusPosition(sections[2])}>
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
                  {singUpForm.values.country.toLowerCase() === 'mexico' && (
                    <div className="facturacion-checkbox">
                      <label htmlFor="">
                        Si requieres factura fiscal, marque la casilla y
                        complete los campos
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
                          value={singUpForm.values.billingName}
                          onChange={singUpForm.handleChange}
                          onBlur={singUpForm.handleBlur}
                          name="billingName"
                          type="text"
                          placeholder="Ej. John"
                          className={
                            singUpForm.touched.billingName &&
                            singUpForm.errors.billingName
                              ? 'input-error'
                              : ''
                          }
                        />
                        {singUpForm.touched.billingName &&
                          singUpForm.errors.billingName && (
                            <span className="checkOut-helpers-error">
                              {singUpForm.errors.billingName}
                            </span>
                          )}
                      </div>

                      <div className="checkout-form-names-internal-container">
                        <label htmlFor="billingLastname">Apellido</label>
                        <input
                          value={singUpForm.values.billingLastname}
                          onChange={singUpForm.handleChange}
                          onBlur={singUpForm.handleBlur}
                          name="billingLastname"
                          type="text"
                          placeholder="Ej. Doe"
                          className={
                            singUpForm.touched.billingLastname &&
                            singUpForm.errors.billingLastname
                              ? 'input-error'
                              : ''
                          }
                        />
                        {singUpForm.touched.billingLastname &&
                          singUpForm.errors.billingLastname && (
                            <span className="checkOut-helpers-error">
                              {singUpForm.errors.billingLastname}
                            </span>
                          )}
                      </div>
                    </div>

                    <label htmlFor="billingRfc">RFC</label>
                    <input
                      value={singUpForm.values.billingRfc}
                      onChange={singUpForm.handleChange}
                      onBlur={singUpForm.handleBlur}
                      name="billingRfc"
                      type="text"
                      placeholder="RFC"
                      className={
                        singUpForm.touched.billingRfc &&
                        singUpForm.errors.billingRfc
                          ? 'input-error'
                          : ''
                      }
                    />
                    {singUpForm.touched.billingRfc &&
                      singUpForm.errors.billingRfc && (
                        <span className="checkOut-helpers-error">
                          {singUpForm.errors.billingRfc}
                        </span>
                      )}
                    <label htmlFor="billingLegalName">Razón social</label>
                    <input
                      value={singUpForm.values.billingLegalName}
                      onChange={singUpForm.handleChange}
                      onBlur={singUpForm.handleBlur}
                      name="billingLegalName"
                      type="text"
                      placeholder="Razón social"
                      className={
                        singUpForm.touched.billingLegalName &&
                        singUpForm.errors.billingRfc
                          ? 'input-error'
                          : ''
                      }
                    />
                    {singUpForm.touched.billingLegalName &&
                      singUpForm.errors.billingLegalName && (
                        <span className="checkOut-helpers-error">
                          {singUpForm.errors.billingLegalName}
                        </span>
                      )}

                    <label htmlFor="billingTaxRegime">Régimen Fiscal</label>

                    <select
                      name="billingTaxRegime"
                      value={singUpForm.values.billingTaxRegime}
                      onChange={singUpForm.handleChange}
                      onBlur={singUpForm.handleBlur}
                      className={
                        singUpForm.touched.billingTaxRegime &&
                        singUpForm.errors.billingTaxRegime
                          ? 'billing-taxRegime input-error'
                          : 'billing-taxRegime'
                      }
                      style={{
                        color: !singUpForm.values.billingTaxRegime
                          ? 'gray'
                          : '',
                      }}>
                      <option value="">Régimen Fiscal</option>
                      {taxRegimeOptions.map(item => {
                        return <option value={item}>{item}</option>;
                      })}
                    </select>
                    {singUpForm.touched.billingTaxRegime &&
                      singUpForm.errors.billingTaxRegime && (
                        <span className="checkOut-helpers-error">
                          {singUpForm.errors.billingTaxRegime}
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
                          checked={paymetType === 'mercadoPago'}
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
                          checked={paymetType === 'paypal'}
                        />
                        <PayPalIcon />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="checkout-siteTerms-container">
                  <div className="siteTerms-checkbox">
                    <label htmlFor="">
                      Acepto los{' '}
                      <Link to="/terminos-y-condiciones">
                        Términos y condiciones
                      </Link>{' '}
                      y{' '}
                      <Link to="/politica-de-privacidad">
                        Políticas de privacidad
                      </Link>
                    </label>
                    <input
                      type="checkbox"
                      checked={siteTerms}
                      onChange={handleSiteTerms}
                    />
                  </div>
                </div>
                {paymetType === 'paypal' && !errorWarning ? (
                  <div className="complementary-info-payment-container">
                    <p>
                      Para completar la transacción, te enviaremos a los
                      servidores seguros de PayPal.
                    </p>
                  </div>
                ) : paymetType === 'mercadoPago' && !errorWarning ? (
                  <div className="complementary-info-payment-container">
                    <p>
                      Para completar la transacción, te enviaremos a los
                      servidores seguros de Mercado Pago.
                    </p>
                  </div>
                ) : (
                  <></>
                )}
                {errorWarning === 'validationErrors' ||
                Object.values(singUpForm.errors).length > 0 ? (
                  <div className="complementary-info-payment-container error">
                    <p>
                      POR FAVOR, VERIFIQUE HABER LLENADO CORRECTAMENTE LOS
                      CAMPOS
                    </p>
                  </div>
                ) : errorWarning === 'missing-payment-type' ? (
                  <div className="complementary-info-payment-container error">
                    <p>DEBER SELECCIONAR UN MÉTODO DE PAGO.</p>
                  </div>
                ) : errorWarning === 'empty-cart' ? (
                  <div className="complementary-info-payment-container error">
                    <p>NO HAY PRODUCTOS AÑADIDOS AL CARRITO DE COMPRA.</p>
                  </div>
                ) : errorWarning === 'site-terms' ? (
                  <div className="complementary-info-payment-container error">
                    <p>
                      PARA REALIZAR LA COMPRA DEBE ACEPTAR TÉRMINOS Y
                      CONDICIONES
                    </p>
                  </div>
                ) : (
                  <></>
                )}

                <button type="submit">
                  {isLoading && !errorWarning ? (
                    <BeatLoader color={'white'} speedMultiplier={0.4} />
                  ) : (
                    'Ir a pagar'
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
              {shopingCartItems.map(item => {
                return (
                  <CheckOutCard key={item.shoppingCartItem_id} {...item} />
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
