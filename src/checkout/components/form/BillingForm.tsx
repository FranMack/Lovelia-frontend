import {taxRegimeOptions} from '../../helpers/taxRegimeOptions';

interface Props {
  values: {
    billingName: string;
    billingLastname: string;
    billingRfc: string;
    billingLegalName: string;
    billingTaxRegime: string;
    // Agrega otros campos de Formik aquí según lo necesites
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  handleBlur: (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  errors: {
    [key: string]: string | undefined | string[];
  };
  touched: {
    [key: string]: boolean | undefined;
  };
}

export const BillingForm = ({
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
}: Props) => {
  return (
    <>
      <div className="checkout-form-names-container">
        <div className="checkout-form-names-internal-container">
          <label htmlFor="billingName">Nombre</label>
          <input
            value={values.billingName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="billingName"
            type="text"
            placeholder="Ej. John"
            className={
              touched.billingName && errors.billingName ? 'input-error' : ''
            }
          />
          {touched.billingName && errors.billingName && (
            <span className="checkOut-helpers-error">{errors.billingName}</span>
          )}
        </div>

        <div className="checkout-form-names-internal-container">
          <label htmlFor="billingLastname">Apellido</label>
          <input
            value={values.billingLastname}
            onChange={handleChange}
            onBlur={handleBlur}
            name="billingLastname"
            type="text"
            placeholder="Ej. Doe"
            className={
              touched.billingLastname && errors.billingLastname
                ? 'input-error'
                : ''
            }
          />
          {touched.billingLastname && errors.billingLastname && (
            <span className="checkOut-helpers-error">
              {errors.billingLastname}
            </span>
          )}
        </div>
      </div>

      <label htmlFor="billingRfc">RFC</label>
      <input
        value={values.billingRfc}
        onChange={handleChange}
        onBlur={handleBlur}
        name="billingRfc"
        type="text"
        placeholder="RFC"
        className={touched.billingRfc && errors.billingRfc ? 'input-error' : ''}
      />
      {touched.billingRfc && errors.billingRfc && (
        <span className="checkOut-helpers-error">{errors.billingRfc}</span>
      )}
      <label htmlFor="billingLegalName">Razón social</label>
      <input
        value={values.billingLegalName}
        onChange={handleChange}
        onBlur={handleBlur}
        name="billingLegalName"
        type="text"
        placeholder="Razón social"
        className={
          touched.billingLegalName && errors.billingRfc ? 'input-error' : ''
        }
      />
      {touched.billingLegalName && errors.billingLegalName && (
        <span className="checkOut-helpers-error">
          {errors.billingLegalName}
        </span>
      )}

      <label htmlFor="billingTaxRegime">Régimen Fiscal</label>

      <select
        name="billingTaxRegime"
        value={values.billingTaxRegime}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          touched.billingTaxRegime && errors.billingTaxRegime
            ? 'billing-taxRegime input-error'
            : 'billing-taxRegime'
        }
        style={{
          color: !values.billingTaxRegime ? 'gray' : '',
        }}>
        <option value="">Régimen Fiscal</option>
        {taxRegimeOptions.map(item => {
          return <option value={item}>{item}</option>;
        })}
      </select>
      {touched.billingTaxRegime && errors.billingTaxRegime && (
        <span className="checkOut-helpers-error">
          {errors.billingTaxRegime}
        </span>
      )}
    </>
  );
};
