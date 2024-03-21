import googleIcon from "../assets/googleIcon.svg";
import facebookIcon from "../assets/facebookIcon.svg";
import { useAppDispatch } from "../Redux/hook";
import { ChangeOnAuthWindow } from "../Redux/Slices/Auth";
function Auth() {
  const dispatch = useAppDispatch();
  return (
    <div className="Auth">
      <div className="Auth__block">
        <div className="Auth__login">
          <svg
            onClick={() => dispatch(ChangeOnAuthWindow(false))}
            className="Auth__close"
            width="18.000000"
            height="18.000000"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs>
              <clipPath id="clip9_947">
                <rect
                  id="X"
                  width="18.000000"
                  height="18.000000"
                  fill="white"
                  fill-opacity="0"
                />
              </clipPath>
            </defs>
            <g clip-path="url(#clip9_947)">
              <path
                id="Vector 139 (Stroke)"
                d="M3.16 3.17C3.39 2.94 3.76 2.94 3.99 3.17L9 8.17L14 3.17C14.23 2.94 14.6 2.94 14.83 3.17C15.05 3.39 15.05 3.76 14.83 3.99L9.82 9L14.83 14C15.05 14.23 15.05 14.6 14.83 14.82C14.6 15.05 14.23 15.05 14 14.82L9 9.82L3.99 14.82C3.76 15.05 3.39 15.05 3.16 14.82C2.94 14.6 2.94 14.23 3.16 14L8.17 9L3.16 3.99C2.94 3.76 2.94 3.39 3.16 3.17Z"
                fill="#46A358"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
            </g>
          </svg>

          <h3 className="Auth__title-block">
            <span className="Auth__title--active">Login</span> |
            <span className="Auth__title"> Register</span>
          </h3>
          <p className="Auth__description">
            Enter your username and password to login.
          </p>
          <input
            className="Auth__input"
            type="email"
            placeholder="almamun_uxui@outlook.com"
          />

          <input
            className="Auth__input"
            type="password"
            placeholder="Password"
          />
          <a href="" className="Auth__forgot">
            Forgot Password?
          </a>
          <button className="button Auth__button">Login</button>

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
        </div>
      </div>
    </div>
  );
}

export default Auth;
