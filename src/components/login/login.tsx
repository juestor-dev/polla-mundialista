import { useState, useContext } from 'react';
import { ErrorModel } from '../../models/error';
import { LoginContext } from '../../contexts/LoginContext';

import FormInput from '../form-input/form-input';
import FormButton from '../form-button/form-button';

import "./styles.css";

export interface UserProfile {
  username: string,
  name: string,
  birthDate: string,
  password?: string
}

const Login = () => {
  // React States
  const [errorMessages, setErrorMessages] = useState<ErrorModel>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { setUserProfile, setShowProfile } = useContext<any>(LoginContext);

  // User Login info
  const database: UserProfile[] = [
    {
      username: "user1",
      name:'Juan',
      birthDate: '16/02/1985',
      password: "pass1",
      
    },
    {
      username: "user2",
      name: 'Arianny',
      birthDate: '11/03/1985',
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event: any) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user: UserProfile) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
        setIsSubmitted(false);
      } else {
        const {username, name, birthDate} = userData;
        setIsSubmitted(true);
        setUserProfile({username, name, birthDate});
        setShowProfile(true);
        console.log('ACA!!!!!');
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name: string) =>
    name === errorMessages?.name && (
      <div className="error">{errorMessages?.message}</div>
    );

  // JSX code for login form
  
  return (
    <div id="loginform">
      <h2 id="headerTitle">Login</h2>
      <form onSubmit={handleSubmit}>
        <FormInput description="Username" placeholder="Enter your username" type="text" name="uname" required/>
        {renderErrorMessage("uname")}
        <FormInput description="Password" placeholder="Enter your password" type="password" name="pass" required/>
        {renderErrorMessage("pass")}
        <FormButton title="Log in" onClick/>
      </form>
      <a href="/register"></a>
    </div>
  );
}

export default Login;