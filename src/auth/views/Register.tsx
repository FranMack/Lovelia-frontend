import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import { useForm } from "../..//hooks/useForm";
import { EyeClose, EyeOpen } from "../../assets/icons/icons";
import { envs } from "../../config";
import { BackgroundVideo } from "../../ui/components";
import { RegisterValidation } from "../helpers/registerValidations";
import { Button } from "../../ui/components/Button";

 function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //is loading

  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const [openMessage, setOpenMessage] = useState<boolean>(false);
  const handleMessage = () => {
    setOpenMessage(!openMessage);
  };

  const navigatge = useNavigate();

  const linkToLogin = () => {
    handleMessage();
    navigatge("/login");
  };

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
  const [errorsFromAPI, setErrorsFromAPI] = useState<string>("");

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const [errors] = RegisterValidation.create({
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

      return;
    }

    setIsLoading(true);

    axios
      .post(`${envs.API_DOMAIN}/api/v1/user/register`, {
        name: name,
        lastname: lastname,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        onResetForm();
        setIsLoading(false);
        window.scrollTo(0, 0);
        handleMessage();
      })

      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setErrorsFromAPI(error.response.data.error);
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
    <section className="login-container efectoReveal">
      <BackgroundVideo />

      {openMessage && (
        <div className="login-message-container efectoReveal">
          <h4>Su cuenta ha sido registrada.</h4>
          <p>Recibirás un mail que te permitirá activarla</p>
          <Button text="Continuar" onClick={linkToLogin} />
        </div>
      )}

      {!openMessage && (
        <form onSubmit={handleSubmit} className="login-form" action="">
          <h3>CREA TU CUENTA</h3>
          <h4>Ingresa tus datos para registrarte en lovelia</h4>
          <h6>
            Si ya estás registrado en lovelia,{" "}
            <strong onClick={linkToLogin}>Haz click aquí</strong>
          </h6>
          <label htmlFor="name">Nombre</label>
          <input
            value={name}
            onChange={onInputChange}
            onBlur={() => handleBlur("name")}
            name="name"
            type="text"
            placeholder="Ej. Jonh"
            className={`${
              (nameErrors.length > 0 || errorsFromAPI) && "input-error"
            }`}
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
            className={`${
              (lastNameErrors.length > 0 || errorsFromAPI) && "input-error"
            }`}
          />
          {lastNameErrors.length > 0 && (
            <span className="input-helpers-error">{lastNameErrors[0]}</span>
          )}
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={onInputChange}
            onBlur={() => handleBlur("email")}
            name="email"
            type="email"
            placeholder="ejemplo@gmail.com"
            className={`${
              (emailErrors.length > 0 || errorsFromAPI) && "input-error"
            }`}
          />
          {emailErrors.length > 0 && (
            <span className="input-helpers-error">{emailErrors[0]}</span>
          )}
          <label htmlFor="password">Contraseña</label>
          <div
            className={`password-input-wrapper ${
              (passwordErrors.length > 0 || errorsFromAPI) && "input-error"
            }`}
          >
            <input
              value={password}
              onChange={onInputChange}
              onBlur={() => handleBlur("password")}
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
            />

            <span onClick={handleShowPassword}>
              {showPassword ? (
                <EyeOpen color="#662A80" />
              ) : (
                <EyeClose color="#662A80" />
              )}
            </span>
          </div>
          {passwordErrors.length > 0 && (
            <span className="input-helpers-error">{passwordErrors[0]}</span>
          )}
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <div
            className={`password-input-wrapper ${
              (passwordErrors.length > 0 || errorsFromAPI) && "input-error"
            }`}
          >
            <input
              value={confirmPassword}
              onChange={onInputChange}
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirmar contraseña"
              className={`${
                (confirmPasswordError || errorsFromAPI) && "input-error"
              }`}
            />
            <span onClick={handleShowConfirmPassword}>
              {showConfirmPassword ? (
                <EyeOpen color="#662A80" />
              ) : (
                <EyeClose color="#662A80" />
              )}
            </span>
          </div>
          {confirmPasswordError && (
            <span className="input-helpers-error">
              {"La confirmación de contraseña es incorrecta"}
            </span>
          )}
          <div className="login-button-container">
            <div className="login-recibir-info-container">
              <input type="checkbox" />
              <p>
                Me encantaría recibir promociones, historias e información de
                Lovelia
              </p>
            </div>

            {errorsFromAPI && (
              <span className="input-helpers-error api-errors">
                {errorsFromAPI}
              </span>
            )}
          </div>
          <button type="submit">
            {isLoading ? (
              <BeatLoader color={"white"} speedMultiplier={0.4} />
            ) : (
              "REGISTRARME"
            )}
          </button>
        </form>
      )}
    </section>
  );
}

export default Register;