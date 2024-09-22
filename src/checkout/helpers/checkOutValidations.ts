import { regularExpresions } from "../../config/regularExpresions";

export interface CheckOutValidationErrors {
  [key: string]: string;
}

export class CheckOutValidation {
  private constructor(
    readonly name: string,
    readonly lastname: string,
    readonly email: string,
    readonly phone: string,
    readonly receiver: string,
    readonly street: string,
    readonly streetNumber: string,
    readonly state: string,
    readonly city: string,
    readonly country: string,
    readonly postalCode: string
  ) {}

  static create(object: {
    [key: string]: string;
  }): [CheckOutValidationErrors[]?, CheckOutValidation?] {
    const {
      name,
      email,
      lastname,
      phone,
      receiver,
      street,
      streetNumber,
      //apartmentNumber,
      state,
      city,
      country,
      postalCode,
    } = object;

    const errors: CheckOutValidationErrors[] = [];

    //name
    if (!name) {
      errors.push({
        name: "Campo requerido",
      });
    }

    if (!regularExpresions.only_letters.test(name)) {
      errors.push({ name: "El nombre debe contener letras y espacios" });
    }

    if (name.length < 2) {
      errors.push({ name: "El nombre debe contener al menos 2 caracteres" });
    }

    //lastname
    if (!lastname) {
      errors.push({
        lastname: "Campo requerido",
      });
    }
    if (!regularExpresions.only_letters.test(lastname)) {
      errors.push({ lastname: "El apeliido debe contener letras y espacios" });
    }

    if (lastname.length < 2) {
      errors.push({
        lastname: "El apeliido debe contener al menos 2 caracteres",
      });
    }

    //email
    if (!email) {
      errors.push({
        email: "Campo requerido",
      });
    }
    if (!regularExpresions.email.test(email)) {
      errors.push({ email: "Email no valido" });
    }
    //phone
    if (!phone) {
      errors.push({
        phone: "Campo requerido",
      });
    }

    if (!regularExpresions.phone.test(phone)) {
      errors.push({ phone: "Número de telefono incorrecto" });
    }

    if (phone.length < 9) {
      errors.push({ phone: "Número de telefono incorrecto" });
    }

    //Destinatario
    if (!receiver) {
      errors.push({
        receiver: "Campo requerido",
      });
    }

    if (receiver.split(" ").length < 2) {
      errors.push({
        receiver:
          "El campo debe contener el nombre y apellido del destinatario",
      });
    }

    if (!regularExpresions.only_letters.test(receiver)) {
      errors.push({ receiver: "El nombre debe contener letras y espacios" });
    }

    //Calle

    if (!street) {
      errors.push({
        street: "Campo requerido",
      });
    }

    //Número

    if (!streetNumber) {
      errors.push({
        streetNumber: "Campo requerido",
      });
    }

    //Ciudad

    if (!city) {
      errors.push({
        city: "Campo requerido",
      });
    }

    //Provincia

    if (!state) {
      errors.push({
        state: "Campo requerido",
      });
    }

    //Pais

    if (!country) {
      errors.push({
        country: "Campo requerido",
      });
    }

    //Codigo posstal

    if (!postalCode) {
      errors.push({
        postalCode: "Campo requerido",
      });
    }

    if (errors.length > 0) {
      return [errors, undefined];
    }

    return [
      undefined,
      new CheckOutValidation(
        name,
        lastname,
        email,
        phone,
        receiver,
        street,
        streetNumber,
        state,
        city,
        country,
        postalCode
      ),
    ];
  }
}
