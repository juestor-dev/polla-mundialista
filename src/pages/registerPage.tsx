import Register from '../components/register/register';

import 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import { getFirestore } from 'firebase/firestore';

const RegisterPage = () => {
  const firestoreInstance = getFirestore(useFirebaseApp());
  
  return <div className="page">
    REGISTER
    <FirestoreProvider sdk={firestoreInstance}>
      <Register></Register>
    </FirestoreProvider>
  </div>
}

export default RegisterPage;