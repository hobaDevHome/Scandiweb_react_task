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
export const addCartItem = (item) => {
  // console.log('add cart item action called', item);
  return {
    type: 'add_cart_item',
    payload: item,
  };
};
export const deleteCartItem = (id) => {
  // console.log("delete cart item action called", id);
  return {
    type: 'delete_cart_item',
    payload: id,
  };
};

export const calculateTotal = (items) => {
  // console.log('calc cart item action called', items);
  return {
    type: 'clac_total',
    payload: items,
  };
};
export const changeAttrubute = (id, attribute, name) => {
  console.log('action called', name);
  return {
    type: 'change_attribute',
    payload: { id, attribute, name },
  };
};
