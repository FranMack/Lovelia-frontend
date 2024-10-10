import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { EyeClose, EyeOpen } from "../../assets/icons/icons";
import { envs } from "../../config/envs";
import { NewPasswordValidation } from "../helpers/newPasswordValidations";
import { useForm } from "../../hooks/useForm";
import { AuthPopUp } from "../components/AuthPopUp";
import { BackgroundVideo } from "../../ui/components";

 function NewPassword() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const token = useLocation().search.split("=")[1];

  const navigate = useNavigate();
  const linkToLogin = () => {
    navigate("/login");
  };

  const popUpInfo = {
    title: "Listo!",
    text: "Su contraseña há sido restablecida",
    handlePopUp: linkToLogin,
    buttonText: "INICIAR SESIÓN",
  };

  //is loading

  const [isLoading, setIsLoading] = useState(false);
  const [showPopUp, setShowPupUp] = useState<boolean>(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const initialForm = {
    password: "",
    confirmPassword: "",
  };

  //validation erros
  const { formState, onInputChange, onResetForm } = useForm(initialForm);
  const { password, confirmPassword } = formState;
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [confirmPasswordError, setConfirmPasswordError] =
    useState<boolean>(false);

  //other errors
  const [errorsFromAPI, setErrorsFromAPI] = useState<string>("");

  const handleBlur = (field: string) => {
    const [errors] = NewPasswordValidation.create(formState);
    const fieldError = errors?.find((error) =>
      Object.keys(error).includes(field)
    );
    switch (field) {
      case "password":
        setPasswordErrors(fieldError ? [fieldError[field]] : []);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const [errors] = NewPasswordValidation.create({
      password: password,
    });

    if (formState.password === formState.confirmPassword) {
      setConfirmPasswordError(false);
    }

    if (errors) {
      errors.map((error) => {
        if (Object.keys(error).includes("password")) {
          return setPasswordErrors((prevErrors) => [
            ...prevErrors,
            error["password"],
          ]);
        }
      });

      !errors.find((error) => {
        return Object.keys(error).includes("password");
      }) && setPasswordErrors([]);

      return;
    }

    if (formState.password !== formState.confirmPassword) {
      setConfirmPasswordError(true);
      return;
    }

    setIsLoading(true);

    axios
      .patch(
        `${envs.API_DOMAIN}/api/v1/user/changePassword`,
        {
          token: token,
          password: password,
        },
        { withCredentials: true }
      )
      .then(({ data }) => {
        console.log(data);
        onResetForm();
        setIsLoading(false);
        setShowPupUp(true);
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
      {showPopUp ? (
        <AuthPopUp {...popUpInfo} />
      ) : (
        <form onSubmit={handleSubmit} className="login-form" action="">
          <h3>NUEVA CONTRASEÑA</h3>

          <h6>
            La contraseña debe tener como mínimo 8 caracteres, y debe contener
            letras y números
          </h6>

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
              placeholder="Nueva contraseña"
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

          <button type="submit">
            {isLoading ? (
              <BeatLoader color={"white"} speedMultiplier={0.4} />
            ) : (
              "RESTABLECER CONTRASEÑA"
            )}
          </button>
        </form>
      )}
    </section>
  );
}

export default NewPassword