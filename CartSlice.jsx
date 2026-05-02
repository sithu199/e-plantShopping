import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // ပစ္စည်းများ သိမ်းဆည်းရန် array
  },
  reducers: {
    // ပစ္စည်းအသစ်ထည့်ရန်
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    // ပစ္စည်းကို cart ထဲမှ ပြန်ဖယ်ထုတ်ရန်
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    // ပစ္စည်းအရေအတွက်ကို တိုး/လျှော့ လုပ်ရန်
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
