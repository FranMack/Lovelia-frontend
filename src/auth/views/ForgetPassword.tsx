import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import * as Yup from "yup";
import { envs } from "../../config";
import { BackgroundVideo } from "../../ui/components";
import { AuthPopUp } from "../components/AuthPopUp";


 function ForgetPassword() {
  const navigate = useNavigate();
  const linkToLogin = () => {
    navigate("/login");
  };

  const popUpInfo = {
    title: "Listo!",
    text: `Te enviamos un correo para que puedas restaurar tu contraseña. Por favor chequea tu bandeja de entrada y seguí las instrucciones.`,
    handlePopUp: linkToLogin,
    buttonText: "INICIAR SESIÓN",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //is loading

  const [isLoading, setIsLoading] = useState(false);
  const [popUp, setPopUp] = useState<boolean>(false);


  //other errors
  const [errorsFromAPI, setErrorsFromAPI] = useState<string>("");


 


  const singUpForm = useFormik({
    initialValues: {
     
      email: "",
    },
    validationSchema: Yup.object({
    email: Yup.string().required("Campo requerido").email("Email no valido"),

    }),

    onSubmit: (values) => {

      if(isLoading){
        return
      }

      axios
      .post(
        `${envs.API_DOMAIN}/api/v1/user/forgetPassword`,
        {
          email:values.email,
        },
        { withCredentials: true }
      )
      .then(({ data }) => {
        console.log(data);
        setPopUp(true);
        singUpForm.resetForm()
        setIsLoading(false);
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

      {popUp ? (
        <AuthPopUp {...popUpInfo} />
      ) : (
        <form onSubmit={singUpForm.handleSubmit} className="login-form" action="">
          <h3>¿OLVIDASTE TU CONTRASEÑA?</h3>
          <h6>
            Ingresá la dirección de correo con la que te registraste a Lovelia y
            te enviaremos las instrucciones para restablecerla.
          </h6>
          <input
        value={singUpForm.values.email}
        onChange={singUpForm.handleChange}
        onBlur={singUpForm.handleBlur}
            name="email"
            type="email"
            placeholder="Dirección de correo electrónico"
            className={singUpForm.touched.email &&
              singUpForm.errors.email ||errorsFromAPI ? "input-error":""}
          />
          { singUpForm.touched.email &&
              singUpForm.errors.email && (
                <>
            <span className="input-helpers-error">{singUpForm.errors.email}</span>
            <br/>
            </>
          )}

{errorsFromAPI && (
  <>
              <br/>
              <span className="input-helpers-error api-errors">
                {errorsFromAPI}
              </span>
              <br/>
              </>
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

export default ForgetPassword;