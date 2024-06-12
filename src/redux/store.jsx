import { configureStore } from '@reduxjs/toolkit'
import productReducer from './Slice/ProductSlice';
import cartReducer from './Slice/CartSlice'
import wishlistReducer from './Slice/wishlistSlice'
import popupReducer from './Slice/PopSlice'



// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {
products: productReducer,
cart: cartReducer,
wishlist: wishlistReducer,
popup: popupReducer
},
})