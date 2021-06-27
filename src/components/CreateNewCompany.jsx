// import {useDispatch, useSelector} from "react-redux";
// import {decrementAsync, incrementAsync} from "../actions/counterActions";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addCompany } from '../actions/companyActions';

export default function CreateNewCompany() {
    // let {value, isUpdating} = useSelector(state => state);
    let dispatch = useDispatch();
    let companyListState = useSelector(state => state.companyList);
  
    let [name, setName] = useState("");
    let [address, setAddress] = useState("");
    let [revenue, setRevenue] = useState("");
    let [phone, setPhone] = useState("");

    const formSubmitHandler = (e) => {
        e.preventDefault();
        let companyObj = { name, address, revenue, phone };
        console.log(companyObj);
        dispatch(addCompany(companyObj));
        setName("");
        setAddress("");
        setRevenue("");
        setPhone("");
    }

    useEffect(() => {
        console.log(companyListState);
    }, [companyListState])
    return (
        <div className="create-new-company-container">
            <h2>Create new Company</h2>
            <form className="create-new-company-form-container">
                <TextField value={name} onChange={(e) => setName(e.target.value)} id="filled-basic" label="Name" variant="filled" />
                <TextField value={address} onChange={(e) => setAddress(e.target.value)} id="filled-basic" label="Address" variant="filled" />
                <TextField value={revenue} onChange={(e) => setRevenue(e.target.value)} id="filled-basic" label="Revenue" variant="filled" />
                <TextField value={phone} onChange={(e) => setPhone(e.target.value)} id="filled-basic" label="Phone" variant="filled" />
                <Button onClick={(e) => formSubmitHandler(e) } variant="contained">Save</Button>
            </form>
        </div>
    )
}