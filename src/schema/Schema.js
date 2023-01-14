import * as yup from "yup";
export const OrganizationSchema = yup.object().shape({
    email: yup.string().email("Renseignez un email valide").required("L'adresse e-mail d'une organisation ne peut être nulle ou vide"),
    name: yup.string().required("Le nom d'une organisation ne peut être nulle ou vide"),
    mission: yup.string().required("La mission d'une organisation ne peut être nulle ou vide"),
    acronym: yup.string().required("Le sigle d'une organisation ne peut être nul ou vide"),
    telephone: yup.string().required("Le numéro de téléphone ne peut être nulle ou vide").min(10,"Le nombre de caractères du numéro de téléphone ne peut dépasser 10")
});