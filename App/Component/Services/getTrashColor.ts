import whatcolortrash from '../../Data/whatcolortrash.json';

export const getTrashColor = (trash: any) => {
    let packaging = {};

    if (trash.productData?.product?.ecoscore_data?.adjustments?.packaging?.non_recyclable_and_non_biodegradable_materials == 1 && trash.productData?.product?.ecoscore_data?.adjustments?.packaging?.warning ) {
        Object.assign(packaging, {"all": "nodata"});
    }
    else if (trash.productData?.product?.ecoscore_data?.adjustments?.packaging?.non_recyclable_and_non_biodegradable_materials == 1) {
        Object.assign(packaging, {"all": "Marron"});
    }
    else {
        for (let itempack, i = 0; itempack = trash.productData?.product?.ecoscore_data?.adjustments?.packaging.packagings[i]; i++) {
            for (let item, j = 0; item = whatcolortrash.poubelles[j]; j++) {
                if (item.exemples.includes(itempack.material)) {
                    Object.assign(packaging, {[itempack.shape] : item.couleur});
                }
            }
        }
    }
    return (packaging);
}