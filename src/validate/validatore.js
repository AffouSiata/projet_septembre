import {helpers,required,email,minLength,maxLength} from "@vuelidate/validators"


const mdp_plex = helpers.withMessage("ce champ doit contenir 6 caractères minium dont au moins 1 caractère spécial(* ^!$&;), 1 chiffre, 1 majuscule",
(value) => RegExp(/[\w\w]{8,}/).test(value)&&
           RegExp(/[0-9]+/).test(value)&&
           RegExp(/[A-Z]+/).test(value)&&
           RegExp(/[* ^!$&;]/).test(value)
           

);

const mdp = helpers.withMessage("ce champ doit pas contenir des tirets ",
(value) =>RegExp(/ [ -]/).test(value)
           

);

// const md_email = helpers.withMessage("ce champ doit etre bien remplir par un adresse email",
// (value) => RegExp(/[\w\w]{8,}/).test(value)&&
//            RegExp(/[0-9]+/).test(value)&&
//            RegExp(/[A-Z]+/).test(value)&&
//            RegExp(/[* ^!$&;]/).test(value)&&
//            RegExp(/ [ -]/).test(value)
          

// );


const champvaleur = helpers.withMessage('ce champ doit être obligatoirement remplir',required)
const champemail  = helpers.withMessage("La valeur n'est pas une adresse e-mail valide",email)
const longminNom=(longmin) =>helpers.withMessage(`Ce champ doit comporter au moins ${longmin} caractères`,minLength(longmin))
const longmaxNom=(longmax) =>helpers.withMessage(`La longueur maximale autorisée est de ${longmax} caractères`,maxLength(longmax))
const longminprenom=(longPmin) =>helpers.withMessage(`Ce champ doit comporter au moins ${longPmin} caractères`,minLength(longPmin))
const longmaxprenom=(longPmax) =>helpers.withMessage(`La longueur maximale autorisée est de ${longPmax} caractères`,maxLength(longPmax))
const longminnumero=(longnum) =>helpers.withMessage(`La longueur minimal autorisée est de ${longnum} chiffres`,maxLength(longnum))



export {champvaleur,mdp_plex,mdp,champemail,longminNom,longmaxNom,longminprenom,longmaxprenom,longminnumero}