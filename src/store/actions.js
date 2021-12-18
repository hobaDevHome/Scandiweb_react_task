export const changeCurrency = (currentCurrency) => {
  //   console.log('action called wthi', currentCurrency);
  return {
    type: 'change_currency',
    payload: currentCurrency,
  };
};
export const getProductsLists = (allProducts) => {
  //   console.log('action called wthi', allProducts);
  return {
    type: 'get_products_list',
    payload: allProducts,
  };
};
export const getSelectedProductsLists = (sentCategory) => {
  //   console.log('action called wthi', sentCategory);
  return {
    type: 'get_slelected_products_list',
    payload: sentCategory,
  };
};
