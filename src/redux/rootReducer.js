import { combineReducers } from 'redux';
import stockReducer from './stock/stockReducer';

const rootReducer = combineReducers({
  stocksData: stockReducer,
});

export default rootReducer;
