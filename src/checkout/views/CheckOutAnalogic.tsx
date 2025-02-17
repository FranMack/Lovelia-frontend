import axios from 'axios';
import {useFormik} from 'formik';
import {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import * as Yup from 'yup';
import {MercadoPagoIcon, PayPalIcon} from '../../assets//icons/icons';
import {envs} from '../../config/envs';
import {UserContext} from '../../context';
import {ShopingCartContext} from '../../context/modalShopingCartContext';
import {BackgroundVideo} from '../../ui/components';

import {CheckOutCard} from '../components/CheckOutCard';
import {CheckOutNavbar} from '../components/CheckOutNavbar';

import {CheckOutNavbarMobile} from '../components/CheckOutNavbarMobile';

import {
  BillingForm,
  BuyerInfoForm,
  ShippingInfoForm,
  TalismanAcountsForm,
} from '../components/form';
import {EmptyCar} from './EmptyCar';

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

  const {shopingCartOpen, shopingCartItems} = useContext(ShopingCartContext);

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
  }, [buttonFocusPosition]);

  useEffect(() => {
  
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
      const numberOfTalismans = shopingCartItems.find(item => {
        return item.model === 'Digital';
      })?.quantity || 0;

      setNumberOfDigitalTalisman(numberOfTalismans);

      setTalismanDigitalAcounts(Array(numberOfTalismans).fill(''));

      return;
    }

    if (hasTalismanDigital && !hasTalismanAnalog) {
      setSections(['1. Identificación', '2. Talismán Digital', '3. Pago']);
      const numberOfTalismans = shopingCartItems.find(item => {
        return item.model === 'Digital';
      })?.quantity || 0;

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

  const [talismanAcounts, setTalismanAcounts] = useState<Array<string>>([]);

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



  const getInitialDataAddress = () => {
    try {
      const data = JSON.parse(localStorage.getItem("checkout-address") || "{}");
      return {
        phone: data.phone || "",
        receiver: data.receiver || "",
        street: data.street || "",
        streetNumber: data.streetNumber || "",
        apartmentNumber: data.apartmentNumber || "",
        state: data.state || "",
        city: data.city || "",
        country: data.country || "",
        postalCode: data.postalCode || "",
      };
    } catch {
      // Si hay algún error en el formato, retornar valores predeterminados
      return {
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
    }
  };

  const [initialDataAddress]=useState(getInitialDataAddress())





  

  const singUpForm = useFormik({
    //enableReinitialize: true, 
    initialValues: {
      name: userContextInfo.name,
      lastname: userContextInfo.lastname,
      email: userContextInfo.email,
      phone: initialDataAddress.phone,
      receiver: initialDataAddress.receiver,
      street:initialDataAddress.street,
      streetNumber: initialDataAddress.streetNumber,
      apartmentNumber: initialDataAddress.apartmentNumber,
      state: initialDataAddress.state,
      city: initialDataAddress.city,
      country: initialDataAddress.country,
      postalCode: initialDataAddress.postalCode,
      billingName: '',
      billingLastname: '',
      billingRfc: '',
      billingLegalName: '',
      billingTaxRegime: '',
      talismanDigitalAcounts: talismanAcounts || [''],
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

        talismanDigitalAcounts: 
        numberOfDigitalTalisman > 0
          ? Yup.array()
              .of(
                Yup.string()
                  .email('Email no válido')
                  .required('Campo requerido')
              )
              .min(numberOfDigitalTalisman, `Debes ingresar al menos ${numberOfDigitalTalisman} email(s).`)
          : Yup.array().notRequired(),
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
          product_id: item.product_id,
          quantity: item.quantity,
          intention: item.intention,
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
        axios
          .post(
            `${envs.API_DOMAIN}/api/v1/payment-mercadopago/create-order`,
            {
              buyerInfo,
              deliveryPrice: 1,
              productDetails,
              deliveryDetails: needDelivery ? deliveryDetails : undefined,
              billingDetails: billing ? billingDetails : undefined,
              talismanDigitalOwners: talismanDigitalOwners,
              user_id: userContextInfo.id || null,
            },
            {withCredentials: true},
          )
          .then(response => {
            window.location.href = response.data.link_de_pago;
            setIsLoading(false);
          })

          .catch(error => {
            console.log(error);
          });
      }

      if (paymetType === 'paypal') {
        axios
          .post(`${envs.API_DOMAIN}/api/v1/payment-paypal/create-order`, {
            buyerInfo,
            deliveryPrice: 1,
            productDetails,
            deliveryDetails: needDelivery ? deliveryDetails : undefined,
            billingDetails: billing ? billingDetails : undefined,
            talismanDigitalOwners: talismanDigitalOwners,
            user_id: userContextInfo.id || null,
          })
          .then(response => {
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



  console.log('values', singUpForm.values);


  

  if (shopingCartItems.length < 1) {
    return <EmptyCar />;
  }

  return (
    <main className={shopingCartOpen ? 'viewport-background' : ''}>
      <section className="checkout-container efectoReveal">
        <BackgroundVideo />

        <CheckOutNavbar
          sections={sections}
          buttonFocusPosition={buttonFocusPosition}
          handleButtonFocus={handleButtonFocus}
        />

        <CheckOutNavbarMobile
          sections={sections}
          buttonFocusPosition={buttonFocusPosition}
          handleButtonFocus={handleButtonFocus}
        />

        <form
          onSubmit={singUpForm.handleSubmit}
          className="checkout-botton-container">
          {buttonFocusPosition.includes('Identificación') ? (
            <BuyerInfoForm
              values={singUpForm.values}
              handleChange={singUpForm.handleChange}
              handleBlur={singUpForm.handleBlur}
              errors={singUpForm.errors}
              touched={singUpForm.touched}
              section={sections}
              handleButtonFocus={handleButtonFocus}
              validation={
                singUpForm.values.email &&
                singUpForm.values.name &&
                singUpForm.values.lastname &&
                !singUpForm.errors.email &&
                !singUpForm.errors.name &&
                !singUpForm.errors.lastname
                  ? true
                  : false
              }
            />
          ) : buttonFocusPosition.includes('Talismán Digital') ? (
            <TalismanAcountsForm
              touched={singUpForm.touched}
              values={singUpForm.values}
              errors={singUpForm.errors}
              handleBlur={singUpForm.handleBlur}
              section={sections}
              handleButtonFocus={handleButtonFocus}
              numberOfDigitalTalisman={numberOfDigitalTalisman}
              talismanAcounts={talismanAcounts}
              setFieldValue={singUpForm.setFieldValue}
              handleTalismanDigitalInput={handleTalismanDigitalInput}
              checkTalismanAcount={() => checkTalismanAcount()}
              submitCount={singUpForm.submitCount}
            />
          ) : buttonFocusPosition.includes('Envío') ? (
            <ShippingInfoForm
              values={singUpForm.values}
              handleChange={singUpForm.handleChange}
              handleBlur={singUpForm.handleBlur}
              errors={singUpForm.errors}
              touched={singUpForm.touched}
              section={sections}
              handleButtonFocus={handleButtonFocus}
              deliveryPrice={deliveryPrice}
              validation={
                singUpForm.values.street &&
                singUpForm.values.streetNumber &&
                singUpForm.values.receiver &&
                singUpForm.values.city &&
                singUpForm.values.state &&
                singUpForm.values.country &&
                singUpForm.values.postalCode &&
                singUpForm.values.phone &&
                !singUpForm.errors.street &&
                !singUpForm.errors.streetNumber &&
                !singUpForm.errors.receiver &&
                !singUpForm.errors.city &&
                !singUpForm.errors.state &&
                !singUpForm.errors.country &&
                !singUpForm.errors.postalCode &&
                !singUpForm.errors.phone
                  ? true
                  : false
              }
            />
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
                  <BillingForm
                    values={singUpForm.values}
                    handleChange={singUpForm.handleChange}
                    handleBlur={singUpForm.handleBlur}
                    errors={singUpForm.errors}
                    touched={singUpForm.touched}
                  />
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
