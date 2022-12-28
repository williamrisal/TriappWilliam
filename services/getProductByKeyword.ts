import axios from "axios";

export const getProductByKeyword = async (word: string) => {
    return await axios.get(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${word}`);
}
