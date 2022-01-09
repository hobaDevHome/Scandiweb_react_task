export const changeCurrency = (currentCurrency) => {
  return {
    type: 'change_currency',
    payload: currentCurrency,
  };
};
export const getProductsLists = (allProducts) => {
  return {
    type: 'get_products_list',
    payload: allProducts,
  };
};
export const getSelectedProductsLists = (sentCategory) => {
  // console.log("acton call weit", sentCategory);
  return {
    type: 'get_slelected_products_list',
    payload: sentCategory,
  };
};
export const addCartItem = (item) => {
  // console.log("action called thie");
  return {
    type: 'add_cart_item',
    payload: item,
  };
};

export const addCartItemFromCart = (item) => {
  return {
    type: 'add_cart_item_from_cart',
    payload: item,
  };
};
export const deleteCartItem = (id) => {
  return {
    type: 'delete_cart_item',
    payload: id,
  };
};
export const deleteCartItemFromCart = (item) => {
  // console.log('action called to delete from cart', item);

  return {
    type: 'delete_cart_item_from_cart',
    payload: item,
  };
};

export const calculateTotal = (items) => {
  return {
    type: 'clac_total',
    payload: items,
  };
};
export const changeAttrubute = (id, attribute, name) => {
  return {
    type: 'change_attribute',
    payload: { id, attribute, name },
  };
};
