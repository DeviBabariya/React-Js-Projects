import axios from "axios";

const API_URL = "http://localhost:3000/users";

// Action creators
const loading = () => ({ type: "LOADING" });
const errorMsg = (msg) => ({ type: "ERROR", payload: msg });
const loginSuc = (user) => ({ type: "LOGIN_SUC", payload: user });
const registerSuc = () => ({ type: "REGISTER" });
const logOut = () => ({ type: "LOGOUT_SUC" });

// Register user
export const registerAsync = (data) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      // Check if email already exists
      const res = await axios.get(`${API_URL}?email=${data.email}`);
      if (res.data.length > 0) {
        return dispatch(errorMsg("Email already exists"));
      }

      // Save new user
      await axios.post(API_URL, data);
      dispatch(registerSuc());
    } catch (error) {
      console.error(error);
      dispatch(errorMsg("Registration failed"));
    }
  };
};

// Login user
export const signInAsync = (data) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const res = await axios.get(
        `${API_URL}?email=${data.email}&password=${data.password}`
      );

      if (res.data.length === 0) {
        return dispatch(errorMsg("Invalid credentials"));
      }

      const user = res.data[0];
      sessionStorage.setItem("user", JSON.stringify(user));
      dispatch(loginSuc(user));
    } catch (error) {
      console.error(error);
      dispatch(errorMsg("Login failed"));
    }
  };
};

// Logout
export const logOutAsync = () => {
  return async (dispatch) => {
    try {
      sessionStorage.removeItem("user");
      dispatch(logOut());
    } catch (error) {
      console.error(error);
      dispatch(errorMsg("Logout failed"));
    }
  };
};
