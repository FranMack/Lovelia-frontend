import axios from 'axios';
import { ReactNode, createContext, useState, useEffect } from 'react';
import { envs } from '../config';


interface UserContextValue {
  id: string;
  email: string;
  token: string;
  name: string;
  lastname: string;
  subscription: boolean;
  talismanActivated: boolean;
  loading: boolean; // Estado de carga
  setId: (id: string) => void;
  setEmail: (email: string) => void;
  setToken: (token: string) => void;
  setName: (name: string) => void;
  setLastname: (name: string) => void;
  setSuscription: (subscription: boolean) => void;
  setTalismanActivated: (talismanActivated: boolean) => void;
  refreshME: () => void;
}

interface UserContextProviderProps {
  children: ReactNode;
}

const userContextDefaultValue: UserContextValue = {
  id: '',
  email: '',
  token: '',
  name: '',
  lastname: '',
  subscription: false,
  talismanActivated: false,
  loading: true, // Inicialmente en carga
  setId: () => {},
  setEmail: () => {},
  setToken: () => {},
  setName: () => {},
  setLastname: () => {},
  setSuscription: () => {},
  setTalismanActivated: () => {},
  refreshME: () => {},
};

export const UserContext = createContext<UserContextValue>(userContextDefaultValue);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [id, setId] = useState<string>('');
  const [email, setEmail] = useState('');
  const [token, setToken] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [subscription, setSuscription] = useState<boolean>(false);
  const [talismanActivated, setTalismanActivated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true); // Estado de carga

  

  const refreshME = async () => {
    setLoading(true); // Iniciar carga de datos

    const fcmToken = localStorage.getItem('fcmToken');

    try {
      const { data } = await axios.get(`${envs.API_DOMAIN}/api/v1/user/me/${fcmToken}`, {
        withCredentials: true,
      });

      setEmail(data.email);
      setId(data.id);
      setName(data.name);
      setLastname(data.lastname);

      const subscription = JSON.parse(localStorage.getItem('subscriptionActive') || 'false');
      const talismanActivated = JSON.parse(localStorage.getItem('talismanActivated') || 'false');

      setSuscription(subscription);
      setTalismanActivated(talismanActivated);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Termina carga de datos
    }
  };

  // Intentar cargar los datos al iniciar
  useEffect(() => {
    refreshME();
  }, []);

  const value: UserContextValue = {
    id,
    email,
    token,
    name,
    lastname,
    subscription,
    talismanActivated,
    loading, // Proveer estado de carga
    setId,
    setEmail,
    setToken,
    setName,
    setLastname,
    setSuscription,
    setTalismanActivated,
    refreshME,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
