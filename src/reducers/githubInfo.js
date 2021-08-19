const initialState = {
  data: {},
  isFetching: false,
  isError: false,
  error: null,
};

const githubInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GITHUBINFO":
      return {
        isFetching: true,
        data: {},
        isError: false,
      };
    // return Object.assign({}, state, {
    //   isFetching: true,
    //   data: {},
    //   isError: false,
    // });
    case "FETCHED_GITHUBINFO":
      return {
        isFetching: false,
        data: action.data,
        isError: false,
      };
    // return Object.assign({}, state, {
    //   isFetching: false,
    //   data: action.data,
    //   isError: false,
    // });
    case "GITHUBINFO_ERROR":
      return {
        isError: true,
        isFetching: false,
        error: action.error,
      };
    // return Object.assign({}, state, {
    //   isError: true,
    //   isFetching: false,
    //   error: action.error,
    // });
    default:
      return state;
  }
};
export default githubInfoReducer;
