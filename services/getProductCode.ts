import axios from 'axios';
import { Product } from '../models/ProductInfo';

export const getProductCode = (productCode: string) => {
  return axios.get<Product[]>(
    `https://world.openfoodfacts.org/api/v2/product/${productCode}`
  );
};
