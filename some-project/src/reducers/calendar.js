import {
    FETCH_CALENDAR_START,
    FETCH_CALENDAR_SUCCESS,
    FETCH_CALENDAR_ERROR
} from "../actions/calendar";

const initialState = {
    event: null,
    isLoading: false,
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CALENDAR_START:
            return {
                ...state,
                isLoading: true
            }

        case FETCH_CALENDAR_SUCCESS:
            return {
                ...state,
                event: action.payload,
                isLoading: false
            }

        case FETCH_CALENDAR_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
    }
}