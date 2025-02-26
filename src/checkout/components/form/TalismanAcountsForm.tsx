import {FormikErrors, FormikTouched} from 'formik';
import React, {useState} from 'react';
import {InitialValues} from '../../interfaces/checkoutInterfaces';

interface Props {
  values: {
    talismanDigitalAcounts: string[];
  };
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  errors: FormikErrors<InitialValues>;
  touched: FormikTouched<InitialValues>;
  section: string[];
  handleButtonFocus: (section: string) => void;
  numberOfDigitalTalisman: number;
  talismanAcounts: string[];
  setFieldValue: (a: string, b: string) => void;
  handleTalismanDigitalInput: (a: number, b: string) => void;
  checkTalismanAcount: () => Promise<boolean | undefined>;
  submitCount: number;
}

export const TalismanAcountsForm = ({
  values,
  handleBlur,
  errors,
  numberOfDigitalTalisman,
  section,
  talismanAcounts,
  handleButtonFocus,
  setFieldValue,
  handleTalismanDigitalInput,
  checkTalismanAcount,
  touched,
  submitCount,
}: Props) => {
  const [warning, setWarning] = useState(false);

  return (
    <div className="checkout-botton-left-container">
      <div className="checkout-title-container">
        <h3>Talismán digital</h3>
        <h6>
       Ingresa el correo del destinatario del Talismán Digital, este será necesario para su activación.
        
        </h6>
      </div>

      <div className="checkout-form">
        {[...Array(numberOfDigitalTalisman)].map((_, i) => {
          const isEmpty = !values.talismanDigitalAcounts[i];
          const hasError =
            Array.isArray(errors?.talismanDigitalAcounts) &&
            errors.talismanDigitalAcounts[i];
          const shouldShowError =
            (isEmpty && (warning || touched[`email${i}`] || submitCount > 0)) ||
            hasError;

          return (
            <React.Fragment key={i}>
              <label htmlFor={`email${i}`}>Email</label>
              <input
                value={values.talismanDigitalAcounts[i]}
                onBlur={handleBlur}
                onChange={e => {
                  setFieldValue(`talismanDigitalAcounts[${i}]`, e.target.value);
                  handleTalismanDigitalInput(i, e.target.value);
                }}
                name={`email${i}`}
                type="email"
                placeholder="ejemplo@gmail.com"
                className={
                  shouldShowError || talismanAcounts[i] ? 'input-error' : ''
                }
              />

              {shouldShowError && (
                <span className="checkOut-helpers-error">
                  {hasError || 'Campo Requerido'}
                </span>
              )}

              {talismanAcounts[i] && (
                <span className="checkOut-helpers-error">
                  Correo ya registrado
                </span>
              )}
            </React.Fragment>
          );
        })}

        <button
          type="button"
          onClick={async () => {
            const checkAcounts = await checkTalismanAcount();
            const touchedOk = !!touched.talismanDigitalAcounts;
            const validation = !errors?.talismanDigitalAcounts;
            const {talismanDigitalAcounts} = values;

            if (
              checkAcounts &&
              validation &&
              talismanDigitalAcounts.length > 0
            ) {
              handleButtonFocus(section[section.length - 1]);
            }
            if (!validation || !touchedOk) {
              setWarning(true);
            }
          }}>
          Continuar
        </button>
      </div>
    </div>
  );
};
