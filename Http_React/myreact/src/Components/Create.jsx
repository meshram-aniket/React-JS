import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Create() {
    const [values, setValues] = useState({
        name:"",
        email:"",
        username:""
    })

    const navigate = useNavigate()
    function handleButton(event){
            event.preventDefault();
            axios.post("http://localhost:3000/myusers", values)
            .then(response=>{
                console.log(response)
                alert("data added")
                setValues(response.data)
                navigate("/")
            })
            .catch(err=>{
                console.log(err)
            })


    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>Add a User</h1>
            <form onSubmit={handleButton}>
                <div className='mb-2'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' className='form-control' name='name' placeholder='Enter Name'
                    onChange={e =>setValues({...values, name:e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='name'>Email:</label>
                    <input type='email' className='form-control' name='email' placeholder='Enter Email'
                    onChange={e =>setValues({...values, email:e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='name'>Username:</label>
                    <input type='text' className='form-control' name='name' placeholder='Enter Username'
                    onChange={e =>setValues({...values, username:e.target.value})}/>
                </div>
                <button className="btn btn-success">Submit</button>
                <Link to="/" className='btn btnprimary ms-3'>Back</Link>
                
            </form>
        </div>
    </div>
  )
}

export default Create