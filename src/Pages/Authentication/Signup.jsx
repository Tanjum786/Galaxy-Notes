import React from "react";
import { Link } from "react-router-dom";
import "./Authentication.css";

export const Signup = () => {
  return (
    <>
      <div className="e_container">
        <section className="e_login_signup_container dis_flex">
          <form>
            <div className="login_signup_container signup_container gap_s dis_flex">
              <h1 className="login_signup_name">Sign Up</h1>
              <label htmlFor="firstname">
                First Name<small className="star_color font_small">*</small>
              </label>
              <input
                type="text"
                name="text"
                className="input_filed padding_small"
                placeholder="Enter you first name"
                id="firstname"
                required
              />
              <label htmlFor="lastname">
                Last Name<small className="star_color font_small">*</small>
              </label>
              <input
                type="text"
                name="text"
                className="input_filed padding_small"
                placeholder="Enter your Last name"
                required
              />
              <label htmlFor="Email">
                Email<small className="star_color font_small">*</small>
              </label>
              <input
                type="email"
                name="email"
                className="input_filed padding_small"
                placeholder="demo@demo.com"
              />
              <label htmlFor="password_singup">
                Password<small className="star_color font_small">*</small>
              </label>
              <input
                type="text"
                name="password"
                className="input_filed padding_small"
                placeholder="Enter your password"
                required
              />
              <label htmlFor="Confirm_pass">
                Confirm password
                <small className="star_color font_small">*</small>
              </label>
              <div className="showpassword_container">
                <input
                  type="password"
                  name="password"
                  className="input_filed padding_small password_filed"
                  placeholder="Enter your Password again"
                  required
                />
                <i className="fa-solid fa-eye-slash eye_slash"></i>
              </div>
              <div className="checkbox_section">
                <input
                  type="checkbox"
                  name="checkbox"
                  className="input_filed padding_small"
                  id="terms"
                  required
                />
                <label htmlFor="terms"> I accept all Terms & Conditions</label>
              </div>
              <Link to="/notes">
                <button type="submit" className="login_btn  btn_style">
                  Register
                </button>
              </Link>
              <p className="new_account_link font_small">
                Already have account?{" "}
                <Link to="/login" className="alert_primary">
                  Login Here
                </Link>
              </p>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};
