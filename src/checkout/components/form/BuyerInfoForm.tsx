import { FormikErrors,FormikTouched  } from "formik";
import { useState } from "react";
import { InitialValues } from "../../interfaces/checkoutInterfaces";



interface Props {
  values: {
    name: string;
    lastname: string;
    email: string;
    // Agrega otros campos de Formik aquí según lo necesites
  };
  validation:boolean
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  errors: FormikErrors<InitialValues>;
  touched:FormikTouched<InitialValues>;
  section:string[],

  handleButtonFocus:(section:string)=>void
}


export const BuyerInfoForm = ({
  values,
  validation,
  handleChange,
  handleBlur,
  errors,
  touched,
  section,
  handleButtonFocus
 
}: Props) => {

    const [warning,setWarning]=useState(false)
  return (
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
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              name="name"
              type="text"
              placeholder="Ej. John"
              className={touched.name && errors.name || (warning && !values.name) ? 'input-error' : ''}
            />
            {touched.name && errors.name && (
              <span className="checkOut-helpers-error">{errors.name}</span>
            )}
             {!touched.name &&warning && !values.name && (
              <span className="checkOut-helpers-error">Campo Requerido</span>
            )}
            
          </div>

          <div className="checkout-form-names-internal-container">
            <label htmlFor="lastname">Apellido</label>
            <input
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              name="lastname"
              type="text"
              placeholder="Ej. Doe"
              className={
                touched.lastname && errors.lastname || (warning && !values.lastname) ? 'input-error' : ''
              }
            />
            {touched.lastname && errors.lastname && (
              <span className="checkOut-helpers-error">{errors.lastname}</span>
            )}
              {!touched.lastname && warning && !values.lastname && (
              <span className="checkOut-helpers-error">Campo Requerido</span>
            )}
          </div>
        </div>
        <label htmlFor="email">Email</label>
        <input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          type="email"
          placeholder="ejemplo@gmail.com"
          className={touched.email && errors.email || (warning && !values.email) ? 'input-error' : ''}
        />
        {touched.email && errors.email && (
          <span className="checkOut-helpers-error">{errors.email}</span>
        )}
          {!touched.email && warning && !values.email && (
              <span className="checkOut-helpers-error">Campo Requerido</span>
            )}

        <button type="button" onClick={()=>{
            
            validation ? handleButtonFocus(section[1]):setWarning(true)}}>
          Continuar
        </button>
      </div>
    </div>
  );
};
