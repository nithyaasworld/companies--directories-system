import { UPDATE_BEGIN, UPDATE_ERROR, ADD_COMPANY_SUCCESS, ADD_ALL_COMPANY_SUCCESS, UPDATE_EMPLOYEE_LIST } from "../actions/companyActions";
import { addCompanyToDB } from "../api/firebaseMethods";

let initialState = {
  isUpdating: false,
    companyList: [],
    error: null,
};

export default function companyReducer(state = initialState, action) {
  switch (action.type) {
      case UPDATE_BEGIN: return { ...state, isUpdating: true };
      case ADD_COMPANY_SUCCESS: {
          let newCompanyList = state.companyList.slice(0);
          newCompanyList.push(action.payload);
          return { ...state, companyList: newCompanyList, isUpdating: false };
      };
      case UPDATE_ERROR: return { ...state, error: action.payload, isUpdating: false };
      case ADD_ALL_COMPANY_SUCCESS: return {...state, isUpdating: false, companyList: action.payload};
      case UPDATE_EMPLOYEE_LIST: {
        let companyListCopy = state.companyList.slice(0);
        companyListCopy.find(item => item.id === action.payload.id).employees = action.payload.employees;
        return {...state, companyList: companyListCopy, isUpdating: false};
      }
      default:
          return state ;
  }
}
