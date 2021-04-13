import { ADD_TO_CART } from "../constants/cartConstants";

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const product = state.cartItems.find((x) => x.product === item.product);
      if (product) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === product ? item : x
          ),
        };
      }
      return {
        cartItems: [...state.cartItems, item],
      };
  }
};
export { cartReducer };
