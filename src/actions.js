/**
 * Actions types
 */
export const AFFICHER      = 'AFFCIHER';
export const ADDITIONNER   = 'ADDITIONNER';
export const APPUYER_SUR   = 'APPUYER_SUR';
export const DIVISER       = 'DIVISER';
export const MULTIPLIER    = 'MULTIPLIER';
export const REINITIALISER = 'REINITIALISER';
export const SOUSTRAIRE    = 'SOUSTRAIRE';
export const VALIDER       = 'VALIDER';

/*
 * other constants
 */
export const ChoixAffichage = {
  MONTRER_RESULTAT: 'MONTRER_RESULTAT',
  MONTRER_SAISI_INTERMEDIAIRE: 'MONTRER_SAISI_INTERMEDIAIRE'
}

/**
 * Actions creators
 */

export function addtionner() {
  return { type: ADDITIONNER};
}

export function affcher(typeAffichage) {
   return { type: AFFICHER, typeAffichage };
}

export function appuyerSur(unChiffre) {
   return { type: APPUYER_SUR, unChiffre };
}
 
export function diviser() {
   return { type: DIVISER };
}

export function multiplier() {
   return { type: MULTIPLIER };
}

export function reinitialiser() {
   return { type: REINITIALISER };
}

export function soustraire() {
   return { type: SOUSTRAIRE };
}

export function valider() {
  return { type: VALIDER };
}