import { regularExpresions } from "../../config";

export interface ForgetPasswordValidationsErrors {
  [key: string]: string;
}

export class ForgetPasswordValidations {
  private constructor(readonly email: string) {}

  static create(object: {
    [key: string]: string;
  }): [ForgetPasswordValidationsErrors[]?, ForgetPasswordValidations?] {
    const { email } = object;

    const errors: ForgetPasswordValidationsErrors[] = [];

    //email
    if (!email) {
      errors.push({
        email: "Campo requerido",
      });
    }
    if (!regularExpresions.email.test(email)) {
      errors.push({ email: "Email no valido" });
    }


    if (errors.length > 0) {
      return [errors, undefined];
    }

    return [undefined, new ForgetPasswordValidations(email)];
  }
}
