export const getEspeceMenace = (trash: any) => {
    if (
        trash &&
        trash.data &&
        trash.data.productData &&
        trash.data.productData.product &&
        trash.data.productData.product.ecoscore_data &&
        trash.data.productData.product.ecoscore_data.adjustments &&
        typeof trash.data.productData.product.ecoscore_data.adjustments.threatened_species.ingredient !== ""
    ) {
        return trash.data.productData.product.ecoscore_data.adjustments.threatened_species.ingredient;
    } else {
        return null; 
    }
}
