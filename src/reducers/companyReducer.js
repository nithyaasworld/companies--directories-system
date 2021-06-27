import { ADD_COMPANY, ADD_COMPANY_BEGIN, ADD_COMPANY_ERROR, ADD_COMPANY_SUCCESS } from "../actions/companyActions";
import { addCompanyToDB } from "../api/firebaseMethods";

let initialState = {
  isUpdating: false,
    companyList: [],
    error: null,
};

export default function companyReducer(state = initialState, action) {
  switch (action.type) {
      case ADD_COMPANY_BEGIN: return { ...state, isUpdating: true };
      case ADD_COMPANY_SUCCESS: {
          let newCompanyList = state.companyList.slice(0);
          newCompanyList.push(action.payload);
          return { ...state, companyList: newCompanyList, isUpdating: false };
      };
      case ADD_COMPANY_ERROR: return { ...state, error: action.payload, isUpdating: false };
      default:
          return state ;
  }
}
