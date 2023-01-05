import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
        toast.info(`Increased ${action.payload.title} Quantity`, {
          position: "bottom-right",
          theme: "colored",
          autoClose:1000,
          hideProgressBar: "true",
        });
      } else {
        const temporary = { ...action.payload, quantity: 1 };
        state.cartItems.push(temporary);
        toast.success(`${action.payload.title.toUpperCase()} Added to Cart`, {
          position: "bottom-right",
          theme: "colored",
          autoClose:1000,
          hideProgressBar: "true",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeItem(state, action) {
      const left = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = left;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.warning(`${action.payload.title.toUpperCase()} Removed from Cart`, {
        position: "bottom-right",
        theme: "colored",
        autoClose:1000,
        hideProgressBar: "true",
      });
    },
    decreaseItem(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
        toast.warning(`Decreased ${action.payload.title.toUpperCase()} Quantity`, {
          position: "bottom-right",
          theme: "colored",
          autoClose:1000,
          hideProgressBar: "true",
        });
      } else if (state.cartItems[itemIndex].quantity === 1) {
        const left = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = left;
        toast.warning(`${action.payload.title.toUpperCase()} Removed from Cart`, {
          position: "bottom-right",
          theme: "colored",
          autoClose:1000,
          hideProgressBar: "true",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.warning(`Cart Cleared`, {
        position: "bottom-right",
        theme: "colored",
        autoClose: 1000,
        hideProgressBar: "true",
      });
    },
    calculateTotal: (state) => {
      let amount = 0;
      let price = 0;
      state.cartItems.forEach((item) => {
        amount += item.quantity;
        price += item.quantity * item.price;
      });
      state.amount = amount;
      state.total = price;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});
export const {
  addToCart,
  removeItem,
  decreaseItem,
  clearCart,
  calculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
