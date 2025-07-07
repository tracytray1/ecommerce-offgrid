import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
 } from "../../utils/firebase/firebase";

import SignUpForm from '../../components/SignUpForm/SignUpForm'

const SignIn = () => {
 const logGoogleUser = async () => {
     const { user } = await signInWithGooglePopup();
     const userDocRef = await createUserDocumentFromAuth(user);
  }


  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Pop Up</button>
      <SignUpForm/>
    </div>
   );
}

export default SignIn ;
