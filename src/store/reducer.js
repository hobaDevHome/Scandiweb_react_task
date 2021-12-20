import CartItemModel from "../components/Models/CartItemModel";

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
  // console.log("reducer called wthi", action.payload);
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
      const addedProduct = action.payload;
      const prodPrice = addedProduct.prices;
      const prodTitle = addedProduct.name;
      const prodAttributes = addedProduct.attributes;
      const prodId = addedProduct.id;
      const fouund = state.cartItems.find(
        (item) => item.id === addedProduct.id
      );
      const indexOfFound = state.cartItems.indexOf(fouund);

      if (fouund) {
        console.log("there is a prod");
        const updatedCartItem = new CartItemModel(
          state.cartItems[indexOfFound].quantity + 1,
          prodPrice,
          prodTitle,
          prodAttributes,
          prodId
        );
        return {
          ...state,
          cartItems: state.cartItems.map((el) =>
            el.id === prodId ? updatedCartItem : el
          ),
          totalAmount: state.totalAmount + prodPrice,
        };
      } else {
        console.log("there is NO a prod");
        const newCartItem = new CartItemModel(
          1, // quanity for a new added prod
          prodPrice,
          prodTitle,
          prodAttributes,
          prodId
        );
        return {
          ...state,
          cartItems: [...state.cartItems, newCartItem],
          totalAmount: state.totalAmount + prodPrice,
        };
      }

    case "delete_cart_item":
      const selectedCartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (selectedCartItem) {
        const currentQty = selectedCartItem.quantity;
        console.log(currentQty);
        if (currentQty > 1) {
          const updatedCartItem = new CartItemModel(
            selectedCartItem.quantity - 1,
            selectedCartItem.productPrice,
            selectedCartItem.productTitle,
            selectedCartItem.attributes,
            selectedCartItem.id
          );
          return {
            ...state,
            cartItems: state.cartItems.map((el) =>
              el.id === selectedCartItem.id ? updatedCartItem : el
            ),
            totalAmount: state.totalAmount - selectedCartItem.price,
          };
        } else {
          return {
            ...state,
            cartItems: state.cartItems.filter((el) => el.id !== action.payload),
          };
        }
      }

    default:
      return state;
  }
};
