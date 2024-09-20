import React, { useContext, useEffect, useRef, useState } from "react";
import { loadMercadoPago } from "@mercadopago/sdk-js";
import { envs } from "../../config";
import { UserContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

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

export const MercadoPagoCheckoutForm = ({ userInfo }: MercadoPagoCheckoutFormProps) => {
  const{location,day,month,year,hour,min,meridiam}=userInfo;

  const navigate=useNavigate();

  const tryAgain=()=>{
    window.location.href = "/checkout/digital";
  }
  
  const formRef = useRef<HTMLFormElement | null>(null);
  const progressBarRef = useRef<HTMLProgressElement | null>(null);
  const isMounted = useRef(true);
  const userContext = useContext(UserContext);
  const [warning, setWarning] = useState<string>("");
  const [isLoading,setIsLoading]=useState<boolean>(false)

  useEffect(() => {
    if (userContext.email && location && day && month && year && hour && min && meridiam  ) {
      isMounted.current = true;

      const initializeMercadoPago = async () => {
        try {
          await loadMercadoPago();
          const mp = new window.MercadoPago(envs.MP_PUBLIC_KEY);

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
                placeholder: "Titular de la tarjeta",
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
              onFormMounted: (error) => {
                if (error) {
                  console.warn("Form Mounted handling error:", error);
                  return;
                }
                console.log("Form mounted");
              },
              onSubmit: async (event) => {
                event.preventDefault();

                if (!isMounted.current) return;

                setIsLoading(true)
                const {
                  paymentMethodId: payment_method_id,
                  issuerId: issuer_id,
                  cardholderEmail: email,
                  amount,
                  token,
                  installments,
                  identificationNumber,
                  identificationType,
                } = cardForm.getCardFormData();

               
          

                console.log("xxxxxxxxxxxxxxxxxxxxxx",userInfo)
               
                // Validación de campos de usuario
             /*   if (
                  !userInfo.location ||
                  !userInfo.hour ||
                  !userInfo.min ||
                  !userInfo.meridiam ||
                  !userInfo.day ||
                  !userInfo.month ||
                  !userInfo.year
                ) {
                  setWarning("Debes completar todos los campos.");
                  return;
                }*/

              

                try {
                  const response = await fetch(
                   ` ${envs.API_DOMAIN}/api/v1/payment-mercadopago/subscribe`,
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        token,
                        issuer_id,
                        payment_method_id,
                        transaction_amount: Number(amount),
                        installments: Number(installments),
                        description: "Descripción del producto",
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
                      credentials: "include",
                    }
                  );

                

                  if (!response.ok) {
                    
                    const errorData = await response.json();
                    
                    console.error(
                      "Error en la respuesta del servidor:",
                      errorData
                    );
                    setWarning("Error al procesar al pago")
                    setIsLoading(false)
                    return;
                  }

                  setWarning("")

                  const data = await response.json();
                  navigate("/welcome")
                  console.log("Respuesta exitosa:", data);
                } catch (error) {
                  console.error("Error en el proceso de pago:", error);
                 
                }
              },
              onFetching: (resource) => {
                console.log("Fetching resource:", resource);
                const progressBar = progressBarRef.current;
                progressBar?.removeAttribute("value");

                return () => {
                  progressBar?.setAttribute("value", "0");
                };
              },
            },
          });

          return () => {
            cardForm?.unmount();
            isMounted.current = false;
          };
        } catch (error) {
          console.error("Error initializing MercadoPago:", error);
        
        }
      };

      initializeMercadoPago();

      return () => {
        isMounted.current = false;
        formRef.current = null;
        progressBarRef.current = null;
      };
    }
  }, [userContext.email,userInfo]);


  

  return (
    <form id="form-checkout" className="form-checkout" ref={formRef}>
      <div id="form-checkout__cardNumber" className="container"></div>
      <div id="form-checkout__expirationDate" className="container"></div>
      <div id="form-checkout__securityCode" className="container"></div>
      <input
        type="text"
        id="form-checkout__cardholderName"
        placeholder="Titular de la tarjeta"
      />
      <select id="form-checkout__issuer"></select>
      <select id="form-checkout__installments"></select>
      <select id="form-checkout__identificationType"></select>
      <input
        type="text"
        id="form-checkout__identificationNumber"
        placeholder="Número del documento"
      />
      <input
        type="email"
        id="form-checkout__cardholderEmail"
        placeholder="E-mail"
      />
      {warning ? <button onClick={tryAgain}>  {isLoading ? <BeatLoader color={"white"} speedMultiplier={0.4} />:"Volver a intentar"}</button>: <button type="submit" id="form-checkout__submit">
        {isLoading ? <BeatLoader color={"white"} speedMultiplier={0.4} />:"Pagar"}
      </button>}
      {warning && <p className="error-message">{warning}</p>}
      <progress ref={progressBarRef} value="0" className="progress-bar">
        Cargando...
      </progress>
    </form>
  );
};
