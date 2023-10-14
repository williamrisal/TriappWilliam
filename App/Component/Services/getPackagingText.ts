export const getPackagingText = (trash: any) => {
    if (
        trash &&
        trash.data &&
        trash.data.productData &&
        trash.data.productData.product &&
        typeof trash.data.productData.product.packaging_text_fr !== ""
    ) {
        return trash.data.productData.product.packaging_text_fr;
    } else {
        return null; 
    }
}
