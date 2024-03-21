import { createSlice } from "@reduxjs/toolkit";
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyDpc0j_cAFpRSEfwa0d4FX8iFc67_JQbvw",
  authDomain: "greenshop-34f53.firebaseapp.com",
  projectId: "greenshop-34f53",
  storageBucket: "greenshop-34f53.appspot.com",
  messagingSenderId: "950908964771",
  appId: "1:950908964771:web:cdde314cd2428235a01416",
  measurementId: "G-3F0RR1P2KT",
});

// Initialize Firebase
// const auth = firebase.auth();
// const fireStore = firebase.firestore();

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    // firebase: "",
    // auth: auth,
    // fireStore: fireStore,
    OnAuthWindow: false,
  },
  reducers: {
    ChangeOnAuthWindow: (state, action) => {
      state.OnAuthWindow = action.payload;
    },
  },
});
export const { ChangeOnAuthWindow } = AuthSlice.actions;
export default AuthSlice.reducer;
