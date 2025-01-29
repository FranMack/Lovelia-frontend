export type InitialValues = {
    name: string;
    lastname: string;
    email: string;
    phone: string;
    receiver: string;
    street: string;
    streetNumber: string;
    apartmentNumber: string;
    state: string;
    city: string;
    country: string;
    postalCode: string;
    billingName: string;
    billingLastname: string;
    billingRfc: string;
    billingLegalName: string;
    billingTaxRegime: string;
    talismanDigitalAcounts: string[];
  } & {
    [key: `email${number}`]: string; // Añadir claves dinámicas
  };
  