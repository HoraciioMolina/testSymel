
//#region MESSAGES
export const REQUIRED = "Campo Requerido";
export const EMAIL = "Ingrese un Email valido";
export const ONLY_ALPHABETIC = "Ingrese solo alfabetos";
//#endregion

//#region FUNCTIONS WIT MESSAGES
export const maxChar = (max) => `Debe tener menos de ${max} caracteres.`;

export const minChar = (min) => `Debe tener mas de ${min} caracteres.`;
//#endregion

//#region REGEXP
export const onlyAlphabetic = /^[A-Za-z]+$/;
//#endregion

