import axios from "axios";
import { createContext, useContext, useState, useReducer } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { authReducer } from "../Reducer/authReducer";

const authcontext = createContext();
const useAuth = () => useContext(authcontext);

const AuthProvider = ({ children }) => {
  const [userDetailes, setUserDetailes] = useState({
    token: "",
    user: {},
  });
  const showpasswordFun = () => {
    showpassword === "password"
      ? setShowpassword("text")
      : setShowpassword("password");
  };

  const [showpassword, setShowpassword] = useState("password");
  const navigate = useNavigate();
  const location = useLocation();
  const [authState, AuthDispatch] = useReducer(authReducer, {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    isSubmit: false,
  });

  const Signup = async (
    email,
    firstName,
    lastName,
    password,
    confirmPassword,
    checkUserDetailes,
    checkPassword
  ) => {
    if (checkUserDetailes()) {
      if (checkPassword()) {
        try {
          const response = await axios.post("/api/auth/signup", {
            email,
            firstName,
            lastName,
            password,
            confirmPassword,
          });
          console.log(response)
          navigate(-2);
          toast.success(`${firstName} successfully created account`);
          localStorage.setItem("token", response.data.encodedToken);
          localStorage.setItem(
            "users",
            JSON.stringify(response.data.createdUser)
          );
          setUserDetailes({
            ...userDetailes,
            token: response.data.encodedToken,
            user: response.data.createdUser,
          });
        } catch (error) {
          console.log(error)
          toast.error(error.response.data.errors[0]);
        }
      }
    }
  };

  const LoginPage = async (email, password) => {
    if (password !== "" && email !== "") {
      try {
        const response = await axios.post("/api/auth/login", {
          email,
          password,
        });
        if (response.status === 200) {
          localStorage.setItem("token", response.data.encodedToken);
          localStorage.setItem(
            "users",
            JSON.stringify(response.data.foundUser)
          );
          navigate(location?.state?.from?.pathname || "/notes", {
            replace: true,
          });
          toast.success("Login Successfully")
          setUserDetailes({
            ...userDetailes,
            user: response.data.foundUser,
            token: response.data.encodedToken,
          });
        } else {
          toast.warn("somthing went wrong");
        }
      } catch (error) {
        toast.error(error.response.data.errors[0]);
      }
    }
  };
  return (
    <authcontext.Provider
      value={{
        Signup,
        LoginPage,
        authState,
        AuthDispatch,
        userDetailes,
        setUserDetailes,
        setShowpassword,
        showpasswordFun,
        showpassword,
      }}
    >
      {children}
    </authcontext.Provider>
  );
};

export { AuthProvider, useAuth };
