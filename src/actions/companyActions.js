import { addCompanyToDB, getAllCompaniesFromDB, addNewPersonToDB, getAllEmployeesFromDB } from "../api/firebaseMethods";

export const UPDATE_BEGIN = 'UPDATE_BEGIN';
export const ADD_COMPANY_SUCCESS = 'ADD_COMPANY_SUCCESS';
export const UPDATE_ERROR = 'UPDATE_ERROR';
export const ADD_ALL_COMPANY_SUCCESS = 'ADD_ALL_COMPANY_SUCCESS';
export const UPDATE_EMPLOYEE_LIST = 'UPDATE_EMPLOYEE_LIST';

export const updateBegin = () => {
    return {
        type: UPDATE_BEGIN,
    }
};
export const addCompanySuccess = (newItem) => {
    return {
        type: ADD_COMPANY_SUCCESS,
        payload: newItem,
    }
}
export const updateError = (error) => {
    return {
        type: UPDATE_ERROR,
        payload: error,
    }
}
export const addAllCompanySuccess = (data) => {
    return {
        type: ADD_ALL_COMPANY_SUCCESS,
        payload: data,
    }
}
export const updateEmployeeList = (payload) => {
    return {
        type: UPDATE_EMPLOYEE_LIST,
        payload: payload,
    }
}

export const addCompany = (newItem) => {
    return async (dispatch) => {
        dispatch(updateBegin());
        await addCompanyToDB(newItem)
        .then(() => dispatch(getAllCompanies()))
        .catch((e) => dispatch(updateError(e.message)));
    }
}
export const getAllCompanies = () => {
    return async (dispatch) => {
        dispatch(updateBegin());
        await getAllCompaniesFromDB()
        .then((snapshot) => dispatch(addAllCompanySuccess(snapshot.docs.map(doc => {
            let docObj = doc.data();
            docObj["id"] = doc.id;
            return docObj;
        }))))
        .catch((e) => dispatch(updateError(e.message)));
    }
}
export const addNewPerson = ({id, name, address}) => {
    return async (dispatch) => {
        dispatch(updateBegin());
        await addNewPersonToDB({id, name, address})
        .then((snapshot) => dispatch(addAllCompanySuccess(snapshot.docs.map(doc => {
            let docObj = doc.data();
            docObj["id"] = doc.id;
            return docObj;
        }))))
        .catch((e) => dispatch(updateError(e.message)));
    }
}
export const getAllEmployees = (companyID) => {
    return async (dispatch) => {
        dispatch(updateBegin());
        await getAllEmployeesFromDB(companyID)
        .then((snapshot) => {
            let employeesList = snapshot.docs.map(doc => {
                let docObj = doc.data();
                docObj["id"] = doc.id;
                return docObj;
            })
            dispatch(updateEmployeeList({id: companyID, employees: employeesList}));
        })
        .catch(e => dispatch(updateError(e.message)));
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