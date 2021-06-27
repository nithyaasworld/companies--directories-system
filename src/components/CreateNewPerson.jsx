import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useSelector } from 'react-redux';
import { useRef } from "react";
import { useDispatch } from 'react-redux';
import { addNewPerson } from "../actions/companyActions";

export default function CreateNewPerson() {
    let dispatch = useDispatch();
    let companyListState = useSelector(state => state.companyList.map(comp => ({"name": comp.name, "id": comp.id})));
    let selectRef = useRef();
    let personNameRef = useRef();
    let addressRef = useRef();
    const formSubmitHandler = () => {
      dispatch(addNewPerson({id: selectRef.current.value, name: personNameRef.current.value, address: addressRef.current.value}));
      selectRef.current.defaultValue = "";
      personNameRef.current.value = "";
      addressRef.current.value = "";
    }
  return (
    <div className="create-new-person-container">
      <h2>Create new Person</h2>
      <form className="create-new-person-form-container">
        <TextField inputRef={personNameRef} id="filled-basic" label="Name" variant="filled" />
        <TextField inputRef={addressRef} id="filled-basic" label="Address" variant="filled" />
        <Select inputRef={selectRef}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined-label"
          defaultValue=""
          displayEmpty
        >
        {companyListState.map(item => <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem> )}
        </Select>
        <Button onClick={formSubmitHandler} variant="contained">Save</Button>
      </form>
    </div>
  );
}
