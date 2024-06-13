import { useRef, useEffect, useState } from "react";
import videoHome from "../assets/videos/videoHome.mp4";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { RegisterValidation } from "../helpers/registerValidation";
import axios from "axios";
import { PopUp, PopUpOptions } from "../commons/PopUp";
import BeatLoader from "react-spinners/BeatLoader";
import { EyeClose, EyeOpen } from "../assets/images/icons/icons";

export function Register() {
 // window.scrollTo(0, 0);

   //is loading

   const [isLoading, setIsLoading] = useState(false);

   const[showPassword,setShowPassword]=useState(false)
   const handleShowPassword=()=>{
     setShowPassword(!showPassword)
   }

   const[showConfirmPassword,setShowConfirmPassword]=useState(false)
   const handleShowConfirmPassword=()=>{
    setShowConfirmPassword(!showConfirmPassword)
   }


  const [openPopUp, setOpenPopUp] = useState<boolean>(false);
  const handlePopUp=()=>{
    setOpenPopUp(!openPopUp)
  }

  const popUpProps:PopUpOptions={
    title:"¡Tu cunta ha sido registrada!",
    text:"Recivirás un email que te permetira activar tu cuenta",
    buttonText:"Continuar",
    handlePopUp:handlePopUp

  }

  const navigatge = useNavigate();

  const linkToLogin = () => {
    navigatge("/login");
  };

  

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.1;
    }
  }, [videoRef]);

  const initialForm = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { formState, onInputChange, onResetForm } = useForm(initialForm);
  const { name, lastname, email, password, confirmPassword } = formState;

  //validation errors
  const [nameErrors, setNameErrors] = useState<string[]>([]);
  const [lastNameErrors, setLastnameErrors] = useState<string[]>([]);
  const [emailErrors, setEmailErrors] = useState<string[]>([]);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [confirmPasswordError, setConfirmPasswordError] =
    useState<boolean>(false);

     //other errors
  const [errorsFromAPI,setErrorsFromAPI]=useState<string>("")

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const [errors, dataValidation] = RegisterValidation.create({
      name: name,
      lastname: lastname,
      email: email,
      password: password,
    });

    if (errors) {
      errors.map((error) => {
        if (Object.keys(error).includes("name")) {
          return setNameErrors((prevErrors) => [...prevErrors, error["name"]]);
        }
        if (Object.keys(error).includes("lastname")) {
          return setLastnameErrors((prevErrors) => [
            ...prevErrors,
            error["lastname"],
          ]);
        }
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
        return Object.keys(error).includes("name");
      }) && setNameErrors([]);
      !errors.find((error) => {
        return Object.keys(error).includes("lastname");
      }) && setLastnameErrors([]);
      !errors.find((error) => {
        return Object.keys(error).includes("email");
      }) && setEmailErrors([]);
      !errors.find((error) => {
        return Object.keys(error).includes("password");
      }) && setPasswordErrors([]);

      if (formState.password !== formState.confirmPassword) {
        setConfirmPasswordError(true);
      }

      return;
    }
    
    if (formState.password !== formState.confirmPassword) {
      setConfirmPasswordError(true);

      return
    }

    setIsLoading(true)


    axios
      .post("http://localhost:3000/api/v1/user/register", {
        name: name,
        lastname: lastname,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        onResetForm();
        setIsLoading(false)
        handlePopUp()
      })
      
      .catch((error) => {
        console.log(error);
        setIsLoading(false)
        setErrorsFromAPI(error.response.data.error)
      });
  };

  const handleBlur = (field: string) => {
    const [errors] = RegisterValidation.create(formState);
    const fieldError = errors?.find((error) =>
      Object.keys(error).includes(field)
    );
    switch (field) {
      case "name":
        setNameErrors(fieldError ? [fieldError[field]] : []);
        break;
      case "lastname":
        setLastnameErrors(fieldError ? [fieldError[field]] : []);
        break;
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

  return (
    <section className={openPopUp ? "login-container modalOpen-styles":"login-container efectoReveal"}>
    {openPopUp && <PopUp {...popUpProps} handleNavigate={linkToLogin}/>}
      <video autoPlay muted loop ref={videoRef}>
        <source src={videoHome} type="video/mp4" />
        Ingresa tus datos para registrarte en lovelia..
      </video>
      <form onSubmit={handleSubmit} className="login-form" action="">
        <h3>Crea tu cuenta</h3>
        <h6>Si ya estás registrado en lovelia, inicia sesión aquí:</h6>
        <label htmlFor="name">Nombre</label>
        <input
          value={name}
          onChange={onInputChange}
          onBlur={() => handleBlur("name")}
          name="name"
          type="text"
          placeholder="Ej. Jonh"
          className={`${(nameErrors.length > 0 || errorsFromAPI) && "input-error"}`}
        />
        {nameErrors.length > 0 && (
          <span className="input-helpers-error">{nameErrors[0]}</span>
        )}
        <label htmlFor="lastname">Apellido</label>
        <input
          value={lastname}
          onChange={onInputChange}
          onBlur={() => handleBlur("lastname")}
          name="lastname"
          type="text"
          placeholder="Ej. Doe"
          className={`${(lastNameErrors.length > 0 || errorsFromAPI) && "input-error"}`}
        />
        {lastNameErrors.length > 0 && (
          <span className="input-helpers-error">{lastNameErrors[0]}</span>
        )}
        <label htmlFor="email">Apellido</label>
        <input
          value={email}
          onChange={onInputChange}
          onBlur={() => handleBlur("email")}
          name="email"
          type="email"
          placeholder="ejemplo@gmail.com"
          className={`${(emailErrors.length > 0 || errorsFromAPI) && "input-error"}`}
        />
        {emailErrors.length > 0 && (
          <span className="input-helpers-error">{emailErrors[0]}</span>
        )}
        <label htmlFor="password">Contraseña</label>
        <div   className={`password-input-wrapper ${(passwordErrors.length > 0 || errorsFromAPI) && "input-error"}`}>
        <input
          value={password}
          onChange={onInputChange}
          onBlur={() => handleBlur("password")}
          name="password"
          type={showPassword ? "text":"password"}
          placeholder="Contraseña"
        
        />
        
        <span onClick={handleShowPassword}>{ showPassword ? <EyeOpen/>:<EyeClose/>}</span>
        </div>
        {passwordErrors.length > 0 && (
          <span className="input-helpers-error">{passwordErrors[0]}</span>
        )}
        <label htmlFor="confirmPassword">Confirmar contraseña</label>
        <div   className={`password-input-wrapper ${(passwordErrors.length > 0 || errorsFromAPI) && "input-error"}`}>
        <input
          value={confirmPassword}
          onChange={onInputChange}
          name="confirmPassword"
          type={showConfirmPassword ? "text":"password"}
          placeholder="Confirmar contraseña"
          className={`${(confirmPasswordError || errorsFromAPI) && "input-error"}`}
        />
        <span onClick={handleShowConfirmPassword}>{ showConfirmPassword ? <EyeOpen/>:<EyeClose/>}</span>
        </div>
        {confirmPasswordError && (
          <span className="input-helpers-error">
            {"Wrong confirm password"}
          </span>
        )}
        <div className="login-button-container">
          <div className="login-recibir-info-container">
            <input type="checkbox" />
            <p>
              También me gustaría recibir información promocional sobre los
              productos lovelia.
            </p>
          </div>

          <p>
            ¿Ya tienes una cuenta?,{" "}
            <strong onClick={linkToLogin}>Haz click aquí.</strong>
          </p>
          {errorsFromAPI && (
          <span className="input-helpers-error api-errors"
          
          >{errorsFromAPI}</span>
        )}
        </div>
        <button type="submit">{isLoading?  <BeatLoader color={"white"} speedMultiplier={0.4} /> : "REGISTRARME"}</button>
      </form>
    </section>
  );
}
