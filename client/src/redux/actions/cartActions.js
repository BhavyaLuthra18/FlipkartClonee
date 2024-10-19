import axios from "axios";
import * as actionType from "../constants/cartConstant";

// Adding item to Cart
export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const URL = "https://flipkart-clonee-sgpk.vercel.app";

  try {
    const { data } = await axios.get(`${URL}/product/${id}`);

    dispatch({ type: actionType.ADD_TO_CART, payload: { ...data, quantity } });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    dispatch({ type: actionType.ADD_TO_CART_ERROR, payload: error.message });
  }
};

// Remove item from Cart
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({ type: actionType.REMOVE_FROM_CART, payload: id });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// Updating Cart After Payment
export const updateCartAfterPayment = (itemId) => (dispatch) => {
  dispatch({ type: actionType.UPDATE_CART_AFTER_PAYMENT, payload: itemId });
};
