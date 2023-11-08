import React, { useState } from "react";

export default function MyForms() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const email = event.target.value;
    const password = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };


//   const [Name, setName] = useState("");

//  const handleChange =(event)=>{
//   const name = this.event.target.value;
//  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input
        type="text"
        name="username"
        value={inputs.username || ""}
        onChange={handleChange}
      />
      </label>
      <br />
      <label>Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
        </label>

      <br />
      <label>Enter your Mail:
        <input
          type="Email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
        </label>

      <br />
      <label>Enter your password:
        <input
          type="password"
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>

   
   
  );
}
