import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {orderAPI} from "../api/testWorkAPI";


export const order = createAsyncThunk("app/order", async ({number}, {dispatch, rejectWithValue}) => {
    try {
        const res = await orderAPI.order(number)
        return res.data
    } catch (err) {
        return rejectWithValue(null)
    } finally {

    }
})


const initialState = {
    telNumber:null
}

export const slice = createSlice({
    name: "app",
    initialState,
    reducers: {
        resetTelNumber(state) {
            state.telNumber=null
        },
    },
    extraReducers: (builder) => {
        builder.addCase(order.fulfilled, (state, action) => {
                state.telNumber = action.payload.userId
        });
    }
})


export const appReducer = slice.reducer
export const {resetTelNumber} = slice.actions
