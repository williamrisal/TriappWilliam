import whatcolortrash from '../../Data/whatcolortrash.json';
export const getTrashColor = (trash: any): string => {
    console.log("//////////////:")
    console.log(trash.productData?.product?.ecoscore_data?.adjustments?.packaging.packagings[0].material);
    if (trash.productData?.product?.ecoscore_data?.adjustments?.packaging?.non_recyclable_and_non_biodegradable_materials == 1) {
        console.log('Marron');
    }

    for (let itempack, i = 0; itempack = trash.productData?.product?.ecoscore_data?.adjustments?.packaging.packagings[i]; i++) {
        for (let item, j = 0; item = whatcolortrash.poubelles[j]; j++) {
            if (item.exemples.includes(itempack.material)) {
                console.log(item.couleur);
            }
        }
    }
    console.log("//////////////:")

}