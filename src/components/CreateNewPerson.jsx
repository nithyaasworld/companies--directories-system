import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";

export default function CreateNewPerson() {
    let [age, setAge] = useState('');
  return (
    <div className="create-new-person-container">
      <h2>Create new Person</h2>
      <form className="create-new-person-form-container">
        <TextField id="filled-basic" label="Name" variant="filled" />
        <TextField id="filled-basic" label="Address" variant="filled" />
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={age}
          //   onChange={handleChange}
          displayEmpty
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <Button variant="contained">Save</Button>
      </form>
    </div>
  );
}
