import React, { useEffect, useState } from "react";

export default function FormValidation() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);

  const [formError, setFormError] = useState({});
  const [issubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    setFormError(FormValidate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && issubmit) {
      console.log(formValues);
    }
  }, [formError]);

  const handlechanges = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    console.log(formValues);
  };

  const FormValidate = (values) => {
    const formError = {};
    const regex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    if (!values.username) {
      formError.username = "username is Required!!";
    }
    //         else if(!regex.test(values))
    //         {
    // formError.username="username must be more then 5 characters";
    //         }
    if (!values.email) {
      formError.email = "Email is Required!!";
    }
    // else if(!regex.test(values.email))
    // {
    //     formError.email="this is not valid email"
    // }
    if (!values.password) {
      formError.password = "password is Required!!";
    }
    // else if(!values.password.length<4)
    // {
    //     formError.password="password length must be greater then 4 character"
    // }
    if (!values.confirmpassword) {
      formError.confirmpassword = "Confirm Passsword is Required!!";
    }
    return formError;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {Object.keys(formError).length === 0 && issubmit ? (
          <div>You have successfullyy registered</div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )}

        {/* <pre>{JSON.stringify(formValues,undefined,2)}</pre> */}
        <label>Username</label>
        <input
          type="text"
          placeholder="username"
          value={formValues.username}
          name="username"
          onChange={handlechanges}
        />
        <span style={{ color: "red" }}>{formError.username}</span>
        <br />
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="email"
          name="email"
          value={formValues.email}
          onChange={handlechanges}
        />
        <span style={{ color: "red" }}>{formError.email}</span>
        <br />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="paswword"
          name="password"
          value={formValues.password}
          onChange={handlechanges}
        />
        <span style={{ color: "red" }}>{formError.password}</span>
        <br />
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          placeholder="confirm password"
          name="confirmpassword"
          value={formValues.confirmpassword}
          onChange={handlechanges}
        />
        <span style={{ color: "red" }}>{formError.confirmpassword}</span>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
