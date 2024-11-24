
// src/App.jsx
import React from 'react';
import RegistrationForm from './components/RegistrationForm'; // Controlled form
import FormikForm from './components/FormikForm'; // Formik form
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      {/* Choose which form to display */}
      <RegistrationForm /> {/* Controlled Components version */}
      {/* <FormikForm /> Formik version */}
    </div>
  );
};

export default App;
