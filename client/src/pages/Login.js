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

}

}
