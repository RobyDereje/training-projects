import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://course-api.com/react-useReducer-cart-project"


export const getCartItems = createAsyncThunk('cart/getCartItems',async ( _,thunkAPI)=>{
    try{
        const resp = await axios(url)
    return resp.data
    }catch(error){
        return thunkAPI.rejectWithValue("Something went wrong. Don't be mad")
    }
})

const initialState = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state)=>{
            state.cartItems = []
        },
        removeItem: (state, action)=>{
            const itemID = action.payload
            state.cartItems = state.cartItems.filter((item)=>item.id !== itemID)
        },
        increase: (state, {payload})=>{
            const cartItem = state.cartItems.find((item)=>item.id === payload.id)
            cartItem.amount = cartItem.amount + 1
        },
        decrease: (state, {payload})=>{
            const cartItem = state.cartItems.find((item)=>item.id === payload.id)
            cartItem.amount = cartItem.amount - 1
        },
        calculateState: (state)=>{
            let amount = 0;
            let total = 0;
            state.cartItems.map(item=>{
                amount += item.amount
                total += item.amount * item.price
            })
            state.amount = amount;
            state.total = total;
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(getCartItems.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(getCartItems.fulfilled, (state, action) =>{    
            state.isLoading = false;
            state.cartItems = action.payload
        })
        .addCase(getCartItems.rejected, (state, action)=>{
            state.isLoading = false;
            console.log(action)
        })
    }
    
})


export default cartSlice.reducer
export const {clearCart, removeItem, increase, decrease, calculateState} = cartSlice.actions