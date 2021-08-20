import store from "../store";
// import axios from "../cores/axios/index";
import {
  firebase_push,
  firebase_readdata,
  firebase_update,
  firebase_delete,
} from "../cores/firebase/index";

const firebaseRef = "vaccineRegister";

export const fetch_post = () => {
  return {
    type: "FETCH_COVIDVACCINEREGISTER",
  };
};

export const receive_post = (post) => {
  return {
    type: "FETCHED_COVIDVACCINEREGISTER",
    data: post,
  };
};

export const receive_error = (error) => {
  return {
    type: "COVIDVACCINEREGISTER_ERROR",
    error: error,
  };
};

export const getCovidVaccineRegister = () => {
  store.dispatch(fetch_post());
  return async (dispatch, getState) => {
    try {
      const data = await firebase_readdata(firebaseRef);
      dispatch(receive_post(data));
    } catch (error) {
      dispatch(receive_error(error));
    }
  };
};

export const createCovidVaccineRegister = (data) => {
  store.dispatch(fetch_post());
  return async (dispatch, getState) => {
    try {
      firebase_push(data, firebaseRef);
      const firebase_data = await firebase_readdata(firebaseRef);
      dispatch(receive_post(firebase_data));
    } catch (error) {
      dispatch(receive_error(error));
    }
  };
};

export const editCovidVaccineRegister = (key, data) => {
  store.dispatch(fetch_post());
  return async (dispatch, getState) => {
    try {
      firebase_update(key, data, firebaseRef);
      const firebase_data = await firebase_readdata(firebaseRef);
      dispatch(receive_post(firebase_data));
    } catch (error) {
      dispatch(receive_error(error));
    }
  };
};

export const deleteCovidVaccineRegister = (key) => {
  store.dispatch(fetch_post());
  return async (dispatch, getState) => {
    try {
      firebase_delete(key, firebaseRef);
      const firebase_data = await firebase_readdata(firebaseRef);
      dispatch(receive_post(firebase_data));
    } catch (error) {
      dispatch(receive_error(error));
    }
  };
};
