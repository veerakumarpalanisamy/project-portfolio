import React, {useState} from 'react'
import "./signin.css"
import { useNavigate }  from "react-router-dom"

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState(undefined);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlesignout = () => {
    setUserData(undefined)
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch("http://localhost:4000/api/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
   
      console.log(userData)
      navigate("/")
    } catch (err){
      console.log(err);
      return;
    }
  };
    
  return (
    <div className='signin'>
      <h1>Login User Account</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='email' name='email' id='email' onChange={handleChange}/> <br /> <br />
        <input type="text" placeholder='password' name='password' id='password' onChange={handleChange}/> <br /> <br />
        <button className='signin_button1'>Submit</button>
        <br />
       
      </form>
      <button className='signin_button2' onClick={handlesignout}>signout</button>
      
    </div>
  );
};



export default Signin;