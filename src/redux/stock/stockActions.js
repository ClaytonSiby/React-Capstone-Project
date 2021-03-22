import { FETCH_STOCKS_REQUEST, FETCH_STOCKS_SUCCESS, FETCH_STOCKS_FAILURE } from './stockTypes';
import axios from 'axios';

const fetchStocksRequest = () => { 
    return {
        type: FETCH_STOCKS_REQUEST
    }
}

const fetchStocksSuccess = stocks => {
    return {
        type: FETCH_STOCKS_SUCCESS,
        payload: stocks
    }
}

const fetchStocksFailure = error => {
    return {
        type: FETCH_STOCKS_FAILURE,
        payload: error
    }
}

const URL = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchStocks = () => {
    return dispatch => {
        dispatch(fetchStocksRequest);
        axios.get()
    }
}
