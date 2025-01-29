import {createContext, ReactNode, useState} from 'react';

interface Address {
  receiver: string;
  street: string;
  streetNumber: string;
  apartmentNumber?: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  phone?: string;
}

interface CheckoutAddressContextValue {
  shippingAddress: Address;
  setShippingAddress: (address: Address) => void;
}

interface CheckoutAddressContextProviderProps {
  children: ReactNode;
}

// Estado inicial por defecto
const defaultAddress: Address = {
  receiver: '',
  street: '',
  streetNumber: '',
  apartmentNumber: '',
  city: '',
  state: '',
  country: '',
  postalCode: '',
  phone: '',
};

// Valor inicial del contexto
const checkoutAddressContextDefaultValue: CheckoutAddressContextValue = {
  shippingAddress: defaultAddress,
  setShippingAddress: () => {},
};

// Crear el contexto
export const CheckoutAddressContext =
  createContext<CheckoutAddressContextValue>(
    checkoutAddressContextDefaultValue,
  );

// Proveedor del contexto
export const CheckoutAddressContextProvider = ({
  children,
}: CheckoutAddressContextProviderProps) => {
  const [shippingAddress, setShippingAddress] =
    useState<Address>(defaultAddress);

  const value: CheckoutAddressContextValue = {
    shippingAddress,
    setShippingAddress,
  };

  return (
    <CheckoutAddressContext.Provider value={value}>
      {children}
    </CheckoutAddressContext.Provider>
  );
};
