import { useState, useContext } from 'react'
import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase';

import { UserContext } from "../../contexts/user"

import './SignUpForm.scss'


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword){
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields()

    } catch(error) {
      console.log("user creation encountered an error", error)
    }
  }


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          input type='email'
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label='Password'
          input type='password'
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label='Confirm Password'
          input type='password'
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button buttonType='google' type='submit'>Sign Up </Button>

      </form>

    </div>
  )
}

export default SignUpForm;
