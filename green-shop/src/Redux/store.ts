import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./Slices/Auth";

const store = configureStore({
  reducer: { auth: AuthSlice.reducer },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
