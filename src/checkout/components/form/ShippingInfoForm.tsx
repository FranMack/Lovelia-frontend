import React, {useState} from 'react';
import logoDhl from '../../assets/logo-dhl.png';
import { FormikErrors, FormikTouched } from 'formik';
import { InitialValues } from '../../interfaces/checkoutInterfaces';

interface Props {
  values: {
    receiver: string;
    street: string;
    streetNumber: string;
    apartmentNumber?: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    phone?: string;
  };
  validation: boolean;
  deliveryPrice: number;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
 errors: FormikErrors<InitialValues>;
  touched:FormikTouched<InitialValues>;
  section: string[];

  handleButtonFocus: (section: string) => void;
}

export const ShippingInfoForm = ({
  values,
  deliveryPrice,
  handleChange,
  handleBlur,
  errors,
  touched,
  section,
  handleButtonFocus,
  validation,
}: Props) => {
  const [warning, setWarning] = useState(false);

  const nextStep=()=>{
    if(!validation){
      setWarning(true)
      return
    }

    localStorage.setItem("checkout-address",JSON.stringify(values))
    handleButtonFocus(section[2])
  }

  

  return (
    <div className="checkout-botton-left-container">
      <div className="checkout-title-container">
        <h3>Detalle de envío</h3>
        <h6>Ingresa los datos envío.</h6>
      </div>

      <div className="checkout-form">
        <label htmlFor="receiver">Destinatario</label>
        <input
          value={values.receiver}
          onChange={handleChange}
          onBlur={handleBlur}
          name="receiver"
          type="text"
          placeholder="Ej. John Doe"
          className={
            (touched.receiver && errors.receiver) ||
            (warning && !values.receiver)
              ? 'input-error'
              : ''
          }
        />
        {touched.receiver && errors.receiver && (
          <span className="checkOut-helpers-error">{errors.receiver}</span>
        )}
        {!touched.receiver && warning && !values.receiver && (
          <span className="checkOut-helpers-error">Campo Requerido</span>
        )}

        <label htmlFor="receiver">Calle</label>
        <input
          value={values.street}
          onChange={handleChange}
          onBlur={handleBlur}
          name="street"
          type="text"
          placeholder="Ej. Av. Las Américas"
          className={
            (touched.street && errors.street) || (warning && !values.street)
              ? 'input-error'
              : ''
          }
        />
        {touched.street && errors.street && (
          <span className="checkOut-helpers-error">{errors.street}</span>
        )}
        {!touched.street && warning && !values.receiver && (
          <span className="checkOut-helpers-error">Campo Requerido</span>
        )}

        <div className="checkout-form-names-container">
          <div className="checkout-form-names-internal-container">
            <label htmlFor="streetNumber">Número</label>
            <input
              value={values.streetNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              name="streetNumber"
              type="text"
              placeholder="Ej. 2030"
              className={
                (touched.streetNumber && errors.street) ||
                (warning && !values.streetNumber)
                  ? 'input-error'
                  : ''
              }
            />
            {touched.streetNumber && errors.streetNumber && (
              <span className="checkOut-helpers-error">
                {errors.streetNumber}
              </span>
            )}
            {!touched.streetNumber && warning && !values.streetNumber && (
              <span className="checkOut-helpers-error">Campo Requerido</span>
            )}
          </div>

          <div className="checkout-form-names-internal-container">
            <label htmlFor="apartmentNumber">Departamento</label>
            <input
              value={values.apartmentNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              name="apartmentNumber"
              type="text"
              placeholder="Ej. 8A"
              className={
                touched.apartmentNumber && errors.apartmentNumber
                  ? 'input-error'
                  : ''
              }
            />
            {touched.apartmentNumber && errors.apartmentNumber && (
              <span className="checkOut-helpers-error">
                {errors.apartmentNumber}
              </span>
            )}
          </div>
        </div>

        <div className="checkout-form-names-container">
          <div className="checkout-form-names-internal-container">
            <label htmlFor="city">Ciudad</label>
            <input
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              name="city"
              type="text"
              placeholder="Ej. Rosario"
              className={
                (touched.city && errors.city) || (warning && !values.city)
                  ? 'input-error'
                  : ''
              }
            />
            {touched.city && errors.city && (
              <span className="checkOut-helpers-error">{errors.city}</span>
            )}
            {!touched.city && warning && !values.city && (
              <span className="checkOut-helpers-error">Campo Requerido</span>
            )}
          </div>
          <div className="checkout-form-names-internal-container">
            <label htmlFor="state">Provincia/Estado</label>
            <input
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              name="state"
              type="text"
              placeholder="Ej. Santa Fe"
              className={
                (touched.state && errors.state) || (warning && !values.state)
                  ? 'input-error'
                  : ''
              }
            />
            {touched.state && errors.state && (
              <span className="checkOut-helpers-error">{errors.state}</span>
            )}
            {!touched.state && warning && !values.state && (
              <span className="checkOut-helpers-error">Campo Requerido</span>
            )}
          </div>
        </div>

        <div className="checkout-form-names-container">
          <div className="checkout-form-names-internal-container">
            <label htmlFor="country">País</label>
         
         <select  name="country"  value={values.country} onChange={handleChange}>
         <option>Pais</option>
          <option value="Argentina">Argentina</option>
          <option value="Mexico">Mexico</option>
         </select>
            {touched.country && errors.country && (
              <span className="checkOut-helpers-error">{errors.country}</span>
            )}
            {!touched.country && warning && !values.country && (
              <span className="checkOut-helpers-error">Campo Requerido</span>
            )}
          </div>
          <div className="checkout-form-names-internal-container">
            <label htmlFor="postalCode">Codigo postal</label>
            <input
              value={values.postalCode}
              onChange={handleChange}
              onBlur={handleBlur}
              name="postalCode"
              type="text"
              placeholder="Ej. 2000"
              className={
                (touched.postalCode && errors.postalCode) ||
                (warning && !values.postalCode)
                  ? 'input-error'
                  : ''
              }
            />
            {touched.postalCode && errors.postalCode && (
              <span className="checkOut-helpers-error">
                {errors.postalCode}
              </span>
            )}
            {!touched.postalCode && warning && !values.postalCode && (
              <span className="checkOut-helpers-error">Campo Requerido</span>
            )}
          </div>
        </div>
        <label htmlFor="phone">Telefóno</label>
        <input
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          name="phone"
          type="text"
          placeholder="Ej. +54 9 342 6544569"
          className={
            (touched.phone && errors.phone) || (warning && !values.phone)
              ? 'input-error'
              : ''
          }
        />
        {touched.phone && errors.phone && (
          <span className="checkOut-helpers-error">{errors.phone}</span>
        )}
        {!touched.phone && warning && !values.phone && (
          <span className="checkOut-helpers-error">Campo Requerido</span>
        )}
        {values.city &&
          values.state &&
          values.streetNumber &&
          values.street &&
          values.country &&
          values.postalCode && (
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

        <button
          type="button"
          onClick={nextStep}>
          Continuar
        </button>
      </div>
    </div>
  );
};
