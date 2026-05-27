import React from "react";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const handleChangeEmail = (e) => {
    setData((prev) => ({
      ...prev,
      email:e.target.value
    }))
  }
  const handleChangePassword = (e) => {
    setData((prev) => ({
      ...prev,
      password:e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    if(!data.email.includes("@krmu")){
      alert("Please enter a valid email");
    }
    else if(data.password.length < 8){
      alert("Password must be at least 8 characters long");
    }
    else{
      alert("Form submitted successfully");
    }
  }
  return(
    <>
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Enter your email" value={data.email} onChange={handleChangeEmail} />
      <input type="password" placeholder="Enter your password" value={data.password} onChange={handleChangePassword} />
      <button type="submit">Submit</button>
    </form>
    </>
  )
}
export default App;