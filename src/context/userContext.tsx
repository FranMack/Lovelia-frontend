import { ReactNode, createContext, useState } from "react";

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
}

interface UserContextProviderProps {
  children: ReactNode;
}

const userContextDefaultValue: UserContextValue = {
  id: "",
  email: "",
  token: "",
  name: "",
  lastname: "",
  subscription: false,
  talismanActivated: false,
  setId: () => {},
  setEmail: () => {},
  setToken: () => {},
  setName: () => {},
  setLastname: () => {},
  setSuscription: () => {},
  setTalismanActivated: () => {},
};

export const UserContext = createContext<UserContextValue>(
  userContextDefaultValue
);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [id, setId] = useState<string>("");
  const [email, setEmail] = useState(() => {
    const savedEmail = sessionStorage.getItem("userInfo");
    return savedEmail ? JSON.parse(savedEmail) : "";
  });
  const [token, setToken] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [subscription, setSuscription] = useState<boolean>(false);
  const [talismanActivated, setTalismanActivated] = useState<boolean>(false);

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
    setTalismanActivated
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};


