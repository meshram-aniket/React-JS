import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function PostData() {
    const [Values,setValues]=useState({
        id:"",
        name:"",
        email:"",
        phone:""
    })

const navigate=useNavigate();
    
    function handleButton(e)
    {
        e.preventDefault();
        axios.post("http://localhost:3000/Aniket",Values)
        .then(resp=>{
            console.log(resp);
            alert("data addedd");
            navigate("/gets")
        })
    }
  return (
    <div>
 <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>Add a User</h1>
            <form onSubmit={handleButton}>
                <div className='mb-2'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' className='form-control' name='name' placeholder='Enter Name'
                    onChange={(e) =>setValues({...Values, name:e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='name'>Email:</label>
                    <input type='email' className='form-control' name='email' placeholder='Enter Email'
                    
                    onChange={(e) =>setValues({...Values, email:e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='name'>UsernamePhoneNo.:</label>
                    <input type='text' className='form-control' name='name' placeholder='Enter Username'
                    onChange={(e) =>setValues({...Values, username:e.target.value})}/>
                </div>
                <button className="btn btn-success">Submit</button>
                {/* <Link to="/" className='btn btnprimary ms-3'>Back</Link> */}
                
            </form>
        </div>
    </div>
    </div>
  )
}
