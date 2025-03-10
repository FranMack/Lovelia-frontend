export const regularExpresions = {
    // email
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    // solo letras y espacios
    only_letters: /^[A-Za-z\s]+$/,
    // caracter especial
    contain_special_character: /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    //numero
    contain_number: /\d/,
    //letra miniscula
    contain_letter: /[a-z]/,
    //letra mayuscula
    contain_Capital_leter: /[A-Z]/,
    //cotiene solo numeros
    only_numbers: /^\d+$/,
    //telefono
    phone: /^\+?\d[\d\s]*$/,
  
    country: /^[a-zA-ZÀ-ÿ\s'-]+$/,
    state: /^[a-zA-ZÀ-ÿ\s'-]+$/,
    city: /^[a-zA-ZÀ-ÿ0-9\s'-]+$/,
  };
  