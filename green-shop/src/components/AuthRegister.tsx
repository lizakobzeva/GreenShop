import googleIcon from "../assets/googleIcon.svg";
import facebookIcon from "../assets/facebookIcon.svg";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useAppDispatch } from "../Redux/hook";
import { ChangeOnAuthWindow, SetUser } from "../Redux/Slices/Auth";
import { setDoc, getFirestore, doc } from "firebase/firestore";
import app from "../firebase";

const AuthRegister = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<React.ChangeEvent<HTMLInputElement>>();
  const [password, setPassword] =
    useState<React.ChangeEvent<HTMLInputElement>>();
  const [repassword, setRePassword] =
    useState<React.ChangeEvent<HTMLInputElement>>();
  const db = getFirestore(app);

  const UserCartBase = async (userId = "") => {
    await setDoc(doc(db, "Users", userId), {
      cart: [],
      like: [],
    });
  };

  const handleRegister = (
    email: React.ChangeEvent<HTMLInputElement>,
    password: React.ChangeEvent<HTMLInputElement>
  ) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(
      auth,
      email.target.value,
      password.target.value
    )
      .then(({ user }) => {
        if (user.uid) UserCartBase(user.uid);
        dispatch(
          SetUser({
            email: user.email,
            id: user.uid,
            token: user.getIdToken(),
          })
        );
      })
      .catch(() => {
        alert("Не получилось зарегестрироваться, попробуйте еще раз");
      });
    dispatch(ChangeOnAuthWindow(false));
  };

  return (
    <form>
      <p className="Auth__description">
        Enter your email and password to register.
      </p>

      <input
        onChange={(e) => setEmail(e)}
        className="Auth__input"
        type="email"
        placeholder="Enter your email address"
      />

      <input
        onChange={(e) => setPassword(e)}
        className="Auth__input"
        type="password"
        placeholder="Password"
      />
      <input
        onChange={(e) => setRePassword(e)}
        className="Auth__input"
        type="password"
        placeholder="Confirm Password"
      />

      <button
        onClick={() => {
          if (password?.target.value == repassword?.target.value) {
            if (email && password) {
              handleRegister(email, password);
            }
          } else {
            alert("Ваши пароли не совпадают");
          }
        }}
        type="button"
        className="button Auth__button"
      >
        Register
      </button>

      <div className="Auth__OrBlock">
        <hr className="Auth__Or-line" />
        <span>Or register with</span>
        <hr className="Auth__Or-line" />
      </div>

      <button className="Auth__button Auth__button--light">
        <img src={googleIcon} alt="" />
        Login with Google
      </button>
      <button className="Auth__button Auth__button--light">
        <img src={facebookIcon} alt="" />
        Login with Facebook
      </button>
    </form>
  );
};

export default AuthRegister;
