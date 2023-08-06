import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';


function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/signup">← Go to Signup</Link>

      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-4">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-4">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
          <div>
          <p><strong>We welcome you back to our Login Page.</strong></p>
          <br></br>
          <p>If you have forgotten your password and you will have to sign up/register with us again. </p>
          <br></br>
          {/* More marketing materials */}
          <br></br>
          <p style={{color: 'black', fontSize:'30px'}}>Our Professional Services Include:</p>
          <br></br>
          <p>1.  Digital Management.</p>
          <br></br>
          <p>2.  Architectonic Design.</p>
          <br></br>
          <p>3.  Project Management.</p>
          <br></br>
          <p>4.  Approvals, Regulations and Legal aspects.</p>
          <br></br>
          <p>5. Architectural, Project management and Construction through the lifecycle of your project.</p>
          <br></br>
          <p>6. Quality assurance with the Highest Standards.</p>
          <br></br>
          
          </div>


      </form>
    </div>
  );
}

export default Login;