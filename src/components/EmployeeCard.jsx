export default function EmployeeCard({name, address}) {
    return (
        <div className="employee-card-container">
            <header>{name}</header>
            <div className="employee-card-details">
                <p className="bold">Address: </p>
                <p>{address}</p>
            </div>
        </div>
    )
}