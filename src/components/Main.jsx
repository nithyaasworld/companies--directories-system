import Companies from "./Companies";
import CreateNewCompany from "./CreateNewCompany";
import CreateNewPerson from "./CreateNewPerson";

export default function Main() {
  return (
    <div className="container">
      <Companies />
      <div className="side-bar-elements">
        <CreateNewCompany />
        <CreateNewPerson />
      </div>
    </div>
  );
}
