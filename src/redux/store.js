import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authSlice } from "./UserAuth/slice";
import { waterReducer } from "./Water/slice";
import dateReducer from "./DateSlice";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "isLoggedIn", "isLoadingLogin"],
};

const persistedReducer = persistReducer(persistConfig, authSlice);

const waterPersistConfig = {
  key: "water",
  storage,
};

const persistedWaterReducer = persistReducer(waterPersistConfig, waterReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    water: persistedWaterReducer,
    date: dateReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
