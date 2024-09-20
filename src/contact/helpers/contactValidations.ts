import { regularExpresions } from "../../config/regularExpresions";

export interface UserValidationErrors {
  [key: string]: string;
}

export class ContactValidation {
  private constructor(
    readonly name: string,
    readonly subject: string,
    readonly email: string,
    readonly message: string
  ) {}

  static create(object: {
    [key: string]: string;
  }): [UserValidationErrors[]?, ContactValidation?] {
    const { name, subject, email, message } = object;

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

    //subject
    if (!subject) {
      errors.push({
        subject: "Campo requerido",
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

    //message

    if (!message) {
      errors.push({
        message: "Campo requerido",
      });
    }

    if (errors.length > 0) {
      return [errors, undefined];
    }

    return [undefined, new ContactValidation(name, subject, email, message)];
  }
}
