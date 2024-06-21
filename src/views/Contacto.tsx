import { useRef, useEffect, useState } from "react";
import videoHome from "../assets/videos/videoHome.mp4";
import { ContactValidation } from "../helpers/contactValidation";
import { useForm } from "../hooks/useForm";
import axios from "axios";
import { PopUp } from "../commons/PopUp";
import { PopUpOptions } from "../commons/PopUp";
import BeatLoader from "react-spinners/BeatLoader";
import { envs } from "../config/envs";
export function Contacto() {
  window.scrollTo(0, 0);

    //is loading

    const [isLoading, setIsLoading] = useState(false);

  const [openPopUp, setOpenPopUp] = useState<boolean>(false);
  const handlePopUp=()=>{
    setOpenPopUp(!openPopUp)
  }

  const popUpProps:PopUpOptions={
    title:"¡Gracias por tu consulta!",
    text:"Nos comunicaremos de regreso pronto!",
    buttonText:"Continuar",
    handlePopUp:handlePopUp

  }

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.1;
    }
  }, [videoRef]);

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



    const [errors, dataValidation] = ContactValidation.create({
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

    setIsLoading(true)

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
        setIsLoading(false)
        handlePopUp()
      })
      .catch((error) => {
        setIsLoading(false)
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
    <section className={openPopUp ? "login-container modalOpen-styles":"login-container efectoReveal"}>
     {openPopUp && <PopUp {...popUpProps}/>}
      <video autoPlay muted loop ref={videoRef}>
        <source src={videoHome} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <form onSubmit={handleSubmit} className="login-form" action="">
        <h3>Habla con nosotros</h3>
        <h6>Completa el formulario para enviar tu consulta.</h6>

      <label htmlFor="name">Nombre</label>
        <input
          value={name}
          onChange={onInputChange}
          onBlur={() => handleBlur("name")}
          name="name"
          type="text"
          placeholder="Ej. John Doe"
          className={`${nameErrors.length > 0 && "input-error"}`}
        />
        {nameErrors.length > 0 && (
          <span className="input-helpers-error">{nameErrors[0]}</span>
        )}
        <label htmlFor="subject">Asunto</label>
        <input
          value={subject}
          onChange={onInputChange}
          onBlur={() => handleBlur("subject")}
          name="subject"
          type="text"
          placeholder="Ej. Consulta"
          className={`${subjectErrors.length > 0 && "input-error"}`}
        />
        {subjectErrors.length > 0 && (
          <span className="input-helpers-error">{subjectErrors[0]}</span>
        )}
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={onInputChange}
          onBlur={() => handleBlur("email")}
          name="email"
          type="email"
          placeholder="ejemplo@gmail.com"
          className={`${emailErrors.length > 0 && "input-error"}`}
        />
        {emailErrors.length > 0 && (
          <span className="input-helpers-error">{emailErrors[0]}</span>
        )}

      <label htmlFor="message">Mensaje</label>
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

      
        {<button>{isLoading?  <BeatLoader color={"white"} speedMultiplier={0.4} />: "ENVIAR"}</button>}
      </form>
    </section>
  );
}
