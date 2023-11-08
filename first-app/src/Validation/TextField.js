import { useField, ErrorMessage } from "formik";
import React from "react";
import "./mystyle.css"

export default function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  console.log(field);
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>

      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />

      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
}
