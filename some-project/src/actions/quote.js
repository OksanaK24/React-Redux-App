import axios from "axios";

export const FETCH_QUOTE_START = "FETCH_QUOTE_START";
export const FETCH_QUOTE_SUCCESS = "FETCH_QUOTE_SUCCESS";
export const FETCH_QUOTE_ERROR = "FETCH_QUOTE_ERROR";

export function fetchQuote() {
  return dispatch => {
    dispatch({ type: FETCH_QUOTE_START });

    axios
      .get("https://api.quotable.io/random")
      .then(res => {
        console.log(res.data)
        dispatch({ type: FETCH_QUOTE_SUCCESS, payload: res.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_QUOTE_ERROR, payload: error });
      });
  };
}
