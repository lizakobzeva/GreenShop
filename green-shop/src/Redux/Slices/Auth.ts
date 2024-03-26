import { createSlice } from "@reduxjs/toolkit";

let Isauth: boolean = false;
if (window.localStorage.getItem("token")) {
  Isauth = true;
}

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    Isauth: Isauth,
    email: "",
    token: "",
    id: "",
    OnAuthWindow: false,
  },
  reducers: {
    ChangeOnAuthWindow: (state, action) => {
      state.OnAuthWindow = action.payload;
    },
    SetUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      window.localStorage.setItem("token", action.payload.token);
      state.Isauth = true;
    },
    RemoveUser: (state) => {
      (state.email = ""), (state.token = ""), (state.id = "");
      window.localStorage.removeItem("token");
      state.Isauth = false;
    },
  },
});
export const { ChangeOnAuthWindow, SetUser, RemoveUser } = AuthSlice.actions;
export default AuthSlice;
