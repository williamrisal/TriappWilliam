export const getData = (Data: any) => {
    let Dataparsing = {};

    Dataparsing = Data.data.productData.product?.ecoscore_data?.adjustments?.origins_of_ingredients?.aggregated_origins
    return (Dataparsing);
}