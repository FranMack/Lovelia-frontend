import { loadMercadoPago } from "@mercadopago/sdk-js";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { envs } from "../../config";
import { UserContext } from "../../context";

interface MercadoPagoCheckoutFormProps {
  userInfo: {
    location: string;
    day: number;
    month: number;
    year: number;
    hour: number;
    min: number;
    meridiam: string;
  };
}

declare global {
  interface Window {
    MercadoPago: any;
    cardFormInstance: any;
  }
}

export const MercadoPagoCheckoutForm = ({
  userInfo,
}: MercadoPagoCheckoutFormProps) => {
  const { location, day, month, year, hour, meridiam } = userInfo;

  const navigate = useNavigate();

  const formRef = useRef<HTMLFormElement | null>(null);
  const progressBarRef = useRef<HTMLProgressElement | null>(null);
  const isMounted = useRef(true);
  const userContext = useContext(UserContext);
  const [warning, setWarning] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //validations
  const [cardNumberErrors, setCardNumberErrors] = useState<boolean>(false);
  const [securityCodeErrors, setSecurityCodeErrors] = useState<boolean>(false);
  const [expirationMonthErrors, setExpirationMonthErrors] =
    useState<boolean>(false);
  const [expirationYearErrors, setExpirationYearErrors] =
    useState<boolean>(false);
  const [cardholderNameErrors, setCardholderNameErrors] =
    useState<boolean>(false);

  const [payerEmailErrors, setPayerEmailErrors] = useState<boolean>(false);

  useEffect(() => {
    if (
      userContext.email &&
      location &&
      day &&
      month &&
      year &&
      hour &&
      meridiam
    ) {
      isMounted.current = true;

      const initializeMercadoPago = async () => {
        try {
          await loadMercadoPago();

          if (!window.MercadoPago) {
            console.error("MercadoPago SDK no se cargó correctamente.");
            return;
          }

          const mp = new window.MercadoPago(envs.MP_PUBLIC_KEY);

          // Comprueba si cardForm ya ha sido instanciado previamente
          if (!window.cardFormInstance) {
            const cardForm = mp.cardForm({
              amount: "15",
              iframe: true,
              form: {
                id: "form-checkout",
                cardNumber: {
                  id: "form-checkout__cardNumber",
                  placeholder: "Número de tarjeta",
                },
                expirationDate: {
                  id: "form-checkout__expirationDate",
                  placeholder: "MM/YY",
                },
                securityCode: {
                  id: "form-checkout__securityCode",
                  placeholder: "Código de seguridad",
                },
                cardholderName: {
                  id: "form-checkout__cardholderName",
                  placeholder: "Nombre completo",
                },
                issuer: {
                  id: "form-checkout__issuer",
                  placeholder: "Banco emisor",
                },
                installments: {
                  id: "form-checkout__installments",
                  placeholder: "Cuotas",
                },
                identificationType: {
                  id: "form-checkout__identificationType",
                  placeholder: "Tipo de documento",
                },
                identificationNumber: {
                  id: "form-checkout__identificationNumber",
                  placeholder: "Número del documento",
                },
                cardholderEmail: {
                  id: "form-checkout__cardholderEmail",
                  placeholder: "E-mail",
                },
              },
              callbacks: {
                onFormMounted: (error: unknown) => {
                  if (error) {
                    console.warn("Form Mounted handling error:", error);
                    return;
                  }
                  console.log("Form mounted");
                },
                onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
                  event.preventDefault();

                  if (!isMounted.current) return;

                  setIsLoading(true);
                  const {
                    paymentMethodId: payment_method_id,
                    issuerId: issuer_id,
                    cardholderEmail: email,
                    amount,
                    token,
                    installments,
                    identificationNumber,
                    identificationType,
                  } = window.cardFormInstance.getCardFormData();

                  try {
                    const response = await fetch(
                      `${envs.API_DOMAIN}/api/v1/payment-mercadopago/subscribe`,
                      {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        credentials: "include",
                        body: JSON.stringify({
                          token,
                          issuer_id,
                          payment_method_id,
                          transaction_amount: Number(amount),
                          installments: Number(installments),
                          description: "Subscripción Lovelia",
                          user_email: userContext.email,
                          userInfo: userInfo,
                          payer: {
                            email,
                            identification: {
                              type: identificationType,
                              number: identificationNumber,
                            },
                          },
                        }),
                      }
                    );

                    setCardNumberErrors(false);
                    setExpirationMonthErrors(false);
                    setExpirationYearErrors(false);
                    setCardholderNameErrors(false);
                    setSecurityCodeErrors(false);

                    if (!response.ok) {
                      const errorData = await response.json();
                      errorData.error.includes("payer_email")
                        ? setPayerEmailErrors(true)
                        : setPayerEmailErrors(false);
                      console.error(
                        "Error en la respuesta del servidor:",
                        errorData
                      );
                      setWarning("Error al procesar al pago");
                      setIsLoading(false);
                      return;
                    }

                    setWarning("");

                    const data = await response.json();
                    navigate("/welcome");
                    console.log("Respuesta exitosa:", data);
                  } catch (error) {
                    console.error("Error en el proceso de pago:", error);
                  }
                },

                onError: (error: unknown) => {
                  console.error(
                    "Error capturado en el callback onError:",
                    error
                  );
                  setWarning(
                    "Ocurrió un error al procesar el formulario. Revise los datos e intente nuevamente."
                  );

                  if (error instanceof Array) {
                    const checkError = (
                      field: string,
                      setError: (value: boolean) => void
                    ) => {
                      const hasError = error.some((item) => {
                        if (item.message.includes(field)) {
                          setError(true);
                          return true;
                        }
                        setError(false);
                        return false;
                      });
                      return hasError;
                    };

                    // Usando la función para cada campo
                    checkError("cardNumber", setCardNumberErrors);
                    checkError("securityCode", setSecurityCodeErrors);
                    checkError("expirationMonth", setExpirationMonthErrors);
                    checkError("expirationYear", setExpirationYearErrors);
                    checkError("cardholderName", setCardholderNameErrors);
                  }

                  if (!error) {
                    setCardNumberErrors(false);
                    setExpirationMonthErrors(false);
                    setExpirationYearErrors(false);
                    setCardholderNameErrors(false);
                    setSecurityCodeErrors(false);
                  }
                },

                onFetching: (resource: unknown) => {
                  console.log("Fetching resource:", resource);
                  const progressBar = progressBarRef.current;
                  progressBar?.removeAttribute("value");

                  return () => {
                    progressBar?.setAttribute("value", "0");
                  };
                },
              },
            });

            // Guarda cardForm en la referencia global
            window.cardFormInstance = cardForm;
          }
        } catch (error) {
          console.error("Error initializing MercadoPago:", error);
        }
      };

      initializeMercadoPago();

      return () => {
        isMounted.current = false;

        // Desmonta el formulario al salir del componente
        if (window.cardFormInstance) {
          window.cardFormInstance.unmount();
          window.cardFormInstance = null;
        }
      };
    }
  }, [userContext.email, userInfo]);

  return (
    <form id="form-checkout" className="form-checkout" ref={formRef}>
      <label htmlFor="">Información de la tarjeta</label>
      <div
        id="form-checkout__cardNumber"
        className={cardNumberErrors ? "container error" : "container"}
      ></div>
      <div
        id="form-checkout__expirationDate"
        className={
          expirationMonthErrors || expirationYearErrors
            ? "container error"
            : "container"
        }
      ></div>

      <div
        id="form-checkout__securityCode"
        className={securityCodeErrors ? "container error" : "container"}
      ></div>
      <label htmlFor="">Nombre del titular de la tarjeta</label>
      <input
        type="text"
        id="form-checkout__cardholderName"
        placeholder="Titular de la tarjeta"
        className={cardholderNameErrors ? "error" : ""}
      />
      <label htmlFor="">Entidad bancaria</label>
      <select id="form-checkout__issuer"></select>
      <label htmlFor="">Cuotas</label>
      <select id="form-checkout__installments"></select>
      <label htmlFor="">Tipo de identificación</label>
      <select id="form-checkout__identificationType"></select>
      <label htmlFor="">Número de identificación</label>
      <input
        type="text"
        id="form-checkout__identificationNumber"
        placeholder="Número del documento"
      />
      <label htmlFor="">Email</label>
      <input
        type="email"
        id="form-checkout__cardholderEmail"
        placeholder="E-mail"
        className={payerEmailErrors ? "error" : ""}
      />
      <button type="submit" id="form-checkout__submit">
        {isLoading ? (
          <BeatLoader color={"white"} speedMultiplier={0.4} />
        ) : (
          "Pagar"
        )}
      </button>

      {warning && <p className="error-message">{warning}</p>}
      <progress ref={progressBarRef} value="0" className="progress-bar">
        Cargando...
      </progress>
    </form>
  );
};
