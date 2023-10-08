export const getEnvironementImpact = (trash: any) => {
    if (
        trash &&
        trash.data &&
        trash.data.productData &&
        trash.data.productData.product &&
        trash.data.productData.product.ecoscore_data &&
        trash.data.productData.product.ecoscore_data.agribalyse &&
        typeof trash.data.productData.product.ecoscore_data.agribalyse.co2_total !== 'undefined'
    ) {
        return Math.round(trash.data.productData.product.ecoscore_data.agribalyse.co2_total * 100); // on multiplie par 10 pour le metre en G pck c'etait en KG avant
    } else {
        return null; 
    }
}
