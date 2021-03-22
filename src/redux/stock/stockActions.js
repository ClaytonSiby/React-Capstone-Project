import axios from 'axios';
import { FETCH_STOCKS_REQUEST, FETCH_STOCKS_SUCCESS, FETCH_STOCKS_FAILURE } from './stockTypes';

const fetchStocksRequest = () => ({
  type: FETCH_STOCKS_REQUEST,
});

const fetchStocksSuccess = stocks => ({
  type: FETCH_STOCKS_SUCCESS,
  payload: stocks,
});

const fetchStocksFailure = error => ({
  type: FETCH_STOCKS_FAILURE,
  payload: error,
});

const URL = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_STOCKS_API_KEY;

const fetchStocks = () => dispatch => {
  dispatch(fetchStocksRequest());
  axios.get(`${URL}limit=50&apikey=${API_KEY}`)
    .then(response => {
      dispatch(fetchStocksSuccess(response));
    })
    .catch(error => {
      dispatch(fetchStocksFailure(error.message));
    });
};

export default fetchStocks;
