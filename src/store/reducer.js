import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

const INITIAL_STATE = {
  query: [],
  currency: "$",
  category: "all",
  productsList: [],
  selectedList: [],
  cartItems: [],
  totalAmount: 0,
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  console.log("reducer called wthi", action.payload);
  switch (action.type) {
    case "change_currency":
      return { ...state, currency: action.payload };

    case "get_products_list":
      return {
        ...state,
        productsList: action.payload[0],
        selectedList: action.payload[0],
        query: action.payload,
      };

    case "get_slelected_products_list":
      const newList = state.query.filter((cat) => cat.name === action.payload);

      return { ...state, category: action.payload, selectedList: newList[0] };

    case "add_cart_item":
      const addedItems = state.cartItems.push(action.payload);
      return { ...state, cartItems: addedItems };

    case "delete_cart_item":
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      return { ...state, cartItems: newCartItems };

    default:
      return state;
  }
};
