import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import themeReducer from "./themeSlice";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  tasksReducer,
  themeReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["themeReducer", "tasksReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export const persistor = persistStore(store);


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
