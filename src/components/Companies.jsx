import CompanyCard from "./CompanyCard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCompanies } from "../actions/companyActions";
import { useSelector } from "react-redux";

export default function Companies() {
  let dispatch = useDispatch();
  let companyListState = useSelector((state) => state.companyList);
  useEffect(() => {
    dispatch(getAllCompanies());
  }, []);
  return (
    <div className="companies-container">
      <h1>Companies</h1>
      <div className="list-of-companies-container">
        {companyListState.length > 0 ? (
          companyListState.map((company) => {
            return (
              <CompanyCard
                key={company.id}
                id={company.id}
                name={company.name}
                address={company.address}
                revenue={company.revenue}
                phone={company.phone}
              />
            );
          })
        ) : (
          <div>"There are currently no companies to review"</div>
        )}
      </div>
    </div>
  );
}
