import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context";
import "./Authentication.css";

export const Signup = () => {
  const { Signup, authState, AuthDispatch, showpasswordFun, showpassword } =
    useAuth();
  const { firstName, lastName, email, password, confirmPassword, isSubmit } =
    authState;

  const signupHandler = (e) => {
    e.preventDefault();
    AuthDispatch({ type: "SUBMIT" });
  };

  const checkUserDetailes = () => {
    return (
      email !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      password !== "" &&
      confirmPassword !== ""
    );
  };

  const checkPassword = () => {
    if (password === confirmPassword) {
      return true;
    } else {
      toast.error("Password are not matched");
      return false;
    }
  };

  useEffect(() => {
    Signup(
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
      checkPassword,
      checkUserDetailes
    );
  }, [isSubmit]);

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
                name="firstName"
                className="input_filed padding_small"
                placeholder="Enter your first name"
                id="firstname"
                value={firstName}
                onChange={(e) =>
                  AuthDispatch({
                    type: "USER-DETAILES",
                    payload: e.target.value,
                    name: e.target.name,
                  })
                }
                required
              />
              <label htmlFor="lastname">
                Last Name<small className="star_color font_small">*</small>
              </label>
              <input
                type="text"
                name="lastName"
                className="input_filed padding_small"
                placeholder="Enter your Last name"
                value={lastName}
                onChange={(e) =>
                  AuthDispatch({
                    type: "USER-DETAILES",
                    payload: e.target.value,
                    name: e.target.name,
                  })
                }
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
                value={email}
                onChange={(e) =>
                  AuthDispatch({
                    type: "USER-DETAILES",
                    payload: e.target.value,
                    name: e.target.name,
                  })
                }
              />
              <label htmlFor="password_singup">
                Password<small className="star_color font_small">*</small>
              </label>
              <input
                type="text"
                name="password"
                className="input_filed padding_small"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  AuthDispatch({
                    type: "USER-DETAILES",
                    payload: e.target.value,
                    name: e.target.name,
                  })
                }
                required
              />
              <label htmlFor="Confirm_pass">
                Confirm password
                <small className="star_color font_small">*</small>
              </label>
              <div className="showpassword_container">
                <input
                  type={showpassword}
                  name="confirmPassword"
                  className="input_filed padding_small password_filed"
                  placeholder="Enter your Password again"
                  value={confirmPassword}
                  onChange={(e) =>
                    AuthDispatch({
                      type: "USER-DETAILES",
                      payload: e.target.value,
                      name: e.target.name,
                    })
                  }
                  required
                />

                {showpassword === "password" ? (
                  <i
                    className="fa-solid fa-eye-slash eye_slash"
                    onClick={showpasswordFun}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-eye eye_slash"
                    onClick={showpasswordFun}
                  ></i>
                )}
              </div>
              <button
                type="submit"
                className="login_btn  btn_style"
                onClick={(e) => signupHandler(e)}
              >
                Register
              </button>
              <p className="new_account_link font_small">
                Already have account?
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
