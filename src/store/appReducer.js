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
        setAppStatus(state, action) {
            state.appStatus = action.payload.status
        },
    },
    extraReducers: (builder) => {
        builder.addCase(order.fulfilled, (state, action) => {
            if (action.payload) {
                state.telNumber = action.payload.userId
            }
        });
    }
})


export const appReducer = slice.reducer
export const {setTheme} = slice.actions
