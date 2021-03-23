import { combineReducers } from 'redux';
import stockReducer from './stock/stockReducer';
import filterReducer from './filter/filterReducer';

const rootReducer = combineReducers({
  stocksData: stockReducer,
  filter: filterReducer
});

export default rootReducer;
