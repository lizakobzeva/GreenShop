import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./Slices/Auth";
import { PlantsSlice } from "./Slices/Plants";

const store = configureStore({
  reducer: { auth: AuthSlice.reducer, plants: PlantsSlice.reducer },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
