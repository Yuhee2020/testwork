import thunkMiddleware from "redux-thunk";
import {configureStore ,combineReducers} from "@reduxjs/toolkit";
import {appReducer} from "./appReducer";


export const rootReducer = combineReducers({
    app:appReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware)})


window.store = store
