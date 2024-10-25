import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { EyeClose, EyeOpen } from "../../assets/icons/icons";
import { envs } from "../../config/envs";
import { UserContext } from "../../context/userContext";
import { useForm } from "../../hooks/useForm";
import { BackgroundVideo } from "../../ui/components";
import { LoginValidations } from "../helpers/loginValidations";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //is loading

  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const { setEmail, setId, setName, setToken, setLastname, setSuscription } =
    useContext(UserContext);

  const navigatge = useNavigate();

  const linkToRegister = () => {
    navigatge("/register");
  };
  const linkToForgetPassword = () => {
    navigatge("/forget-password");
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
  const [errorsFromAPI, setErrorsFromAPI] = useState<string>("");

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

    const [errors] = LoginValidations.create({
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

    setIsLoading(true);

    //Get fcmToken from local storage
    const fcmToken = localStorage.getItem("fcmToken");

    axios
      .post(
        `${envs.API_DOMAIN}/api/v1/user/login`,
        {
          email: email,
          password: password,
          fcmToken,
        },
        { withCredentials: true }
      )
      .then(({ data }) => {
        console.log(data);
        setEmail(data.email);
        setId(data.id);
        setToken(data.token);
        setName(data.name);
        setLastname(data.lastname);
        setSuscription(data.subscription);
        localStorage.setItem(
          "subscriptionActive",
          JSON.stringify(data.subscription ? true : false)
        );
        sessionStorage.setItem("userInfo", JSON.stringify( data.email ));
        onResetForm();
        setIsLoading(false);
        navigatge("/profile");
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setErrorsFromAPI(error.response.data.error);
      });
  };

  return (
    <section className="login-container efectoReveal">
      <BackgroundVideo />
      <form onSubmit={handleSubmit} className="login-form" action="">
        <h3>MI CUENTA</h3>
        <h4>Iniciar sesión</h4>
        <h6>
          Si aún no tienes una cuenta,{" "}
          <strong onClick={linkToRegister}>Haz click aquí.</strong>
        </h6>
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
        <div className="login-button-container">
          <p onClick={linkToForgetPassword}>¿Has olvidado tu contraseña?</p>

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
            "ACCEDER"
          )}
        </button>
      </form>
    </section>
  );
}

export default Login;
