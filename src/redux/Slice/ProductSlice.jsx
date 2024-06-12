import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// Define an asynchronous thunk to fetch products
export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async () => {
    const response = await fetch('https://dummyjson.com/products');
    return response.json();
  } 
);



const productSlice = createSlice({
  name: 'products',
  initialState: {

    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder)=> {

    builder.addCase(fetchProducts.pending, (state)=>{
      state.isLoading = true;
      // console.log("loading", action.payload)


    });
    
    builder.addCase(fetchProducts.fulfilled, (state,action)=>{
      state.isLoading = false;
      console.log("products", action.payload)
      state.data = action.payload.products

    });
    
    builder.addCase(fetchProducts.rejected, (state,action)=>{
      console.log("error", action.payload)
        state.isError = true;
      

    });

   },
 
});

export default productSlice.reducer;
