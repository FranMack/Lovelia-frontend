import axios from 'axios';
import {useFormik} from 'formik';
import {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {BeatLoader} from 'react-spinners';
import * as Yup from 'yup';
import {EyeClose, EyeOpen} from '../../assets/icons/icons';
import {envs} from '../../config/envs';
import {ShopingCartContext} from '../../context';
import {TimerContext} from '../../context/timerContext';
import {UserContext} from '../../context/userContext';
import {BackgroundVideo} from '../../ui/components';

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

  const {
    setEmail,
    setId,
    setName,
    setToken,
    setLastname,
    setSuscription,
    setTalismanActivated,
  } = useContext(UserContext);

  const navigatge = useNavigate();

  const linkTo = (path: string) => {
    navigatge(`/${path}`);
  };

  //other errors
  const [errorsFromAPI, setErrorsFromAPI] = useState<string>('');

  const {activatedAlarm} = useContext(TimerContext);
  const {shopingCartOpen} = useContext(ShopingCartContext);

  const singUpForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Campo requerido').email('Email no valido'),
      password: Yup.string().required('Campo requerido'),
    }),

    onSubmit: values => {
      if (isLoading) {
        return;
      }

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
          console.log(data);
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

          sessionStorage.setItem('userInfo', JSON.stringify(data.email));
          singUpForm.resetForm();
          setIsLoading(false);

          const checkoutPath = localStorage.getItem('checkoutPath');
          if (checkoutPath) {
            navigatge(checkoutPath);
            localStorage.removeItem('checkoutPath');
          } else {
            navigatge('/profile');
          }
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
        <form
          onSubmit={singUpForm.handleSubmit}
          className="login-form"
          action="">
          <h3>MI CUENTA</h3>
          <h4>Iniciar sesión</h4>
          <h6>
            Si aún no tienes una cuenta,{' '}
            <strong
              onClick={() => {
                linkTo('register');
              }}>
              Haz click aquí.
            </strong>
          </h6>
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
          <div className="login-button-container">
            <p>
              <span
                onClick={() => {
                  linkTo('forget-password');
                }}>
                ¿Has olvidado tu contraseña?
              </span>
            </p>

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
              'ACCEDER'
            )}
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
