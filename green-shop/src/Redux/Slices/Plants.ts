import { createSlice } from "@reduxjs/toolkit";

export const PlantsSlice = createSlice({
  name: "auth",
  initialState: {
    PlantsData: "",
  },
  reducers: {
    ChangePlantsData: (state, action) => {
      state.PlantsData = action.payload;
    },
  },
});
export const { ChangePlantsData } = PlantsSlice.actions;
export default PlantsSlice.reducer;
