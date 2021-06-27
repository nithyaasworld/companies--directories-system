// export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
// export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

import { addCompanyToDB } from "../api/firebaseMethods";

// export const BEGIN_UPDATE = 'BEGIN_UPDATE';
export const ADD_COMPANY_BEGIN = 'ADD_COMPANY_BEGIN';
export const ADD_COMPANY_SUCCESS = 'ADD_COMPANY_SUCCESS';
export const ADD_COMPANY_ERROR = 'ADD_COMPANY_ERROR';

export const addCompanyBegin = () => {
    return {
        type: ADD_COMPANY_BEGIN,
    }
};
export const addCompanySuccess = (newItem) => {
    return {
        type: ADD_COMPANY_SUCCESS,
        payload: newItem,
    }
}
export const addCompanyError = (error) => {
    return {
        type: ADD_COMPANY_ERROR,
        payload: error,
    }
}
export const addCompany = (newItem) => {
    return async (dispatch) => {
        dispatch(addCompanyBegin());
        await addCompanyToDB(newItem).catch((e) => dispatch(addCompanyError(e.message)));
        dispatch(addCompanySuccess(newItem));
    }
}

// const updateBegin = () => {
//     return {
//         type: BEGIN_UPDATE
//     }
// };

// To simulate network delay
// let sleep = (time) => new Promise((resolve, reject) => setTimeout(() => resolve(), time));

// export const incrementAsync = () => {
//     return async (dispatch) => {
//         dispatch(updateBegin());
//         await sleep(2000);
//         dispatch(increment());
//     }
// };

// export const decrementAsync = () => {
//     return async (dispatch) => {
//         dispatch(updateBegin());
//         await sleep(2000);
//         dispatch(decrement());
//     }
// };