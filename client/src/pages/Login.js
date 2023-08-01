import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = props => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
const handleChange = event => {
  const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
};

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    //console.log(event.target[0].value);
    //console.log(event.target[1].value);

    try {
        const mutationResponse = await login({
          variables: { email: event.target[0].value, password: event.target[1].value }
        });
        const token = mutationResponse.data.login.token;
        //console.log(mutationResponse);
        Auth.login(token);
        //console.log(mutationResponse.data.login.user.account)
        const account = mutationResponse.data.login.user.account
        if (account === 'seller') {
          console.log("you have logged onto a Vendor account");
          window.location.assign('/VendorDashboard');
        } else {
          console.log("you have logged onto a Customer account");
          window.location.assign('/CustomerDashboard');
        }
      } catch (e) {
        console.error(e);
      }


    // clear form values
    setFormState({
        username: '',
        email: '',
        password: ''
      });
    };

    return (
        
    )



}

}
