import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: JSON.parse(localStorage.getItem('cart')) || []
    },
    reducers: {
        addCart: (state, action) => {
            const { id, quantity = 1, price  } = action.payload;
            console.log('id', id, 'quantity', quantity, 'Price', price);
            const existingItem = state.items.find(item => item.id === id);
            
            if (existingItem) {
                // If the product exists, update its quantity and price
                existingItem.quantity += 1; // Increment quantity by 1
                existingItem.price += price;
            } else {
                // If the product doesn't exist, add it to the cart with quantity 1
                state.items.push({ ...action.payload, quantity });
                console.log(id, quantity, price);
            }
            localStorage.setItem('cart', JSON.stringify(state.items));

        },

        lessCart: (state, action) => {
            const { id, quantity = 1, price  } = action.payload;
            console.log('id', id, 'quantity', quantity, 'Price', price);
            const existingItem = state.items.find(item => item.id === id);
            
            if (existingItem) {
                if(existingItem.quantity > 1){
                    // If the product exists, update its quantity and price
                existingItem.quantity -= 1; // Increment quantity by 1
                existingItem.price -= price / quantity;

                }else{
                    state.items = state.items.filter(item => item.id !== id);

                }
                
            } else {
                // If the product doesn't exist, add it to the cart with quantity 1
                state.items.push({ ...action.payload, quantity });
                console.log(id, quantity, price);
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        
        plusCart: (state, action) => {
            const { id, quantity = 1, price  } = action.payload;
            console.log('id', id, 'quantity', quantity, 'Price', price);
            const existingItem = state.items.find(item => item.id === id);
            
            if (existingItem) {
                
                    // If the product exists, update its quantity and price
                existingItem.quantity += 1; // Increment quantity by 1
                existingItem.price += price / quantity;

                
                
            } else {
                // If the product doesn't exist, add it to the cart with quantity 1
                state.items.push({ ...action.payload, quantity });
                console.log(id, quantity, price);
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
        },

        removeCart: (state, action) => {
            const { id } = action.payload; // Extract id from payload
            state.items = state.items.filter(item => item.id !== id);
            localStorage.setItem('cart', JSON.stringify(state.items));
        }
    }
});

export const { addCart,lessCart, removeCart,plusCart } = cartSlice.actions;

export default cartSlice.reducer;
