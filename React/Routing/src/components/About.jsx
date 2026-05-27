import React from 'react';
import { useNavigate } from 'react-router-dom';
function App() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted successfully");
        navigate("/about");
    }
  return (
    <form onSubmit={(handleSubmit)}>
      <input type="email" placeholder="Enter your email" />
      <input type="password" placeholder="Enter your password" />
      <button type="submit">Submit</button>
    </form>
  )
}
export default App;