import { configureStore } from "@reduxjs/toolkit";
import {
  persistCombineReducers,
  persistStore,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import invoiceReducer from "../features/invoice/invoiceSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = persistCombineReducers(persistConfig, {
  auth: authReducer,
  counter: counterReducer,
  user: userReducer,
  invoice: invoiceReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
