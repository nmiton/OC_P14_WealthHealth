import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import employeesReducer from "./reducer";

const rootReducer = combineReducers({
	employees: employeesReducer,
});

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["employees"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
