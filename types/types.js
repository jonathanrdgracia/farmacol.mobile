const types ={
    login: '[Auth] Login',
    logout: '[Auth] logout',

    uiSetError: '[Error] setError',
    uiRemoveError: '[Error] removeError',
    
    uiChangeLoading: '[UI] change loading',
    uiResetLoading: '[UI] reset to FALSE loading ',


    productActive: '[Product] set active product',
    productsAddNew: '[Products] new product',
    productsList: '[Products] load products',
    productsUpdated: '[Products] updated product',
    productsFileUrl: '[Products] updated image url',
    productsDeleted: '[Products] deleted product',
    productsLogoutCleaning: '[products] logout cleaning',

    salesList: '[Sales] load sales',
    saleActive: '[Sales] set last sale active',


}

export default types;