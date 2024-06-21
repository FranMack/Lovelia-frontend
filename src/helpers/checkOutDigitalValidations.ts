import { regularExpresions } from "../config/regularExpresions";

export interface CheckOutDigitalValidationErrors {
  [key: string]: string;
}

export class CheckOutDigitalValidation {
  private constructor(
    readonly country: string,
    readonly state: string,
    readonly city: string
  ) {}

  static create(object: {
    [key: string]: string;
  }): [CheckOutDigitalValidationErrors[]?, CheckOutDigitalValidation?] {
    const { country, state, city } = object;

    const errors: CheckOutDigitalValidationErrors[] = [];

    //Ciudad

    if (!city) {
      errors.push({
        city: "Missing city name",
      });
    }

    if (!regularExpresions.city.test(city)) {
      errors.push({ city: "Name coud contain letterss,spaces and numbers" });
    }

    //Provincia

    if (!state) {
      errors.push({
        state: "Missing state name",
      });
    }

    if (!regularExpresions.state.test(state)) {
      errors.push({ state: "Country should contain only letters and spaces" });
    }

    //Pais

    if (!country) {
      errors.push({
        country: "Missing country name",
      });
    }

    if (!regularExpresions.country.test(country)) {
      errors.push({
        country: "Country should contain only letters and spaces",
      });
    }

    if (errors.length > 0) {
      return [errors, undefined];
    }

    return [undefined, new CheckOutDigitalValidation(country, state, city)];
  }
}
