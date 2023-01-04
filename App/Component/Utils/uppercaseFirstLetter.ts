export const uppercaseFirstLetter = (str: string) => {
  if (!str)
    return "Produit introuvable !";
  return str.charAt(0).toUpperCase() + str.slice(1);
};
