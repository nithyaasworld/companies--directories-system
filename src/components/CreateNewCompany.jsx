// import {useDispatch, useSelector} from "react-redux";
// import {decrementAsync, incrementAsync} from "../actions/counterActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addCompany } from '../actions/companyActions';

export default function CreateNewCompany() {
  let dispatch = useDispatch();
  let companyListState = useSelector((state) => state.companyList);
  return (
    <div className="create-new-company-container">
      <h2>Create new Company</h2>
      <Formik
        initialValues={{ name: "", address: "", revenue: "", phone: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          } else if (!values.address) {
            errors.address = "Required";
          } else if (!values.revenue) {
            errors.revenue = "Required";
          } else if (!values.phone) {
            errors.phone = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
            dispatch(addCompany(values));
            setSubmitting(false);
            resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="create-new-company-form-container">
            <Field
              as={TextField}
              name="name"
              id="filled-basic"
              label="Name"
              variant="filled"
              fullWidth
            />
             <ErrorMessage className="error-div" name="name" component="div" />
             <Field
              as={TextField}
              name="address"
              id="filled-basic"
              label="Address"
              variant="filled"
              fullWidth
            />
            <ErrorMessage className="error-div" name="address" component="div" />
            <Field
              as={TextField}
              name="revenue"
              id="filled-basic"
              label="Revenue"
              variant="filled"
              fullWidth
            />
            <ErrorMessage className="error-div" name="revenue" component="div" />
            <Field
              as={TextField}
              name="phone"
              id="filled-basic"
              label="Phone"
              variant="filled"
              fullWidth
            />
            <ErrorMessage className="error-div" name="phone" component="div" />
            <button as={Button} className="submit-btn" type="submit" variant="contained" >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}