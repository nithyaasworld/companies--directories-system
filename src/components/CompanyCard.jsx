export default function CompanyCard({name, address, revenue, phone}) {
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
            <footer><a href="#">Company Overview</a></footer>
        </div>
    )
}