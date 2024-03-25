import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: "",
    fireStore: "",
    OnAuthWindow: false,
  },
  reducers: {
    ChangeOnAuthWindow: (state, action) => {
      state.OnAuthWindow = action.payload;
    },
    ChangeUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { ChangeOnAuthWindow, ChangeUser } = AuthSlice.actions;
export default AuthSlice.reducer;
