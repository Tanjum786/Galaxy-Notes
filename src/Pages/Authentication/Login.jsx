import React from "react";
import { Link } from "react-router-dom";
import './Authentication.css'

export const Login = () => {
  return (
    <>
      <div className="e_container">
        <section className="e_login_signup_container dis_flex">
          <form>
            <div className="login_signup_container gap_s dis_flex">
              <h1 className="login_signup_name">Login</h1>
              <label htmlFor="userEmail">Email Address</label>
              <input
                type="email"
                name="email"
                id="userEmail"
                className="input_filed padding_small"
                placeholder="demo@demo.com"
                required
              />
              <label htmlFor="useonClick={showiconfun}rPassword">
                Password*
              </label>
              <div className="showpassword_container">
                <input
                  type="text"
                  name="password"
                  id="userPassword"
                  className="input_filed padding_small password_filed"
                  placeholder="Enter your Password"
                  required
                />
                <i
                  className="fa-solid fa-eye-slash eye_slash"
                ></i>
              </div>
              <Link to="" className="forget_password">
                <span>Forgot password ?</span>
              </Link>
              <button type="submit" className="login_btn btn_style">
                Login
              </button>
              <p className="new_account_link font_small">
                Not a user yet ? <Link to="/signup" className="alert_primary">
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
