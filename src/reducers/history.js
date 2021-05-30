import {
    LOAD_HISTORY,
    ADD_ROW
} from '../action.constants';

const initialState = {
    columns: [
        { title: "Name", field: "fname" },
        { title: "Surname", field: "lname" },
        { title: "DOB", field: "dob" },
        { title: "Phone", field: "phone" },
        { title: "pcpCheck", field: "pcpCheck" },
        { title: "pcpname", field: "pcpname" },
        { title: "concernsAndSymp", field: "concernsAndSymp" },
        { title: "currHealthConcerns", field: "currHealthConcerns" }
    ],
    rows: [],
    page: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ROW:
            return {
                ...state,
                rows: [...state.rows, action.payload]
            };
        case LOAD_HISTORY:
            return {
                ...state
            };
        default:
            return state;
    }
};