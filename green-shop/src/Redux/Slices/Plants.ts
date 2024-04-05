import { createSlice } from "@reduxjs/toolkit";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import app from "../../firebase";

const db = getFirestore(app);

//let cart: Map<string, number> = {};
let cart: Map<string, number> = new Map([["", 0]]);
let like: Array<string> = [""];

const userId = window.localStorage.getItem("id");

if (userId) {
  const docRef = doc(db, "Users", userId);
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
      if (userId)
        setDoc(doc(db, "Users", userId), {
          cart: state.cart,
          like: state.like,
        });
    },
    RemoveLike: (state, action) => {
      state.like = state.like.filter((obj) => obj != action.payload);
      if (userId)
        setDoc(doc(db, "Users", userId), {
          cart: state.cart,
          like: state.like,
        });
    },
  },
});

export const { ChangePlantsData, RemoveLike, AddLike } = PlantsSlice.actions;
export default PlantsSlice.reducer;
