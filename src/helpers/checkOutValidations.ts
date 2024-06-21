import { regularExpresions } from "../config/regularExpresions";

export interface CheckOutValidationErrors {
  [key: string]: string;
}

export class CheckOutValidation {
  private constructor(
    readonly name: string,
    readonly lastname: string,
    readonly email: string,
    readonly dni: string,
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
      dni,
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
        name: "Missing name",
      });
    }

    if (!regularExpresions.only_letters.test(name)) {
      errors.push({ name: "Name should contain letters and spaces" });
    }

    if (name.length < 2) {
      errors.push({ name: "Name should contain at lest two letters" });
    }

    //lastname
    if (!lastname) {
      errors.push({
        lastname: "Missing lastname",
      });
    }
    if (!regularExpresions.only_letters.test(lastname)) {
      errors.push({ lastname: "Name should contain letters and spaces" });
    }

    if (lastname.length < 2) {
      errors.push({ lastname: "Name should contain at lest two letters" });
    }

    //email
    if (!email) {
      errors.push({
        email: "Missing email",
      });
    }
    if (!regularExpresions.email.test(email)) {
      errors.push({ email: "Email is not valid" });
    }
    //DNI
    if (!dni) {
      errors.push({
        dni: "Missing DNI",
      });
    }
    if (!regularExpresions.only_numbers.test(dni)) {
      errors.push({ dni: "DNI must contain only numbres" });
    }

    if (dni.length < 7) {
      errors.push({ dni: `DNI must contain at least 7 numbers` });
    }

    //phone
    if (!phone) {
      errors.push({
        phone: "Missing Phone number",
      });
    }

    if (!regularExpresions.phone.test(phone)) {
      errors.push({ phone: "Wrong phone number" });
    }

    if (phone.length < 9) {
      errors.push({ phone: "Wrong phone number" });
    }

    //Destinatario
    if (!receiver) {
      errors.push({
        receiver: "Missing receiver names",
      });
    }

    if (receiver.split(" ").length < 2) {
      errors.push({
        receiver: "Receiver must contain at least name and lastname",
      });
    }

    if (!regularExpresions.only_letters.test(receiver)) {
      errors.push({ receiver: "Name should contain letters and spaces" });
    }

    //Calle

    if (!street) {
      errors.push({
        street: "Missing road name",
      });
    }

    //Número

    if (!streetNumber) {
      errors.push({
        streetNumber: "Missing street number",
      });
    }

    //Ciudad

    if (!city) {
      errors.push({
        city: "Missing city name",
      });
    }

    //Provincia

    if (!state) {
      errors.push({
        state: "Missing state name",
      });
    }

    //Pais

    if (!country) {
      errors.push({
        country: "Missing country name",
      });
    }

    //Departamento

    if (!postalCode) {
      errors.push({
        postalCode: "Missing postal code",
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
        dni,
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
