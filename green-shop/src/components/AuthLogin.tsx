import { useAppDispatch } from "../Redux/hook";
import googleIcon from "../assets/googleIcon.svg";
import facebookIcon from "../assets/facebookIcon.svg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { ChangeOnAuthWindow, SetUser } from "../Redux/Slices/Auth";

const AuthLogin = () => {
  const [email, setEmail] = useState<React.ChangeEvent<HTMLInputElement>>();
  const [password, setPassword] =
    useState<React.ChangeEvent<HTMLInputElement>>();
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    const auth = getAuth();
    if (email && password) {
      signInWithEmailAndPassword(
        auth,
        email.target.value,
        password.target.value
      )
        .then(({ user }) => {
          console.log(user),
            dispatch(
              SetUser({
                email: user.email,
                id: user.uid,
                token: user.getIdToken(),
              })
            );
        })
        .catch(() => {
          alert("Не получилось войти, попробуйте еще раз");
        });
      dispatch;
      dispatch(ChangeOnAuthWindow(false));
    }
  };
  return (
    <form>
      <p className="Auth__description">
        Enter your email and password to login.
      </p>
      <input
        onChange={(e) => setEmail(e)}
        className="Auth__input"
        type="email"
        placeholder="almamun_uxui@outlook.com"
      />

      <input
        onChange={(e) => setPassword(e)}
        className="Auth__input"
        type="password"
        placeholder="Password"
      />
      <a href="" className="Auth__forgot">
        Forgot Password?
      </a>
      <button
        onClick={handleLogin}
        type="submit"
        className="button Auth__button"
      >
        Login
      </button>

      <div className="Auth__OrBlock">
        <hr className="Auth__Or-line" />
        <span>Or login with</span>
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

export default AuthLogin;
