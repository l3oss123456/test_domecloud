import * as R from "ramda";
import history from "./history";
// import { jwtEncode } from "../cores/jsonwebtoken/index";

const objectToQueryString = (obj) => {
  let str = [];
  let key;
  for (key in obj) {
    // const token = jwtEncode(obj[key]);
    if (obj.hasOwnProperty(key) && obj[key]) {
      // str.push(key + "=" + token);
      str.push(key + "=" + obj[key]);
    }
  }
  return str.join("&");
};

const setArrayToObjectQueryString = (arr, isRefresh) => {
  let obj = {};
  let i;
  for (i in arr) {
    arr[i] = arr[i].split("=");
    obj[arr[i][0]] = arr[i][1];
  }
  if (isRefresh) {
    let key;
    for (key in obj) {
      if (key !== "page" && key !== "limit") {
        obj = R.omit([key], obj);
      }
    }
  }
  return obj;
};

const pushUrl = (queryStringObj, isRefresh) => {
  try {
    const strUrl = window.location.href.split("?");
    if (strUrl[1]) {
      const arrQueryString = strUrl[1].split("&");
      if (arrQueryString) {
        const oldQueryStringObj = setArrayToObjectQueryString(
          arrQueryString,
          isRefresh
        );
        const newQueryStringObj = { ...oldQueryStringObj, ...queryStringObj };
        const queryString = `?${objectToQueryString(newQueryStringObj)}`;
        history.push(queryString);
      }
    } else {
      const queryString = `?${objectToQueryString(queryStringObj)}`;
      history.push(queryString);
    }
  } catch (error) {
    console.log("error from pushUrl : ", error);
  }
};
export default pushUrl;
