import { useState } from 'react';
import { ErrorModel } from '../../models/error';

export interface UserProfile {
  username: string,
  name: string,
  birthDate: string,
  password?: string
}

const Register = () => {
  // React States
  const [errorMessages, setErrorMessages] = useState<ErrorModel>();

  
  const handleSubmit = (event: any) => {
    //Prevent page reload
    event.preventDefault();

    console.log('registerPage SUBMIT');
    
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name: string) =>
    name === errorMessages?.name && (
      <div className="error">{errorMessages?.message}</div>
    );

  // JSX code for login form
  
  return (
    <div id="loginform">
      REGISTER COMPONENT
    </div>
  );
}

export default Register;