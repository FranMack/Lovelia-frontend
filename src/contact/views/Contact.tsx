import axios from "axios";
import { useContext, useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { envs } from "../../config/envs";
import { ShopingCartContext } from "../../context";
import { TimerContext } from "../../context/timerContext";
import { BackgroundVideo } from "../../ui/components";
import logo from "../assets/logoSimple.png";
import { MessageSend } from "../components/MessageSend";
import { useFormik } from "formik";
import * as Yup from "yup";
import contactImage from "../assets/Contacto para WEB.webp"

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //is loading

  const [isLoading, setIsLoading] = useState(false);

  const [messageSent, setMessageSent] = useState<boolean>(false);
  const handleMessageSent = () => {
    setMessageSent(!messageSent);
  };

  const { activatedAlarm } = useContext(TimerContext);
  const { shopingCartOpen } = useContext(ShopingCartContext);

  const singUpForm = useFormik({
    initialValues: {
      name: "",
      subject: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Campo requerido"),
      subject: Yup.string().required("Campo requerido"),
      email: Yup.string().email("Email no valido").required("Campo requerido"),
      message: Yup.string().required("Campo requerido"),
    }),

    onSubmit: (values) => {
      if (isLoading) {
        return;
      }

      setIsLoading(true);

      axios
        .post(`${envs.API_DOMAIN}/api/v1/user/consult`, {
          name: values.name,
          subject: values.subject,
          email: values.email,
          message: values.message,
        })
        .then((response) => {
          console.log(response);
          singUpForm.resetForm();
          setIsLoading(false);
          handleMessageSent();
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    },
  });

  return (
    <main
      className={activatedAlarm || shopingCartOpen ? "viewport-background" : ""}
    >
      <section className="contact-container efectoReveal">
        <BackgroundVideo />

        <div className="contact-internal-container revealLogo">
          <div className="contact-text-container">
            <div className="logo-container">
              <img src={logo} alt="logo lovelia" />
              <p>a tu servicio</p>
            </div>
            <h2>Contáctanos:</h2>
            <p>
              Si tienes alguna duda, comentario o sugerencia, escríbenos a
              través de este formulario de contacto.
            </p>
          </div>
          <div className="image-container">
           <img src={contactImage} alt="contact picture" />
          </div>
        </div>
        <div className="contact-internal-container revealLogo">
          {messageSent ? (
            <MessageSend handleMessage={handleMessageSent} />
          ) : (
            <form
              onSubmit={singUpForm.handleSubmit}
              className="contact-form"
              action=""
            >
              <h3>Habla con nosotros</h3>
              <h6>Completa el formulario para enviar tu consulta.</h6>

              <input
                value={singUpForm.values.name}
                onChange={singUpForm.handleChange}
                onBlur={singUpForm.handleBlur}
                name="name"
                type="text"
                placeholder="Tu nombre"
                className={
                  singUpForm.touched.name && singUpForm.errors.name
                    ? "input-error"
                    : ""
                }
              />
              {singUpForm.touched.name && singUpForm.errors.name && (
                <span className="input-helpers-error">
                  {singUpForm.errors.name}
                </span>
              )}
              <input
                value={singUpForm.values.subject}
                onChange={singUpForm.handleChange}
                onBlur={singUpForm.handleBlur}
                name="subject"
                type="text"
                placeholder="Asunto"
                className={
                  singUpForm.touched.subject && singUpForm.errors.subject
                    ? "input-error"
                    : ""
                }
              />
              {singUpForm.touched.subject && singUpForm.errors.subject && (
                <span className="input-helpers-error">
                  {singUpForm.errors.subject}
                </span>
              )}
              <input
                value={singUpForm.values.email}
                onChange={singUpForm.handleChange}
                onBlur={singUpForm.handleBlur}
                name="email"
                type="email"
                placeholder="Tu correo electrónico"
                className={
                  singUpForm.touched.email && singUpForm.errors.email
                    ? "input-error"
                    : ""
                }
              />
              {singUpForm.touched.email && singUpForm.errors.email && (
                <span className="input-helpers-error">
                  {singUpForm.errors.email}
                </span>
              )}

              <textarea
                value={singUpForm.values.message}
                onChange={singUpForm.handleChange}
                onBlur={singUpForm.handleBlur}
                name="message"
                placeholder="Escribe tu mensaje aqui"
                className={
                  singUpForm.touched.message && singUpForm.errors.message
                    ? "input-error"
                    : ""
                }
              />
              {singUpForm.touched.message && singUpForm.errors.message && (
                <span className="input-helpers-error">
                  {singUpForm.errors.message}
                </span>
              )}

              {
                <button type="submit">
                  {isLoading ? (
                    <BeatLoader color={"white"} speedMultiplier={0.4} />
                  ) : (
                    "ENVIAR"
                  )}
                </button>
              }
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

export default Contact;
