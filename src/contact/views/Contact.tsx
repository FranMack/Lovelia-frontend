import axios from "axios";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { envs } from "../../config/envs";
import { ContactValidation } from "../helpers/contactValidations";
import { useForm } from "../../hooks/useForm";
import logo from "../assets/logoSimple.png";
import { MessageSend } from "../components/MessageSend";
import { BackgroundVideo } from "../../ui/components";

export function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //is loading

  const [isLoading, setIsLoading] = useState(false);

  const [messageSent, setMessageSent] = useState<boolean>(false);
  const handleMessageSent = () => {
    setMessageSent(!messageSent);
  };

  const initialForm = {
    name: "",
    subject: "",
    email: "",
    message: "",
  };

  const { formState, onInputChange, onResetForm } = useForm(initialForm);
  const { name, subject, email, message } = formState;

  const [nameErrors, setNameErrors] = useState<string[]>([]);
  const [subjectErrors, setSubjectErrors] = useState<string[]>([]);
  const [emailErrors, setEmailErrors] = useState<string[]>([]);
  const [messageErrors, setMessageErrors] = useState<string[]>([]);

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const [errors] = ContactValidation.create({
      name: name,
      subject: subject,
      email: email,
      message: message,
    });

    if (errors) {
      errors.map((error) => {
        if (Object.keys(error).includes("name")) {
          return setNameErrors((prevErrors) => [...prevErrors, error["name"]]);
        }
        if (Object.keys(error).includes("subject")) {
          return setSubjectErrors((prevErrors) => [
            ...prevErrors,
            error["subject"],
          ]);
        }
        if (Object.keys(error).includes("email")) {
          return setEmailErrors((prevErrors) => [
            ...prevErrors,
            error["email"],
          ]);
        }
        if (Object.keys(error).includes("message")) {
          return setMessageErrors((prevErrors) => [
            ...prevErrors,
            error["message"],
          ]);
        }
      });

      !errors.find((error) => {
        return Object.keys(error).includes("name");
      }) && setNameErrors([]);
      !errors.find((error) => {
        return Object.keys(error).includes("subject");
      }) && setSubjectErrors([]);
      !errors.find((error) => {
        return Object.keys(error).includes("email");
      }) && setEmailErrors([]);
      !errors.find((error) => {
        return Object.keys(error).includes("message");
      }) && setMessageErrors([]);

      return;
    }

    setIsLoading(true);

    axios
      .post(`${envs.API_DOMAIN}/api/v1/user/consult`, {
        name: name,
        subject: subject,
        email: email,
        message: message,
      })
      .then((response) => {
        console.log(response);
        onResetForm();
        setIsLoading(false);
        handleMessageSent();
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  const handleBlur = (field: string) => {
    const [errors] = ContactValidation.create(formState);
    const fieldError = errors?.find((error) =>
      Object.keys(error).includes(field)
    );
    switch (field) {
      case "name":
        setNameErrors(fieldError ? [fieldError[field]] : []);
        break;
      case "subject":
        setSubjectErrors(fieldError ? [fieldError[field]] : []);
        break;
      case "email":
        setEmailErrors(fieldError ? [fieldError[field]] : []);
        break;
      case "message":
        setMessageErrors(fieldError ? [fieldError[field]] : []);
        break;
      default:
        break;
    }
  };

  return (
    <section className="contact-container efectoReveal">
      <BackgroundVideo />

      <div className="contact-internal-container revealLogo">
        <div className="contact-text-container">
          <div className="logo-container">
            <img src={logo} alt="logo lovelia" />
            <p>a tu servicio</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            obcaecati, ipsa fugit possimus harum explicabo doloremque
            consequatur corrupti ut doloribus! Vitae ad cupiditate a distinctio
            vero et corrupti corporis est.
          </p>
        </div>
      </div>
      <div className="contact-internal-container revealLogo">
        {messageSent ? (
          <MessageSend handleMessage={handleMessageSent} />
        ) : (
          <form onSubmit={handleSubmit} className="contact-form" action="">
            <h3>Habla con nosotros</h3>
            <h6>Completa el formulario para enviar tu consulta.</h6>

            <input
              value={name}
              onChange={onInputChange}
              onBlur={() => handleBlur("name")}
              name="name"
              type="text"
              placeholder="Tu nombre"
              className={`${nameErrors.length > 0 && "input-error"}`}
            />
            {nameErrors.length > 0 && (
              <span className="input-helpers-error">{nameErrors[0]}</span>
            )}
            <input
              value={subject}
              onChange={onInputChange}
              onBlur={() => handleBlur("subject")}
              name="subject"
              type="text"
              placeholder="Asunto"
              className={`${subjectErrors.length > 0 && "input-error"}`}
            />
            {subjectErrors.length > 0 && (
              <span className="input-helpers-error">{subjectErrors[0]}</span>
            )}
            <input
              value={email}
              onChange={onInputChange}
              onBlur={() => handleBlur("email")}
              name="email"
              type="email"
              placeholder="Tu correo electrónico"
              className={`${emailErrors.length > 0 && "input-error"}`}
            />
            {emailErrors.length > 0 && (
              <span className="input-helpers-error">{emailErrors[0]}</span>
            )}

            <textarea
              value={message}
              onChange={onInputChange}
              onBlur={() => handleBlur("message")}
              name="message"
              placeholder="Escribe tu mensaje aqui"
              className={`${messageErrors.length > 0 && "input-error"}`}
            />
            {messageErrors.length > 0 && (
              <span className="input-helpers-error">{messageErrors[0]}</span>
            )}

            {
              <button>
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
  );
}
