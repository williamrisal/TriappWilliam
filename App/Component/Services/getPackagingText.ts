export const getPackagingText = (trash: any) => {
    if (
        trash &&
        trash.data &&
        trash.data.productData &&
        trash.data.productData.product &&
        trash.data.productData.product.packaging_text_fr &&
        trash.data.productData.product.packaging_text_fr.length > 0
    ) {
        return trash.data.productData.product.packaging_text_fr;
    } else if (trash.data.productData.product.packaging_text && trash.data.productData.product.packaging_text.length > 0) {
        return trash.data.productData.product.packaging_text;
    } else {
        return null;
    }
}
