import axios from 'axios';
import {ReactNode, createContext, useState} from 'react';
import { envs } from '../config';

interface UserContextValue {
  id: string;
  email: string;
  token: string;
  name: string;
  lastname: string;
  subscription: boolean;
  talismanActivated:boolean
  setId: (id: string) => void;
  setEmail: (email: string) => void;
  setToken: (token: string) => void;
  setName: (name: string) => void;
  setLastname: (name: string) => void;
  setSuscription: (subscription: boolean) => void;
  setTalismanActivated: (talismanActivated: boolean) => void
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
  setId: () => {},
  setEmail: () => {},
  setToken: () => {},
  setName: () => {},
  setLastname: () => {},
  setSuscription: () => {},
  setTalismanActivated: () => {},
  refreshME:()=>{}
};

export const UserContext = createContext<UserContextValue>(
  userContextDefaultValue,
);

export const UserContextProvider = ({children}: UserContextProviderProps) => {
  const [id, setId] = useState<string>('');
  const [email, setEmail] = useState(() => {
    const savedEmail = sessionStorage.getItem('userInfo');
    return savedEmail ? JSON.parse(savedEmail) : '';
  });
  const [token, setToken] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [subscription, setSuscription] = useState<boolean>(false);
  const [talismanActivated, setTalismanActivated] = useState<boolean>(false);

  const refreshME=async()=>{
    const fcmToken = localStorage.getItem('fcmToken');
    axios
      .get(`${envs.API_DOMAIN}/api/v1/user/me/${fcmToken}`, {
        withCredentials: true,
      })
      .then(({data}) => {
        setEmail(data.email);
        setId(data.id);
        setName(data.name);
        setLastname(data.lastname);
        const subscription = JSON.parse(
          localStorage.getItem('subscriptionActive') || 'false',
        );

        const talismanActivated = JSON.parse(
          localStorage.getItem("talismanActivated") || "false"
        );

        setSuscription(subscription);
        setTalismanActivated(talismanActivated)
      })
      .catch(error => {
        console.log(error);
      });

  }

  const value: UserContextValue = {
    id,
    email,
    token,
    name,
    lastname,
    subscription,
    talismanActivated,
    setId,
    setEmail,
    setToken,
    setName,
    setLastname,
    setSuscription,
    setTalismanActivated,
    refreshME
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
