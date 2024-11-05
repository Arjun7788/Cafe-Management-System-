// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // Importing toast for notifications
const url = 'http://localhost:4000';
const Footer = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    feedback: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault(); 

    try {
      const response = await axios.post(`${url}/api/feedback/feedback`, data);
      if (response.data.success) {
        toast.success(response.data.message); 
        setData({ name: "", email: "", feedback: "" }); 
      } else {
        toast.error(response.data.message); 
      }
    } catch (error) {
      toast.error('An error occurred while sending feedback.'); 
    }
  };

  return (
   
      <form onSubmit={onSubmitHandler}> {/* Wrap inputs in a form */}
       <div className="login-popup-inputs">
       <h3>Feedback</h3>
        <input 
          name='name' 
          onChange={onChangeHandler} 
          value={data.name} 
          type="text" 
          placeholder='Your name' 
          required 
        /> 
        <input 
          name='email' 
          onChange={onChangeHandler} 
          value={data.email} 
          type="email" 
          placeholder='Your email' 
          required 
        />
        <textarea 
          name='feedback' 
          onChange={onChangeHandler} 
          value={data.feedback} 
          rows={6} 
          placeholder='Write feedback here' 
          required 
        />
        <button type='submit' className='feedback'>Send</button> {/* Change button type to 'submit' */}
        </div>   </form>
    
  );
};

export default Footer;
