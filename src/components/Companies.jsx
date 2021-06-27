import CompanyCard from "./CompanyCard";

export default function Companies() {
    return (
        <div className="companies-container">
            <h1>Companies</h1>
            <div className="list-of-companies-container">
                <CompanyCard name="Amazon" address="410 Terry Ave Seattle, WA 98109" revenue="100000" phone="(206)-266-1000" />
            </div>
        </div>
    )
}