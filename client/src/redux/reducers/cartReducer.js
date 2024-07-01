import * as actionType from "../constants/cartConstant";

export const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem("cartItems")) || [] },
  action
) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const item = action.payload;
      const exist = state.cartItems.find((product) => product.id === item.id);

      // if item exists
      if (exist) {
        return {
          ...state,
          cartItems: state.cartItems.map((data) =>
            data.id === exist.id ? item : data
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product.id !== action.payload
        ),
      };
    case actionType.UPDATE_CART_AFTER_PAYMENT:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
