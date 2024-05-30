import { useState, createContext, ReactNode } from "react";

interface UserContextValue {
  id: string;
  email: string;
  token:string;
  name:string,
  lastname:string,
  setId: (id: string) => void;
  setEmail: (email: string) => void;
  setToken:(token: string) => void;
  setName:(name: string) => void;
  setLastname:(name: string) => void;
}

interface UserContextProviderProps {
  children: ReactNode;
}

const userContextDefaultValue: UserContextValue = {
  id: "",
  email: "",
  token:"",
  name:"",
  lastname:"",
  setId: () => {},
  setEmail: () => {},
  setToken: () => {},
  setName: () => {},
  setLastname: () => {},
};

export const UserContext = createContext<UserContextValue>(userContextDefaultValue);

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [id, setId] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");

  const value: UserContextValue = {
    id,
    email,
    token,
    name,
    lastname,
    setId,
    setEmail,
    setToken,
    setName,
    setLastname
  };

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;

