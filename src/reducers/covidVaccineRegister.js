const initialState = {
  data: [],
  isFetching: false,
  isError: false,
  error: null,
};

const covidVaccineRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COVIDVACCINEREGISTER":
      return {
        data: [],
        isFetching: true,
        isError: false,
      };
    case "FETCHED_COVIDVACCINEREGISTER":
      return {
        data: action.data,
        isFetching: false,
        isError: false,
      };
    case "COVIDVACCINEREGISTER_ERROR":
      return {
        error: action.error,
        isError: true,
        isFetching: false,
      };
    default:
      return state;
  }
};
export default covidVaccineRegisterReducer;
