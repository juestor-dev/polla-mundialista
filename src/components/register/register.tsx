import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { useFirestore } from 'reactfire';
import { ErrorModel } from '../../models/error';
import { User } from '../../models/user';
import FormButton from '../form-button/form-button';
import FormInput from '../form-input/form-input';

export interface UserProfile {
  username: string,
  name: string,
  birthDate: string,
  password?: string
}

const Register = () => {
  const firestore = useFirestore();
  const usersCollection = collection(firestore, 'Users');
  
  // React States
  const [errorMessages, setErrorMessages] = useState<ErrorModel>();

  const handleSubmit = (event: any) => {
    //Prevent page reload
    event.preventDefault();

    var { mname, uname, pass } = document.forms[0];

    console.log('registerPage SUBMIT');
    const newUser : User = {
      name: mname.value,
      password: pass.value,
      username: uname.value
    };

    addAnimal(newUser);

    mname.value = '';
    pass.value = '';
    uname.value = '';
  };

  const addAnimal = (newUser : User) => {
    console.log('newUser', newUser);
    
    addDoc(usersCollection, newUser);
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name: string) =>
    name === errorMessages?.name && (
      <div className="error">{errorMessages?.message}</div>
    );

  // JSX code for login form
  
  return (
    <div id="loginform">
      <h2 id="headerTitle">REGISTER COMPONENT</h2>
      <form onSubmit={handleSubmit}>
        <FormInput description="Username" placeholder="Enter your username" type="text" name="uname" required/>
        {renderErrorMessage("uname")}
        <FormInput description="Name" placeholder="Enter your Name" type="text" name="mname" required/>
        {renderErrorMessage("pass")}
        <FormInput description="Password" placeholder="Enter your password" type="text" name="pass" required/>
        {renderErrorMessage("pass")}
        <FormButton title="Register" onClick/>
      </form>
    </div>
  );
}

export default Register;