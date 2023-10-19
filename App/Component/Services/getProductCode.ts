import axios, { AxiosResponse, AxiosError } from 'axios';
import { Product } from '../Models/ProductInfo';

export const getProductCode = (productCode: string): Promise<Product[]> => {
  return axios
    .get<Product[]>(`https://world.openfoodfacts.org/api/v2/product/${productCode}`)
    .then((response: AxiosResponse<Product[]>) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      if (error.response && error.response.status === 404) {
        throw error; 
      } else {
        // Gérer d'autres erreurs
        throw error; // Propage l'erreur pour une gestion ultérieure si nécessaire
      }
    });
};
