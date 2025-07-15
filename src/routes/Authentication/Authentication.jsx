import SignUpForm from '../../components/SignUpForm/SignUpForm'
import SignInForm from '../../components/SignInForm/SignInForm'

import './authentication.scss';

const Authentication = () => {
  return (
    <div>
      <h1 className='authentication-container'>Sign In Page</h1>
        <SignInForm />
        <SignUpForm/>
    </div>
   );
}

export default Authentication ;
