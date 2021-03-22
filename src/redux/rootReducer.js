import { combineReducers } from 'redux';
import stockReducer from './stock/stockReducer';

const rootReducer = combineReducers({
  stock: stockReducer,
});

export default rootReducer;
