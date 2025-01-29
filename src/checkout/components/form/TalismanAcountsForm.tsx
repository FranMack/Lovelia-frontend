import { FormikErrors, FormikTouched } from 'formik';
import React, {useState} from 'react';
import { InitialValues } from '../../interfaces/checkoutInterfaces';

interface Props {
  values: {
    talismanDigitalAcounts: string[];

    // Agrega otros campos de Formik aquí según lo necesites
  };
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
 errors: FormikErrors<InitialValues>;
  touched:FormikTouched<InitialValues>;
  section: string[];

  handleButtonFocus: (section: string) => void;
  numberOfDigitalTalisman: number;
  talismanAcounts: string[];
  setFieldValue: (a: string, b: string) => void;
  handleTalismanDigitalInput: (a: number, b: string) => void;
  checkTalismanAcount: () => Promise<boolean | undefined>;

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
}: Props) => {
  const [warning, setWarning] = useState(false);
  return (
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
                value={values.talismanDigitalAcounts[i]}
                onBlur={handleBlur}
                onChange={e => {
                  setFieldValue(`talismanDigitalAcounts[${i}]`, e.target.value);

                  handleTalismanDigitalInput(i, e.target.value);
                }}
                name={`email${i}`}
                type={`email${i}`}
                placeholder="ejemplo@gmail.com"
                className={
                  (errors?.talismanDigitalAcounts && touched![`email${i}`]) || !values.talismanDigitalAcounts||
                  talismanAcounts[i] ||
                  (warning && !values.talismanDigitalAcounts[i])
                    ? 'input-error'
                    : ''
                }
              />

              {errors?.talismanDigitalAcounts && touched![`email${i}`] && (
                <span className="checkOut-helpers-error">
                  {Array.isArray(errors?.talismanDigitalAcounts)
                    ? errors?.talismanDigitalAcounts?.[i]
                    : errors?.talismanDigitalAcounts}
                </span>
              )}

              {talismanAcounts[i] && (
                <span className="checkOut-helpers-error">
                  Correo ya registrado
                </span>
              )}
              {warning && !values.talismanDigitalAcounts[i] && !touched![`email${i}`] && (
                  <span className="checkOut-helpers-error">
                    Campo Requerido
                  </span>
                )}
            </>
          );
        })}

        <button
          type="button"
          onClick={async () => {
            const checkAcounts = await checkTalismanAcount();

            const touchedOk=touched!.talismanDigitalAcounts ? true: false

            const validation= !errors?.talismanDigitalAcounts ? true:false

            const {talismanDigitalAcounts}=values


            console.log("xxxxxxxxxxxx",talismanDigitalAcounts)

         

            if (checkAcounts && validation && talismanDigitalAcounts.length>0 ) {
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
