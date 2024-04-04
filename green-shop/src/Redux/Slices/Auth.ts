import { createSlice } from "@reduxjs/toolkit";

let Isauth: boolean = false;
if (window.localStorage.getItem("id")) {
  Isauth = true;
}

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    Isauth: Isauth,
    email: "",
    id: "",
    OnAuthWindow: false,
  },
  reducers: {
    ChangeOnAuthWindow: (state, action) => {
      state.OnAuthWindow = action.payload;
    },
    SetUser: (state, action) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      window.localStorage.setItem("id", action.payload.id);
      state.Isauth = true;
    },
    RemoveUser: (state) => {
      (state.email = ""), (state.id = "");
      window.localStorage.removeItem("id");
      state.Isauth = false;
    },
  },
});
export const { ChangeOnAuthWindow, SetUser, RemoveUser } = AuthSlice.actions;
export default AuthSlice;
