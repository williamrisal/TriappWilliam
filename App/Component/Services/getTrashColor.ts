import axios from 'axios';

export const getTrashColor = async (trash: any) => {
    try {
        const response = await axios.get('https://raw.githubusercontent.com/williamrisal/TriappColorTrash/main/whatcolortrash.json');
        const whatcolortrash = response.data;
        let packaging = ["all", "nodata"];

        if (trash.data?.productData?.product?.ecoscore_data?.adjustments?.packaging?.non_recyclable_and_non_biodegradable_materials === 1 && trash.data?.productData?.product?.ecoscore_data?.adjustments?.packaging?.warning) {
            packaging = ["all", "nodata"];
            return "nodata";
        } else if (trash.data?.productData?.product?.ecoscore_data?.adjustments?.packaging?.non_recyclable_and_non_biodegradable_materials === 1 && !trash.data?.productData?.product?.ecoscore_data?.adjustments?.packaging?.warning) {
            packaging = ["all", "black"];
        } else {
            for (let itempack, i = 0; itempack = trash.data?.productData?.product?.ecoscore_data?.adjustments?.packaging.packagings[i]; i++) {
                for (let item, j = 0; item = whatcolortrash.poubelles[j]; j++) {
                    for (let a = 0; a < item.exemples.length; a++) {
                        if (item.exemples[a] === itempack.material) {
                            packaging = [[itempack.shape], item.couleur];
                        }
                    }
                }
            }
        }
        return packaging;
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération du fichier JSON :', error);
        return null;
    }
}
