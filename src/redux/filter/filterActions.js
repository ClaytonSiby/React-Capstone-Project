import { CHANGE_FILTER } from './filterTypes';

const changeFilter = filt => {
    return {
        type: CHANGE_FILTER,
        payload: filt
    }
}

export default changeFilter;
