import { createSlice } from "@reduxjs/toolkit";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import app from "../../firebase";

const db = getFirestore(app);

let cart: Array<string> = [""];
let like: Array<string> = [""];

const local = window.localStorage.getItem("id");

if (local) {
  const docRef = doc(db, "Users", local);
  const data = await getDoc(docRef);
  cart = data.data()?.cart;
  like = data.data()?.like;
}

export const PlantsSlice = createSlice({
  name: "auth",
  initialState: {
    PlantsData: "",
    cart: cart,
    like: like,
  },
  reducers: {
    ChangePlantsData: (state, action) => {
      state.PlantsData = action.payload;
    },
    AddLike: (state, action) => {
      state.like.push(action.payload);
    },
    RemoveLike: (state, action) => {
      state.like = state.like.filter((obj) => obj != action.payload);
    },
  },
});

export const { ChangePlantsData, RemoveLike, AddLike } = PlantsSlice.actions;
export default PlantsSlice.reducer;
