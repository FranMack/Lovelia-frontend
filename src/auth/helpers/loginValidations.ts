import { regularExpresions } from "../../config";

export interface UserValidationErrors {
  [key: string]: string;
}

export class LoginValidations {
  private constructor(readonly email: string, readonly password: string) {}

  static create(object: {
    [key: string]: string;
  }): [UserValidationErrors[]?, LoginValidations?] {
    const { email, password } = object;

    const errors: UserValidationErrors[] = [];

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


    if (errors.length > 0) {
      return [errors, undefined];
    }

    return [undefined, new LoginValidations(email, password)];
  }
}
