import CartItemModel from "../components/Models/CartItemModel";

const INITIAL_STATE = {
  query: [],
  currency: "$",
  category: "all",
  productsList: [],
  selectedList: [],
  cartItems: [],
  clickedAttributes: [],
  totalAmount: 0,
  currentCartItemId: undefined,
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "change_currency":
      return { ...state, currency: action.payload };

    case "get_products_list":
      localStorage.setItem("selectedList", action.payload[0]);
      return {
        ...state,
        productsList: action.payload[0],
        selectedList: action.payload[0],
        query: action.payload,
      };

    case "get_slelected_products_list": {
      const newList = state.query.filter((cat) => cat.name === action.payload);
      return { ...state, category: action.payload, selectedList: newList[0] };
    }

    case "add_cart_item":
      {
        const addedProduct = action.payload;
        const prodPrice = addedProduct.prices;
        const prodTitle = addedProduct.name;
        const prodAttributes = addedProduct.attributes;
        const prodId = addedProduct.id;
        const prodGallery = addedProduct.gallery;

        const fouund = state.cartItems.find(
          (item) => item.id === addedProduct.id
        );
        const indexOfFound = state.cartItems.indexOf(fouund);

        const foundItemsArray = state.cartItems.filter(
          (item) => item.id === addedProduct.id
        );
        const indexOfFoundArray = foundItemsArray.map((item) =>
          state.cartItems.indexOf(item)
        );

        const foundAttributesArray = state.clickedAttributes.filter(
          (atr) => atr.id === prodId
        );

        // console.log("foundItemsArray", foundItemsArray);
        // console.log("indexOfFoundArray", indexOfFoundArray);
        // console.log("state.cartItems", state.cartItems);

        if (fouund) {
          console.log("found");
          if (foundAttributesArray.length === 0) {
            // console.log("found with no attributes");
            const updatedCartItem = new CartItemModel(
              state.cartItems[indexOfFound].itemid,
              state.cartItems[indexOfFound].quantity + 1,
              prodPrice,
              prodTitle,
              prodAttributes,
              prodId,
              prodGallery,
              foundAttributesArray
            );
            return {
              ...state,
              cartItems: state.cartItems.map((el) =>
                el.id === prodId ? updatedCartItem : el
              ),
            };
          } else {
            // console.log("found with attributes");
            const currattr = state.cartItems[indexOfFound].itemAttr;

            // console.log("found attributes array", foundAttributesArray);
            // console.log("current attributes", currattr);
            const newAttributesItem = checkEqualAttributes(
              foundItemsArray,
              foundAttributesArray
            );
            if (!newAttributesItem) {
              const updatedCartItem = new CartItemModel(
                state.cartItems[indexOfFound].itemid,
                state.cartItems[indexOfFound].quantity + 1,
                prodPrice,
                prodTitle,
                prodAttributes,
                prodId,
                prodGallery,
                foundAttributesArray
              );
              return {
                ...state,
                cartItems: state.cartItems.map((el) =>
                  el.id === prodId ? updatedCartItem : el
                ),
              };
            } else {
              const newCartItem = new CartItemModel(
                new Date().toString(),
                1,
                prodPrice,
                prodTitle,
                prodAttributes,
                prodId,
                prodGallery,
                foundAttributesArray
              );
              return {
                ...state,
                cartItems: [...state.cartItems, newCartItem],
              };
            }
          }
        } else if (!fouund) {
          // console.log(" not found");
          const newCartItem = new CartItemModel(
            new Date().toString(),
            1,
            prodPrice,
            prodTitle,
            prodAttributes,
            prodId,
            prodGallery,
            foundAttributesArray
          );
          return {
            ...state,
            cartItems: [...state.cartItems, newCartItem],
          };
        }
      }
      break;

    case "delete_cart_item":
      {
        const selectedCartItem = state.cartItems.find(
          (item) => item.id === action.payload
        );

        if (selectedCartItem) {
          const currentQty = selectedCartItem.quantity;

          if (currentQty > 1) {
            const updatedCartItem = new CartItemModel(
              selectedCartItem.quantity - 1,
              selectedCartItem.productPrice,
              selectedCartItem.productTitle,
              selectedCartItem.attributes,
              selectedCartItem.id,
              selectedCartItem.gallery
            );
            return {
              ...state,
              cartItems: state.cartItems.map((el) =>
                el.id === selectedCartItem.id ? updatedCartItem : el
              ),
            };
          } else {
            return {
              ...state,
              cartItems: state.cartItems.filter(
                (el) => el.id !== action.payload
              ),
            };
          }
        }
      }
      break;

    case "clac_total": {
      let calculatedAmount = 0;
      const items = action.payload;
      const prodcusPricesList = items.map((cartItem) => {
        return { l: cartItem.productPrice, q: cartItem.quantity };
      });

      const amounts = prodcusPricesList.map((priceList) =>
        priceList.l.map((price) => {
          if (price.currency.symbol === state.currency) {
            calculatedAmount += price.amount * priceList.q;
            // console.log(
            //   'price.amount',
            //   price.amount,
            //   'priceList.q',
            //   priceList.q,
            //   'calculatedAmount',
            //   calculatedAmount
            // );
          }
        })
      );
      calculatedAmount = parseFloat(calculatedAmount).toFixed(2);
      // console.log(amounts);
      return {
        ...state,
        totalAmount: calculatedAmount,
      };
    }

    case "change_attribute": {
      const id = action.payload.id;
      const attribute = action.payload.attribute;
      const name = action.payload.name;
      const addClickedattribute = { id, attribute, name };
      const foundAttributesArray = state.clickedAttributes.filter(
        (atr) => atr.id === id
      );

      if (foundAttributesArray.length === 0) {
        return {
          ...state,
          clickedAttributes: [...state.clickedAttributes, addClickedattribute],
        };
      } else {
        const foundCurrentAttib = foundAttributesArray.find(
          (att) => att.name === name
        );
        if (foundCurrentAttib) {
          return {
            ...state,
            clickedAttributes: state.clickedAttributes.map((att) =>
              att.id === id && att.name === name ? addClickedattribute : att
            ),
          };
        } else {
          return {
            ...state,
            clickedAttributes: [
              ...state.clickedAttributes,
              addClickedattribute,
            ],
          };
        }
      }
    }

    default:
      return state;
  }
};

function checkEqualAttributes(arr1, arr2) {
  // console.log(arr1);
  // console.log(arr2);
  const chosenAttrs = arr2.map((at) => at.attribute.value);
  const attsInCart = arr1.map((at) => [
    at.itemAttr.map((at2) => at2.attribute.value),
    at.itemid,
  ]);

  const id = attsInCart.find(
    (at) => at[0][0] === chosenAttrs[0] && at[0][1] === chosenAttrs[1]
  );

  // console.log("chosenAttrs", chosenAttrs);
  // console.log("attsInCart", attsInCart);
  console.log("id", id);
  // return common.length > 0;
  return id === undefined;
}
