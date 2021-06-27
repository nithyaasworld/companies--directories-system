import { Link } from "react-router-dom";
export default function CompanyCard({ name, address, revenue, phone, id }) {
  return (
    <div className="company-card-container">
      <header>{name}</header>
      <div className="company-card-details">
        <p className="bold">Address: </p>
        <p>{address}</p>
        <p className="bold">Revenue: </p>
        <p>{revenue}</p>
        <p className="bold">Phone: </p>
        <p>{phone}</p>
      </div>
      <footer>
        <Link
          to={{
            pathname: `/company-overview/${id}`,
            state: { name, address, revenue, phone, id },
          }}
        >
          Company Overview
        </Link>
      </footer>
    </div>
  );
}
