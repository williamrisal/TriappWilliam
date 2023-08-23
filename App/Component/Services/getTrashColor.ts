import whatcolortrash from '../../Data/whatcolortrash.json';

export const getTrashColor = (trash: any) => {
    let packaging ;

    if (trash.data?.productData?.product?.ecoscore_data?.adjustments?.packaging?.non_recyclable_and_non_biodegradable_materials == 1 && trash.data?.productData?.product?.ecoscore_data?.adjustments?.packaging?.warning) {
        packaging = ["all","nodata"];
        return ("nodata");

    }
    else if (trash.data?.productData?.product?.ecoscore_data?.adjustments?.packaging?.non_recyclable_and_non_biodegradable_materials == 1 && !trash.data?.productData?.product?.ecoscore_data?.adjustments?.packaging?.warning ) {
        packaging = ["all","black"];
    }
    else {
        for (let itempack, i = 0; itempack = trash.data?.productData?.product?.ecoscore_data?.adjustments?.packaging.packagings[i]; i++) {
            for (let item, j = 0; item = whatcolortrash.poubelles[j]; j++) {
                if (item.exemples.includes(itempack.material)) {
                    packaging = [[itempack.shape],item.couleur];

                }
            }
        }
    }
    return (packaging);
}