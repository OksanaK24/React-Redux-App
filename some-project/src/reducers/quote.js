import {
    FETCH_QUOTE_START,
    FETCH_QUOTE_SUCCESS,
    FETCH_QUOTE_ERROR
} from "../actions/quote";

const initialState = {
    quote: null,
    isLoading: false,
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_QUOTE_START:
            return {
                ...state,
                isLoading: true
            }

        case FETCH_QUOTE_SUCCESS:
            return {
                ...state,
                quote: action.payload,
                isLoading: false
            }

        case FETCH_QUOTE_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }

        default:
            return state;
    }
}