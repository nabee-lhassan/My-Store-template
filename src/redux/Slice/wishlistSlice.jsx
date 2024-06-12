import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: JSON.parse(localStorage.getItem('wishlist')) || []
    },
    reducers: {
        addWishlist: (state, action) => {
            const { id } = action.payload;
            console.log(`wishlist ${id}`);
            const existingItem =  state.items.find(items => items.id === id);

            if (existingItem){
                alert('wishlist already added');

            }else{

                state.items.push(action.payload);
                localStorage.setItem('wishlist', JSON.stringify(state.items));
            }
            
            
        },

        removeWishlist: (state, action) => {

            const {id} = action.payload;

            state.items = state.items.filter(items => items.id !== id);
            localStorage.setItem('wishlist', JSON.stringify(state.items))

        },



        }
});

// Correctly extract the action creators from the slice
export const { addWishlist, removeWishlist } = wishlistSlice.actions;

// Export the reducer from the slice
export default wishlistSlice.reducer;
