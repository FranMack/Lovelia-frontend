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
        city: "Campo requerido",
      });
    }

    if (!regularExpresions.city.test(city)) {
      errors.push({ city: "El nombre de la ciudad puede tener letras,números y espacios" });
    }

    //Provincia

    if (!state) {
      errors.push({
        state: "Campo requerido",
      });
    }

    if (!regularExpresions.state.test(state)) {
      errors.push({ state: "El nombre de la provincia puede tener letras y espacios" });
    }

    //Pais

    if (!country) {
      errors.push({
        country: "Campo requerido",
      });
    }

    if (!regularExpresions.country.test(country)) {
      errors.push({
        country: "El nombre de la provincia puede tener letras y espacios",
      });
    }

    if (errors.length > 0) {
      return [errors, undefined];
    }

    return [undefined, new CheckOutDigitalValidation(country, state, city)];
  }
}
