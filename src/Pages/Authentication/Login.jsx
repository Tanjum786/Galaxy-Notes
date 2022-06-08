import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../context";
import "./Authentication.css";

export const Login = () => {
  const {
    authState,
    AuthDispatch,
    LoginPage,
    showpasswordFun,
    showpassword,
  } = useAuth();
  const { email, password, isSubmit } = authState;
  const LoginHandler = (e) => {
    e.preventDefault();
    AuthDispatch({ type: "LOGIN_SUBMIT" });
  };

  const gusestLoginHandler = (e) => {
    e.preventDefault();
    AuthDispatch({
      type: "GUEST_LOGIN",
      payload: { email: "guest@gmail.com", password: "tanjum786" },
    });
  };

  useEffect(() => {
    if (isSubmit) {
      LoginPage(email, password);
    }
  }, [isSubmit]);

  return (
    <>
      <div className="e_container">
        <section className="e_login_signup_container dis_flex">
          <form onSubmit={(e) => LoginHandler(e)}>
            <div className="login_signup_container gap_s dis_flex">
              <h1 className="login_signup_name">Login</h1>
              <label htmlFor="userEmail">Email Address</label>
              <input
                type="email"
                name="email"
                id="userEmail"
                className="input_filed padding_small"
                placeholder="demo@demo.com"
                value={email}
                onChange={(e) =>
                  AuthDispatch({ type: "EMAIL", payload: e.target.value })
                }
                required
              />
              <label htmlFor="userPassword">
                Password*
              </label>
              <div className="showpassword_container">
                <input
                  type={showpassword}
                  name="text"
                  id="userPassword"
                  className="input_filed padding_small password_filed"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) =>
                    AuthDispatch({ type: "PASSWORD", payload: e.target.value })
                  }
                  required
                />
                {showpassword === "password" ? (
                  <i className="fa-solid fa-eye-slash eye_slash" onClick={showpasswordFun}></i>
                ) : (
                  <i
                    className="fa-solid fa-eye eye_slash"
                    onClick={showpasswordFun}
                  ></i>
                )}
              </div>

              <button
                type="submit"
                className="login_btn btn_style guest-btn"
                onClick={(e) => gusestLoginHandler(e)}
              >
                Enter Guest Credentials
              </button>
              <button type="submit" className="login_btn btn_style">
                Login
              </button>
              <p className="new_account_link font_small">
                Not a user yet ?
                <Link to="/signup" className="alert_primary">
                  Creat account
                </Link>
              </p>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};
