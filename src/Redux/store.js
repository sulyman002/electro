import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import allCollectionSliceReducer from "./AllCollectionSlice.js";
import cartSliceReducer from "./CartSlice.js";
import inputReducer from "./InputSlice.js"



const persistConfig = {
    key: "root",
    storage
}

const persistedAllCollectionReducer = persistReducer(persistConfig, allCollectionSliceReducer );
const persistedCartReducer = persistReducer(persistConfig, cartSliceReducer );


const store = configureStore({
    reducer: {
        allCollectionRed: persistedAllCollectionReducer,
        cartRed: persistedCartReducer,
        inputRed: inputReducer

    }
})

export const persistor = persistStore(store);
export default store;