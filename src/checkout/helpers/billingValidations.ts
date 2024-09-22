import { regularExpresions } from "../../config/regularExpresions";

export interface BillingValidationErrors {
  [key: string]: string;
}

export class BillingValidation {
  private constructor(
    readonly billingName: string,
    readonly billingLastname: string,
    readonly billingRfc: string,
    readonly billingLegalName: string,
    readonly billingTaxRegime: string
  ) {}

  static create(object: {
    [key: string]: string;
  }): [BillingValidationErrors[]?, BillingValidation?] {
    const {
      billingName,
      billingLastname,
      billingRfc,
      billingLegalName,
      billingTaxRegime,
    } = object;

    const billingErrors: BillingValidationErrors[] = [];

    //name
    if (!billingName) {
      billingErrors.push({
        name: "Campo requerido",
      });
    }

    if (!regularExpresions.only_letters.test(billingName)) {
      billingErrors.push({ name: "El nombre debe contener letras y espacios" });
    }

    if (billingName.length < 2) {
      billingErrors.push({
        name: "El nombre debe contener al menos 2 caracteres",
      });
    }

    //lastname
    if (!billingLastname) {
      billingErrors.push({
        lastname: "Campo requerido",
      });
    }
    if (!regularExpresions.only_letters.test(billingLastname)) {
      billingErrors.push({
        lastname: "El apeliido debe contener letras y espacios",
      });
    }

    if (billingLastname.length < 2) {
      billingErrors.push({
        lastname: "El apeliido debe contener al menos 2 caracteres",
      });
    }

    //rfc

    if (!billingRfc) {
      billingErrors.push({
        rfc: "Campo requerido",
      });
    }

    if (billingRfc.length < 12 || billingRfc.length > 13) {
      billingErrors.push({
        rfc: "Valida los caracteres de tu clave, Personas Fisicas '13' y Personas Morales '12'.",
      });
    }

    if (billingRfc.length === 13) {
      const shouldBeLetters = billingRfc.slice(0, 4);
      console.log("leters", shouldBeLetters);
      const shouldBeNumbers = billingRfc.slice(4, 10);
      console.log("numbers", shouldBeNumbers);
      if (
        !regularExpresions.only_letters.test(shouldBeLetters) ||
        !regularExpresions.only_numbers.test(shouldBeNumbers)
      ) {
        billingErrors.push({
          rfc: "RFC incorrecto",
        });
      }
    }

    if (billingRfc.length === 12) {
      const shouldBeLetters = billingRfc.slice(0, 3);
      const shouldBeNumbers = billingRfc.slice(3, 9);
      if (
        !regularExpresions.only_letters.test(shouldBeLetters) ||
        !regularExpresions.only_numbers.test(shouldBeNumbers)
      ) {
        billingErrors.push({
          rfc: "RFC incorrecto",
        });
      }
    }

    //legalName
    if (!billingLegalName) {
      billingErrors.push({
        legalName: "Campo requerido111",
      });
    }
    //taxRegime
    if (!billingTaxRegime) {
      billingErrors.push({
        taxRegime: "Campo requerido222",
      });
    }

    if (billingErrors.length > 0) {
      return [billingErrors, undefined];
    }

    return [
      undefined,
      new BillingValidation(
        billingName,
        billingLastname,
        billingRfc,
        billingLegalName,
        billingTaxRegime
      ),
    ];
  }
}
