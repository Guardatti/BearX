import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import productsReducer from './products/productsSlice'
import cartReducer from './cart/cartSlice'
import userReducer from './user/userSlice'
import ordersReducer from './orders/ordersSlice'

const reducers = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
    orders: ordersReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart', 'user'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor = persistStore(store)