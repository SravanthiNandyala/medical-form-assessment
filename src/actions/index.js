import {
    LOAD_HISTORY,
    ADD_ROW
} from '../action.constants';

export const loadHistory = () => {
    return {
        type: LOAD_HISTORY
    }
};

export const addRow = (data) => {
    return {
        type: ADD_ROW,
        payload: data
    }
};
