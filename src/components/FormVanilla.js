import React from 'react';
import Form from './Form.js';


function FormVanilla({ initialValues, validate }) {
  const [values, setValues] = React.useState(initialValues);

  const [errors, setErrors] = React.useState({});

  const [touched, setTouched] = React.useState({});

  
  const handleChange = evt => {
    const { name, value: newValue, type } = evt.target;
 console.log(evt.target);
   
    const value = type === 'number' ? +newValue : newValue;

   
    setValues({
      ...values,
      [name]: value,
    });

    
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleBlur = evt => {
    const { name, value } = evt.target;
   
    const { [name]: removedError, ...rest } = errors;
    
    const error = validate[name](value);

    
    setErrors({
      ...rest,
      ...(error && { [name]: touched[name] && error }),
    });
  };

  
  const handleSubmit = evt => {
    evt.preventDefault();

    
    const formValidation = Object.keys(values).reduce(
      (acc, key) => {
        const newError = validate[key](values[key]);
        const newTouched = { [key]: true };
        return {
          errors: {
            ...acc.errors,
            ...(newError && { [key]: newError }),
          },
          touched: {
            ...acc.touched,
            ...newTouched,
          },
        };
      },
      {
        errors: { ...errors },
        touched: { ...touched },
      },
    );
    setErrors(formValidation.errors);
    setTouched(formValidation.touched);

    if (
      !Object.values(formValidation.errors).length && // errors object is empty
      Object.values(formValidation.touched).length ===
        Object.values(values).length && // all fields were touched
      Object.values(formValidation.touched).every(t => t === true) // every touched field is true
    ) {
      alert(JSON.stringify(values, null, 2));
    }
  };

  return (
    <>
      <h2>Form validated manually</h2>
      <Form
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        touched={touched}
        values={values}
      />
      
    </>
  );
}

export default FormVanilla;