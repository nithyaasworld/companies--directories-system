import Companies from "./Companies";
import CreateNewCompany from "./CreateNewCompany";
import CreateNewPerson from "./CreateNewPerson";
import { useSelector } from 'react-redux';

export default function Main() {
  let companyListState = useSelector(state => state.companyList);
  return (
    <div className="container">
      <Companies />
      <div className="side-bar-elements">
        <CreateNewCompany />
        {companyListState.length > 0 && <CreateNewPerson />}
      </div>
    </div>
  );
}
