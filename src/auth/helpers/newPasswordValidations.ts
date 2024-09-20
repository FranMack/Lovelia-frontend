import { regularExpresions } from "../../config";

export interface UserValidationErrors {
  [key: string]: string;
}

export class NewPasswordValidation {
  private constructor(
    readonly password: string
  ) {}

  static create(object: {
    [key: string]: string;
  }): [UserValidationErrors[]?, NewPasswordValidation?] {
    const {password} = object;

    const errors: UserValidationErrors[] = [];

   
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

    return [undefined, new NewPasswordValidation( password)];
  }
}
