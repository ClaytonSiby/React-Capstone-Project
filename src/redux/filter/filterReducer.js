import { CHANGE_FILTER } from './filterTypes';

const filterReducer = (state = 'AAPL,FB,GOOG,AMZN,MSFT', action) => {
    switch(action.type) {
        case CHANGE_FILTER:
            return action.payload
        default: return state
    }
}

export default filterReducer;
