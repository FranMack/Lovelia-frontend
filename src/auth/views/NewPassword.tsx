import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import * as Yup from "yup";
import { EyeClose, EyeOpen } from "../../assets/icons/icons";
import { envs } from "../../config/envs";
import { BackgroundVideo } from "../../ui/components";
import { AuthPopUp } from "../components/AuthPopUp";

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

  //validation erros

  const [confirmPasswordError, setConfirmPasswordError] =
    useState<boolean>(false);

  //other errors
  const [errorsFromAPI, setErrorsFromAPI] = useState<string>("");

  const singUpForm = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "El password debe contener al menos 8 caracteres")
        .matches(
          /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
          "El password debe contener al menos un caracter especial"
        )
        .matches(/\d/, "El password debe contener al menos un número")
        .matches(
          /[a-z]/,
          "El password debe contener al menos una letra en minúscula"
        )
        .matches(
          /[A-Z]/,
          "El password debe contener al menos una letra en mayúscula"
        )
        .required("Campo requerido"),

      confirmPassword: Yup.string().required("Campo requerido"),
    }),

    onSubmit: (values) => {
      if (values.confirmPassword !== values.password) {
        setConfirmPasswordError(true);

        return;
      }

      if (isLoading) {
        return;
      }

      axios
        .patch(
          `${envs.API_DOMAIN}/api/v1/user/changePassword`,
          {
            token: token,
            password: values.password,
          },
          { withCredentials: true }
        )
        .then(({ data }) => {
          console.log(data);
          singUpForm.resetForm();
          setIsLoading(false);
          setShowPupUp(true);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
          setErrorsFromAPI(error.response.data.error);
        });
    },
  });

  return (
    <section className="login-container efectoReveal">
      <BackgroundVideo />
      {showPopUp ? (
        <AuthPopUp {...popUpInfo} />
      ) : (
        <form
          onSubmit={singUpForm.handleSubmit}
          className="login-form"
          action=""
        >
          <h3>NUEVA CONTRASEÑA</h3>

          <h6>
            La contraseña debe tener como mínimo 8 caracteres, y debe contener
            letras y números
          </h6>

          <div
            className={` ${
              (singUpForm.touched.password && singUpForm.errors.password) ||
              errorsFromAPI
                ? "password-input-wrapper-error "
                : "password-input-wrapper"
            }`}
          >
            <input
              value={singUpForm.values.password}
              onChange={singUpForm.handleChange}
              onBlur={singUpForm.handleBlur}
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
          {singUpForm.touched.password && singUpForm.errors.password && (
            <span className="input-helpers-error">
              {singUpForm.errors.password}
            </span>
          )}

          <div
            className={` ${
              (singUpForm.touched.confirmPassword &&
                singUpForm.errors.confirmPassword) ||
              errorsFromAPI ||
              confirmPasswordError
                ? "password-input-wrapper-error "
                : "password-input-wrapper"
            }`}
          >
            <input
              value={singUpForm.values.confirmPassword}
              onChange={singUpForm.handleChange}
              onBlur={singUpForm.handleBlur}
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirmar contraseña"
            />
            <span onClick={handleShowConfirmPassword}>
              {showConfirmPassword ? (
                <EyeOpen color="#662A80" />
              ) : (
                <EyeClose color="#662A80" />
              )}
            </span>
          </div>
          {singUpForm.touched.confirmPassword &&
          singUpForm.errors.confirmPassword ? (
            <span className="input-helpers-error">
              {singUpForm.errors.confirmPassword}
            </span>
          ) : !singUpForm.errors.confirmPassword && confirmPasswordError ? (
            <span className="input-helpers-error">
              {"La confirmación de contraseña es incorrecta"}
            </span>
          ) : null}

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

export default NewPassword;
