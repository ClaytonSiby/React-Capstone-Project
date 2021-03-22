import {
  FETCH_STOCKS_REQUEST,
  FETCH_STOCKS_SUCCESS,
  FETCH_STOCKS_FAILURE
} from './stockTypes'

const initialState = {
  loading: false,
  stocks: [],
  error: ''
}

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCKS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_STOCKS_SUCCESS:
      return {
        ...state,
        loading: false,
        stocks: action.payload,
        error: ''
      }
    case FETCH_STOCKS_FAILURE:
      return {
        ...state,
        loading: false,
        stocks: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default stockReducer;
