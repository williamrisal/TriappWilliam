import axios from 'axios';
import { Product } from '../Models/ProductInfo';

export const getProductCode = (productCode: string) => {
  return axios.get<Product[]> (
    `https://world.openfoodfacts.org/api/v2/product/${productCode}`
  );
};