import { combineReducers } from "redux";
import GithubInfoReducer from "./githubInfo";
import covidVaccineRegisterReducer from "./covidVaccineRegister";

const rootReducers = combineReducers({
  githubInfo: GithubInfoReducer,
  covidVaccineRegister: covidVaccineRegisterReducer,
});
export default rootReducers;

// const initialState = {
//   data: {},
//   isFetching: false,
//   isError: false,
// };

// const asyncReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "FETCH_USER":
//       return Object.assign({}, state, {
//         isFetching: true,
//         data: {},
//         isError: false,
//       });
//     case "FETCHED_USER":
//       return Object.assign({}, state, {
//         isFetching: false,
//         data: action.data,
//         isError: false,
//       });
//     case "RECEIVE_ERROR":
//       return Object.assign({}, state, {
//         isError: true,
//         isFetching: false,
//       });
//     default:
//       return state;
//   }
// };
// export default asyncReducer;
