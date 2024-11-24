
// src/formikForm.js

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './app.css'; // Assuming you're using app.css for styles

// Validation Schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, 'Must be at least 2 characters')
    .max(20, 'Must be 20 characters or less')
    .required('First Name is required'),
  lastName: Yup.string()
    .min(2, 'Must be at least 2 characters')
    .max(20, 'Must be 20 characters or less')
    .required('Last Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const FormikForm = () => {
  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* First Name */}
            <div className="form-field">
              <label htmlFor="firstName">First Name</label>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" component="div" className="error" />
            </div>

            {/* Last Name */}
            <div className="form-field">
              <label htmlFor="lastName">Last Name</label>
              <Field type="text" name="lastName" />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>

            {/* Email */}
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            {/* Password */}
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            {/* Submit Button */}
            <div className="form-field">
              <button type="submit" disabled={isSubmitting}>
                Register
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
