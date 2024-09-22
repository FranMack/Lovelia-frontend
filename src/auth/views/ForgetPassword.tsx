import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { ForgetPasswordValidations } from "../helpers/forgetPasswordValidations";
import { useForm } from "../../hooks/useForm";
import { AuthPopUp } from "../components/AuthPopUp";
import { envs } from "../../config";
import { BackgroundVideo } from "../../ui/components";

export function ForgetPassword() {
  const navigate = useNavigate();
  const linkToLogin = () => {
    navigate("/login");
  };

  const popUpInfo = {
    title: "Listo!",
    text: "Te enviamos un correo amparo.bernabé@gmail.com. Por favor chequea tu bandeja de entrada y seguí las instrucciones.",
    handlePopUp: linkToLogin,
    buttonText: "INICIAR SESIÓN",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //is loading

  const [isLoading, setIsLoading] = useState(false);
  const [popUp, setPopUp] = useState<boolean>(false);

  const initialForm = {
    email: "",
    password: "",
  };

  //validation erros
  const { formState, onInputChange, onResetForm } = useForm(initialForm);
  const { email, password } = formState;
  const [emailErrors, setEmailErrors] = useState<string[]>([]);

  //other errors
  const [errorsFromAPI, setErrorsFromAPI] = useState<string>("");

  const handleBlur = (field: string) => {
    const [errors] = ForgetPasswordValidations.create(formState);
    const fieldError = errors?.find((error) =>
      Object.keys(error).includes(field)
    );
    switch (field) {
      case "email":
        setEmailErrors(fieldError ? [fieldError[field]] : []);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const [errors] = ForgetPasswordValidations.create({
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
      });

      !errors.find((error) => {
        return Object.keys(error).includes("email");
      }) && setEmailErrors([]);

      return;
    }

    setIsLoading(true);

    axios
      .post(
        `${envs.API_DOMAIN}/api/v1/user/forgetPassword`,
        {
          email: email,
        },
        { withCredentials: true }
      )
      .then(({ data }) => {
        console.log(data);
        setPopUp(true);
        onResetForm();
        setIsLoading(false);
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

      {popUp ? (
        <AuthPopUp {...popUpInfo} />
      ) : (
        <form onSubmit={handleSubmit} className="login-form" action="">
          <h3>¿OLVIDASTE TU CONTRASEÑA?</h3>
          <h6>
            Ingresá la dirección de correo con la que te registraste a Lovelia y
            te enviaremos las instrucciones para restablecerla.
          </h6>
          <input
            value={email}
            onChange={onInputChange}
            onBlur={() => handleBlur("email")}
            name="email"
            type="email"
            placeholder="Dirección de correo electrónico"
            className={`${
              (emailErrors.length > 0 || errorsFromAPI) && "input-error"
            }`}
          />
          {emailErrors.length > 0 && (
            <span className="input-helpers-error">{emailErrors[0]}</span>
          )}

          <button type="submit">
            {isLoading ? (
              <BeatLoader color={"white"} speedMultiplier={0.4} />
            ) : (
              "CONFIRMAR"
            )}
          </button>

          <button onClick={linkToLogin} className="forgetpassword-login-button">
            INICIAR SESIÓN
          </button>
        </form>
      )}
    </section>
  );
}
