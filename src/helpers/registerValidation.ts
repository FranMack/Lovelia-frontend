import { regularExpresions } from "../config/regularExpresions";

export interface UserValidationErrors {
  [key: string]: string;
}

export class RegisterValidation {
  private constructor(
    readonly name: string,
    readonly lastname: string,
    readonly email: string,
    readonly password: string
  ) {}

  static create(object: {
    [key: string]: string;
  }): [UserValidationErrors[]?, RegisterValidation?] {
    const { name, email, password, lastname } = object;

    const errors: UserValidationErrors[] = [];

    //name
    if (!name) {
      errors.push({
        name: "Campo requerido",
      });
    }
    if (!regularExpresions.only_letters.test(name)) {
      errors.push({ name: "El nombre debe contener letras y espacios" });
    }
    //lastname
    if (!lastname) {
      errors.push({
        lastname: "Campo requerido",
      });
    }
    if (!regularExpresions.only_letters.test(lastname)) {
      errors.push({ lastname: "El apellido debe contener letras y espacios" });
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
    //password
    if (!password) {
      errors.push({
        password: "Campo requerido",
      });
    }
    if (!regularExpresions.contain_special_character.test(password)) {
      errors.push({
        password: "El password debe contener al menos un caracter especial",
      });
    }
    if (!regularExpresions.contain_letter.test(password)) {
      errors.push({
        password: "El password debe contener al menos una letra en minúscula",
      });
    }
    if (!regularExpresions.contain_Capital_leter.test(password)) {
      errors.push({
        password: "El password debe contener al menos una letra en mayúscula",
      });
    }
    if (!regularExpresions.contain_number.test(password)) {
      errors.push({ password: "El password debe contener al menos un número" });
    }
    if (password.length < 6) {
      errors.push({ password: "El password debe tener al menos 6 caracteres" });
    }

    if (errors.length > 0) {
      return [errors, undefined];
    }

    return [undefined, new RegisterValidation(name, lastname, email, password)];
  }
}
