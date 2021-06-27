import { useLocation} from "react-router-dom"
import EmployeeCard from "./EmployeeCard";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllEmployees } from '../actions/companyActions';

export default function CompanyOverview(){
    const location = useLocation();
    let dispatch = useDispatch();
    const {address, revenue, phone, id} = location.state;
    let companyListState = useSelector(state => state.companyList);
    let [employeeList, setEmployeeList] = useState([]);

    useEffect(()=> {
        // console.log("current employees are");
        // console.log(companyListState.find(item => item.id === id));
        dispatch(getAllEmployees(id));
    },[])
    useEffect(() => {
        let currCompany = companyListState.find(item => item.id === id);
        if(currCompany){
            setEmployeeList(currCompany.employees);
        }
    },[companyListState])

    return (
        <div className="company-overview-container">
            <div className="go-back-btn">
                <Button variant="outlined"><Link className="link-style" to="/">Go Back</Link></Button>
            </div>
            <div className="profile-overview-container">
                <header>Profile Overview</header>
                <div className="profile-card-details">
                    <div className="profile-card-details__left">
                        <p className="bold">Address: </p>
                        <p>{address}</p>
                        <p className="bold">Revenue: </p>
                        <p>{revenue}</p>
                        <p className="bold">Phone: </p>
                        <p>{phone}</p>
                    </div>
                    <div className="profile-card-details__right">
                        <p className="bold">Total Employees: </p>
                        <p>{employeeList.length}</p>
                    </div>
                </div>
            </div>
            <div className="employee-list-container">
                <header>Employees</header>
                {employeeList && employeeList.length > 0 && employeeList.map(emp => <EmployeeCard key={emp.id} name={emp.name} address={emp.address} />)}
                {/* <EmployeeCard name="Bob McGuillicutty" address="1234 Story lane Neverland, Narnia 09876" /> */}
            </div>
        </div>
    )
}