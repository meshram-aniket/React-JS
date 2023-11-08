import React from 'react'
import {Form, Formik} from 'formik'
import TextField from './TextField'
import * as yup from 'yup';

export default function Validateform() {
    const validate = yup.object({
        firstName:yup.string().max(12, "must be 12 characters").required("Required"),
        lastName:yup.string().max(12, "must be 12 characters").required("Required"),
        Email:yup.string().email("email is required").required("Required"),
        contact:yup.string().max(12, "must be 12 characters").required("Required"),
        password:yup.string().max(12, "must be 12 characters").required("Required"),
        confirmPassword:yup.string().oneOf([yup.ref('password'), null], "password must be matched").required('Required')
    })
  return (
    <div>
        <Formik 
        initialValues={{
            firstName:'',
            lastName: '',
            Email: '',
            contact: '',
            password: '',
            confirmPassword: ''
        }}
        
        validationSchema={validate}
        onSubmit={values => {
            console.log(values)
        }}
        >

            {() => (
                // console.log(formik)
                <><h1>Registration Form</h1>
                <Form>
                    <TextField
                    label="firstname"
                    name="firstName"
                    type="text"
                    />
                    <TextField
                    label="lastname"
                    name="lastName"
                    type="text"
                    />
                    <TextField
                    label="email"
                    name="Email"
                    type="email"
                    />
                    <TextField
                    label="contact"
                    name="contact"
                    type="number"
                    />
                    <TextField
                    label="password"
                    name="password"
                    type="text"
                    />
                    <TextField
                    label="confirmpassword"
                    name="confirmPassword"
                    type="text"
                    />
                    <button type='submit'>submit</button>
                </Form>
                </>
            )}




        </Formik>
    </div>
  )
}
