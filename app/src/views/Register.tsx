import { useRef, useEffect, useState } from "react";
import { useInput } from "../hooks/useInput";
import videoHome from "../assets/videos/videoHome.mp4";
import { UserValidations } from "../helpers/userValidations";
import { UserValidationErrors } from "../helpers/userValidations";
import axios from "axios";

export function Register() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, [videoRef]);

  const name = useInput();
  const lastname = useInput();
  const email = useInput();
  const password = useInput();
  const confirmPassword = useInput();

  const [nameErrors, setNameErrors] = useState<string[]>([]);
  const [lastNameErrors, setLastnameErrors] = useState<string[]>([]);
  const [emailErrors, setEmailErrors] = useState<string[]>([]);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

  const handleBlurName = () => {
    const [errors, dataValidation] = UserValidations.create({
      name: name.value,
      lastname: lastname.value,
      email: email.value,
      password: password.value,
    });

    if (errors) {
      errors.map((error) => {
        if (Object.keys(error).includes("name")) {
          return setNameErrors((prevErrors) => [...prevErrors, error["name"]]);
        }
      });

      !errors.find((error) => {
        return Object.keys(error).includes("name");
      }) && setNameErrors([]);

      return;
    }
  };



  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const [errors, dataValidation] = UserValidations.create({
      name: name.value,
      lastname: lastname.value,
      email: email.value,
      password: password.value,
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

      console.log(errors);

      return;
    }

    if (password.value !== confirmPassword.value) {
      alert("Error en la confirmación de password");
      return;
    }

    axios
      .post("http://localhost:3000/api/v1/user/register", {
        name: name.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
      })
      .then((response) => {
        console.log(response.data);
        name.onChange(null);
        lastname.onChange(null);
        email.onChange(null);
        password.onChange(null);
        confirmPassword.onChange(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="login-container">
      <video autoPlay muted loop ref={videoRef}>
        <source src={videoHome} type="video/mp4" />
        Ingresa tus datos para registrarte en lovelia..
      </video>
      <form onSubmit={handleSubmit} className="login-form" action="">
        <h3>Crea tu cuenta</h3>
        <h6>Si ya estás registrado en lovelia, inicia sesión aquí:</h6>
        <input
          onBlur={handleBlurName}
          className={`${nameErrors.length > 0 && "input-error"}`}
          {...name}
          type="text"
          placeholder="Nombre"
        />
        <input
          className={`${lastNameErrors.length > 0 && "input-error"}`}
          {...lastname}
          type="text"
          placeholder="Apellido"
        />
        <input
          className={`${emailErrors.length > 0 && "input-error"}`}
          {...email}
          type="email"
          placeholder="Dirección de correo electrónico"
        />
        <input
          className={`${passwordErrors.length > 0 && "input-error"}`}
          {...password}
          type="password"
          placeholder="Contraseña"
        />
        <input
          {...confirmPassword}
          type="password"
          placeholder="Confirmar contraseña"
        />
        <div>
          <div className="login-recibir-info-container">
            <input type="checkbox" />
            <p>
              También me gustaría recibir información promocional sobre los
              productos lovelia.
            </p>
          </div>

          <p>
            ¿Ya tienes una cuenta?, <strong>Haz click aquí.</strong>
          </p>
        </div>
        <button type="submit">ACCEDER</button>
      </form>
    </section>
  );
}
