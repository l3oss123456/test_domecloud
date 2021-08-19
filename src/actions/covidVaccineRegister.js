import store from "../store";
import axios from "../cores/axios/index";
// import axios from "axios";

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

export const createCovidVaccineRegister = (data) => {
  store.dispatch(fetch_post());
  return async (dispatch, getState) => {
    try {
      let _covidVaccineRegister = getState().covidVaccineRegister;
      _covidVaccineRegister.data = [..._covidVaccineRegister.data, data];
      console.log("_covidVaccineRegister", _covidVaccineRegister.data);
      dispatch(receive_post(_covidVaccineRegister));
      // const resp = await axios("get", `https://api.github.com/users/${user}`);
      // if (resp.status === 200) {
      //   dispatch(receive_post(resp.data));
      // } else {
      //   dispatch(receive_error("error"));
      // }
    } catch (error) {
      dispatch(receive_error(error));
    }
  };
  // const user = username.replace(/\s/g, "");
  // return async (dispatch, getState) => {
  //   try {
  //     const resp = await axios("get", `https://api.github.com/users/${user}`);
  //     if (resp.status === 200) {
  //       dispatch(receive_post(resp.data));
  //     } else {
  //       dispatch(receive_error("error"));
  //     }
  //   } catch (error) {
  //     dispatch(receive_error(error));
  //   }
  // };
};

// export const thunk_action_creator = (username) => {
//   const user = username.replace(/\s/g, "");
//   store.dispatch(fetch_post());
//   return function (dispatch, getState) {
//     return fetch(`https://api.github.com/users/${user}`)
//       .then((data) => data.json())
//       .then((data) => {
//         if (data.message === "Not Found") {
//           throw new Error("No such user found!");
//         } else dispatch(receive_post(data));
//       })
//       .catch((err) => dispatch(receive_error()));
//   };
// };
