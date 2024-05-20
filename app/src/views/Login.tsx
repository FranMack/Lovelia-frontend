import { useRef, useEffect, useState } from "react";
import videoHome from "../assets/videos/videoHome.mp4";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { LoginValidations } from "../helpers/loginValidations";
import axios from "axios";
export function Login() {
  window.scrollTo(0, 0);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, [videoRef]);

  const navigatge = useNavigate();

  const linkToRegister = () => {
    navigatge("/register");
  };

  const initialForm = {
    email: "",
    password: "",
  };

  //validation erros
  const { formState, onInputChange, onResetForm } = useForm(initialForm);
  const { email, password } = formState;
  const [emailErrors, setEmailErrors] = useState<string[]>([]);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

       //other errors
       const [errorsFromAPI,setErrorsFromAPI]=useState<string>("")

  const handleBlur = (field: string) => {
    const [errors] = LoginValidations.create(formState);
    const fieldError = errors?.find((error) =>
      Object.keys(error).includes(field)
    );
    switch (field) {
      case "email":
        setEmailErrors(fieldError ? [fieldError[field]] : []);
        break;
      case "password":
        setPasswordErrors(fieldError ? [fieldError[field]] : []);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const [errors, dataValidation] = LoginValidations.create({
      email: email,
      password: password,
    });

    if (errors) {
      errors.map((error) => {
        if (Object.keys(error).includes("email")) {
          return setEmailErrors((prevErrors) => [
            ...prevErrors,
            error["email"],
          ]);
        }
        if (Object.keys(error).includes("password")) {
          return setPasswordErrors((prevErrors) => [
            ...prevErrors,
            error["password"],
          ]);
        }
      });

      !errors.find((error) => {
        return Object.keys(error).includes("email");
      }) && setEmailErrors([]);
      !errors.find((error) => {
        return Object.keys(error).includes("password");
      }) && setPasswordErrors([]);

      return;
    }

    axios
      .post("http://localhost:3000/api/v1/user/login", {
        email: email,
        password: password,
      },{withCredentials:true})
      .then((response) => {
        console.log(response);
        onResetForm();
        navigatge("/");
      })
      .catch((error) => {
        console.log(error);
        setErrorsFromAPI(error.response.data.error)
      });
  };

  return (
    <section className="login-container">
      <video autoPlay muted loop ref={videoRef}>
        <source src={videoHome} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <form
        onSubmit={handleSubmit}
        className="login-form"
        action=""
      >
        <h3>Mi cuenta</h3>
        <h6>Si ya estás registrado en lovelia, inicia sesión aquí:</h6>
        <input
          value={email}
          onChange={onInputChange}
          onBlur={() => handleBlur("email")}
          name="email"
          type="email"
          placeholder="Dirección de correo electrónico"
          className={`${emailErrors.length > 0 || errorsFromAPI && "input-error"}`}
        />
        {emailErrors.length > 0  && (
          <span className="input-helpers-error">{emailErrors[0]}</span>
        )}
        <input
          value={password}
          onChange={onInputChange}
          onBlur={() => handleBlur("password")}
          name="password"
          type="password"
          placeholder="Contraseña"
          className={`${passwordErrors.length > 0 || errorsFromAPI && "input-error"}`}
        />
        {passwordErrors.length > 0 && (
          <span className="input-helpers-error">{passwordErrors[0]}</span>
        )}
        <div className="login-button-container">
          <p>¿Has olvidado tu contraseña?</p>
          <p>
            Si aún no tienes una cuenta,{" "}
            <strong onClick={linkToRegister}>Haz click aquí.</strong>
          </p>
          {errorsFromAPI && (
          <span className="input-helpers-error api-errors"
          
          >{errorsFromAPI}</span>
        )}
        </div>
        
        <button>ACCEDER</button>
      </form>
    </section>
  );
}
