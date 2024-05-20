import { regularExpresions } from "../config/regularExpresions";

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
    [key: string]: any;
  }): [UserValidationErrors[]?, ContactValidation?] {
    const { name, subject, email, message } = object;

    const errors: UserValidationErrors[] = [];

    //name
    if (!name) {
      errors.push({
        name: "Missing name",
      });
    }

    if (!regularExpresions.only_letters.test(name)) {
      errors.push({ name: "Name should contain letters and spaces" });
    }

    //subject
    if (!subject) {
      errors.push({
        subject: "Missing subject",
      });
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

    //subject
    if (!message) {
      errors.push({
        message: "Missing subject",
      });
    }

    //message

    //name
    if (!message) {
      errors.push({
        message: "Missing message",
      });
    }

    if (errors.length > 0) {
      return [errors, undefined];
    }

    return [undefined, new ContactValidation(name, subject, email, message)];
  }
}
