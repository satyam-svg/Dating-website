import React, { useState } from 'react';
import './signup.css'; // Import  CSS file for styling

const Signup = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  // Handler for form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
   if(!formData.fullName||!formData.email||!formData.password){
    alert('please fill all required fields');
    return;
   }
    console.log('Form submitted:', formData);
  };

  return(
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder='FullName'
          />
        </div>
        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder='Email'

          />
        </div>
        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder='Password'

          />
        </div>
        {/* Submit Button */}
        <button type="submit">Sign Up</button>
       
        </form>
    </div>
  );
};

export default Signup;
