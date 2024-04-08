import { createSlice } from "@reduxjs/toolkit";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import app from "../../firebase";

const db = getFirestore(app);

//let cart: Map<string, number> = {};
let cart: Array<object> = [{}];
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
    AddCart: (state, action) => {
      let i = state.cart.length - 1;
      let exist = false;
      while (i != -1) {
        const obj = state.cart[i];
        if (obj)
          if (Object.keys(obj)[0] == action.payload) {
            const key = action.payload;
            const objec: object = {};
            objec[key] = Object.values(obj)[0] + 1;
            state.cart[i] = objec;
            exist = true;
            break;
          }
        i--;
      }

      if (!exist && typeof action.payload === "string") {
        const cart = state.cart;
        const key = action.payload;
        const objec: object = {};
        objec[key] = 1;
        cart.push(objec);
        state.cart = cart;
      }
      if (userId)
        setDoc(doc(db, "Users", userId), {
          cart: state.cart,
          like: state.like,
        });
    },
    DescreaseCart: (state, action) => {
      let i = state.cart.length - 1;
      const cart = state.cart;
      console.log(cart);
      while (i != -1) {
        const obj = state.cart[i];
        if (obj)
          if (Object.keys(obj)[0] == action.payload) {
            if (Object.values(obj)[0] > 1) {
              const key = action.payload;
              const objec: object = {};
              objec[key] = Object.values(obj)[0] - 1;
              cart[i] = objec;
            }
            state.cart = cart;
            break;
          }
        i--;
      }
      if (userId)
        setDoc(doc(db, "Users", userId), {
          cart: state.cart,
          like: state.like,
        });
    },
    RemoveCart: (state, action) => {
      const cart: object[] = [];
      state.cart.forEach((obj) => {
        if (Object.keys(obj)[0] !== action.payload) {
          cart.push(obj);
        }
      });

      state.cart = cart;
      if (userId) {
        setDoc(doc(db, "Users", userId), {
          cart: cart,
          like: state.like,
        });
      }
    },
  },
});

export const {
  ChangePlantsData,
  RemoveLike,
  AddLike,
  AddCart,
  RemoveCart,
  DescreaseCart,
} = PlantsSlice.actions;
export default PlantsSlice.reducer;
