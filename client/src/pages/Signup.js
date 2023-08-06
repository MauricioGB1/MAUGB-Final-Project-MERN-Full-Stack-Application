import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';



function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
   
    <div className="container col-12 md-auto">
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between mb-4">
        
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between mb-4">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between mb-4">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between mb-4">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
        {/* Marketing Materials - Affordable Ski Breaks  */}
        <div>
          <br></br>
        <p><strong>Thank you for registering with us.  Start enjoying  our professional services <span style={{ color: 'black' }}> We will take care to manage and develop your project.</span></strong></p>
        <br></br>
        <p>We are very excited that you have decided to sign up for our application and interact with our website. </p>
        <br></br>
        <p>Our firm recognizes that different backgrounds and vantage points can enrich our work and our relationships with clients..</p>
        <br></br>
        <p>Our team is formed by a group of people respected for their personal character and professional expertise.  </p>
        <br></br>
        <br></br>
        <p>Architectual & Construction Professional Team</p>

        </div>

      </form>
    </div>
  );
}

export default Signup;