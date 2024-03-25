import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/styles.css";
import { Provider } from "react-redux";
import store from "./Redux/store.ts";
import "firebase/firestore";
import "firebase/auth";
// import firebase from "firebase/compat/app";

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyDpc0j_cAFpRSEfwa0d4FX8iFc67_JQbvw",
//   authDomain: "greenshop-34f53.firebaseapp.com",
//   projectId: "greenshop-34f53",
//   storageBucket: "greenshop-34f53.appspot.com",
//   messagingSenderId: "950908964771",
//   appId: "1:950908964771:web:cdde314cd2428235a01416",
//   measurementId: "G-3F0RR1P2KT",
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
