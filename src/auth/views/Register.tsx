import axios from 'axios';
import {useFormik} from 'formik';
import {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import * as Yup from 'yup';
import {EyeClose, EyeOpen} from '../../assets/icons/icons';
import {envs} from '../../config';
import {ShopingCartContext, UserContext} from '../../context';
import {TimerContext} from '../../context/timerContext';
import {BackgroundVideo} from '../../ui/components';
import {Button} from '../../ui/components/Button';

function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    setEmail,
    setId,
    setName,
    setToken,
    setLastname,
    setSuscription,
    setTalismanActivated,
  } = useContext(UserContext);

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
    navigatge('/login');
  };

  //validation errors

  const [confirmPasswordError, setConfirmPasswordError] =
    useState<boolean>(false);

  //other errors
  const [errorsFromAPI, setErrorsFromAPI] = useState<string>('');

  const {activatedAlarm} = useContext(TimerContext);
  const {shopingCartOpen} = useContext(ShopingCartContext);

  const [confirmedAcount, setConfirmedAcount] = useState<boolean>(false);

  const singUpForm = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Campo requerido'),
      lastname: Yup.string().required('Campo requerido'),
      email: Yup.string().required('Campo requerido').email('Email no valido'),
      password: Yup.string()
        .min(8, 'El password debe contener al menos 8 caracteres')
        .matches(
          /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
          'El password debe contener al menos un caracter especial',
        )
        .matches(/\d/, 'El password debe contener al menos un número')
        .matches(
          /[a-z]/,
          'El password debe contener al menos una letra en minúscula',
        )
        .matches(
          /[A-Z]/,
          'El password debe contener al menos una letra en mayúscula',
        )
        .required('Campo requerido'),

      confirmPassword: Yup.string().required('Campo requerido'),
    }),

    onSubmit: values => {
      console.log('Wrong confirmed password');

      if (isLoading) {
        return;
      }

      if (values.confirmPassword !== values.password) {
        console.log('Wrong confirmed password');
        setConfirmPasswordError(true);

        return;
      }

      setIsLoading(true);

      axios
        .post(`${envs.API_DOMAIN}/api/v1/user/register`, {
          name: values.name,
          lastname: values.lastname,
          email: values.email,
          password: values.password,
        })
        .then(response => {
          console.log(response);
          singUpForm.resetForm();
          setIsLoading(false);
          window.scrollTo(0, 0);
          if (response.data.acountConfirmed) {
            setConfirmedAcount(true);

            // If user comes with confirmedAccount = true, we redirect to login but we need to redirect to /checkout/digital

            axios
              .post(
                `${envs.API_DOMAIN}/api/v1/user/login`,
                {
                  email: values.email,
                  password: values.password,
                },
                {withCredentials: true},
              )
              .then(({data}) => {
                setEmail(data.email);
                setId(data.id);
                setToken(data.token);
                setName(data.name);
                setLastname(data.lastname);
                setSuscription(data.subscription);
                setTalismanActivated(data.talismanActivated);
                localStorage.setItem(
                  'subscriptionActive',
                  JSON.stringify(data.subscription ? true : false),
                );
                localStorage.setItem(
                  'talismanActivated',
                  JSON.stringify(data.talismanActivated ? true : false),
                );
                navigatge('/checkout/digital'); // Redirigir al usuario
              })
              .catch(err => {
                console.error('Error en login automático:', err);
              });
          }

          handleMessage();
        })

        .catch(error => {
          console.log(error);
          setIsLoading(false);
          setErrorsFromAPI(error.response.data.error);
        });
    },
  });

  return (
    <main
      className={
        activatedAlarm || shopingCartOpen ? 'viewport-background' : ''
      }>
      <section className="login-container efectoReveal">
        <BackgroundVideo />

        {openMessage && (
          <div className="login-message-container efectoReveal">
            <h4>Su cuenta ha sido registrada.</h4>
            {confirmedAcount ? (
              <p>Haz click en continuar para iniciar sesíon</p>
            ) : (
              <p>Recibirás un mail que te permitirá activarla</p>
            )}
            <Button text="Continuar" onClick={linkToLogin} />
          </div>
        )}

        {!openMessage && (
          <form
            onSubmit={singUpForm.handleSubmit}
            className="login-form"
            action="">
            <h3>CREA TU CUENTA</h3>
            <h4>Ingresa tus datos para registrarte en lovelia</h4>
            <h6>
              Si ya estás registrado en lovelia,{' '}
              <strong onClick={linkToLogin}>Haz click aquí</strong>
            </h6>
            <label htmlFor="name">Nombre</label>
            <input
              value={singUpForm.values.name}
              onChange={singUpForm.handleChange}
              onBlur={singUpForm.handleBlur}
              name="name"
              type="text"
              placeholder="Ej. Jonh"
              className={
                (singUpForm.touched.name && singUpForm.errors.name) ||
                errorsFromAPI
                  ? 'input-error'
                  : ''
              }
            />
            {singUpForm.touched.name && singUpForm.errors.name && (
              <span className="input-helpers-error">
                {singUpForm.errors.name}
              </span>
            )}
            <label htmlFor="lastname">Apellido</label>
            <input
              value={singUpForm.values.lastname}
              onChange={singUpForm.handleChange}
              onBlur={singUpForm.handleBlur}
              name="lastname"
              type="text"
              placeholder="Ej. Doe"
              className={
                (singUpForm.touched.lastname && singUpForm.errors.lastname) ||
                errorsFromAPI
                  ? 'input-error'
                  : ''
              }
            />
            {singUpForm.touched.lastname && singUpForm.errors.lastname && (
              <span className="input-helpers-error">
                {singUpForm.errors.lastname}
              </span>
            )}
            <label htmlFor="email">Email</label>
            <input
              value={singUpForm.values.email}
              onChange={singUpForm.handleChange}
              onBlur={singUpForm.handleBlur}
              name="email"
              type="email"
              placeholder="ejemplo@gmail.com"
              className={
                (singUpForm.touched.email && singUpForm.errors.email) ||
                errorsFromAPI
                  ? 'input-error'
                  : ''
              }
            />
            {singUpForm.touched.email && singUpForm.errors.email && (
              <span className="input-helpers-error">
                {singUpForm.errors.email}
              </span>
            )}
            <label htmlFor="password">Contraseña</label>
            <div
              className={` ${
                (singUpForm.touched.password && singUpForm.errors.password) ||
                errorsFromAPI
                  ? 'password-input-wrapper-error '
                  : 'password-input-wrapper'
              }`}>
              <input
                value={singUpForm.values.password}
                onChange={singUpForm.handleChange}
                onBlur={singUpForm.handleBlur}
                name="password"
                type={showPassword ? 'text' : 'password'}
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
            {singUpForm.touched.password && singUpForm.errors.password && (
              <span className="input-helpers-error">
                {singUpForm.errors.password}
              </span>
            )}
            <label htmlFor="confirmPassword">Confirmar contraseña</label>
            <div
              className={` ${
                (singUpForm.touched.password && singUpForm.errors.password) ||
                errorsFromAPI
                  ? 'password-input-wrapper-error '
                  : 'password-input-wrapper'
              }`}>
              <input
                value={singUpForm.values.confirmPassword}
                onChange={singUpForm.handleChange}
                onBlur={singUpForm.handleBlur}
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
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
                {'La confirmación de contraseña es incorrecta'}
              </span>
            ) : null}
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
                <BeatLoader color={'white'} speedMultiplier={0.4} />
              ) : (
                'REGISTRARME'
              )}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}

export default Register;
