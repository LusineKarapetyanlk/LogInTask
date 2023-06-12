import {
  ADD_USER,
  HAS_ERROR,
  SET_REGISTRATION_ERROR,
  SET_USER,
} from "./loginActionTypes";
import history from "../../history";

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const login = (email, pass) => {
  return async (dispatch) => {
    const data = JSON.parse(localStorage.getItem("Registrated Users Data"));

    if (data && data[email] && data[email].password === pass) {
      dispatch({
        type: SET_USER,
        payload: data[email],
      });
      localStorage.setItem("User Info", JSON.stringify(data[email]));
      history.push("/");
    } else {
      dispatch({
        type: HAS_ERROR,
        payload: true,
      });
    }
  };
};

export const getUser = () => async (dispatch) => {
  const userData = JSON.parse(localStorage.getItem("User Info"));

  dispatch({
    type: SET_USER,
    payload: userData || null,
  });
  if (!userData) {
    history.push("/sign-in");
  }
};

export const registaration = (email, pass, firstName, lastName) => {
  return async (dispatch) => {
    const newData = {
      [email]: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: pass,
      }, 
    };
    const data = JSON.parse(localStorage.getItem("Registrated Users Data"));
    if (data && data[email] === email) {
      dispatch({
        type: SET_REGISTRATION_ERROR,
        payload: true,
      });
    } else {
      dispatch({
        type: SET_REGISTRATION_ERROR,
        payload: false,
      });

      const allInfoData = { ...data, ...newData };
      localStorage.setItem(
        "Registrated Users Data",
        JSON.stringify(allInfoData)
      );
    return true ;
    }
  };
};
