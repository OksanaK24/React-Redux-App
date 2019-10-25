import axios from "axios";

export const FETCH_CALENDAR_START = "FETCH_CALENDAR_START";
export const FETCH_CALENDAR_SUCCESS = "FETCH_CALENDAR_SUCCESS";
export const FETCH_CALENDAR_ERROR = "FETCH_CALENDAR_ERROR";

export function fetchCalendar() {
  return dispatch => {
    dispatch({ type: FETCH_CALENDAR_START });

    axios
      .get("https://api.abalin.net/get/today")
      .then(res => {
        dispatch({ type: FETCH_CALENDAR_SUCCESS, payload: res.data.message });
      })
      .catch(error => {
        dispatch({ type: FETCH_CALENDAR_ERROR, payload: error });
      });
  };
}
