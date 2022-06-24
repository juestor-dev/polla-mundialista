import { getFirestore } from 'firebase/firestore';
import { useContext } from 'react';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import Users from '../components/users/users';
import { LoginContext } from '../contexts/LoginContext';

const ProfilePage = () => {
  const firestoreInstance = getFirestore(useFirebaseApp());
  const { userProfile } = useContext<any>(LoginContext);
  
  return <>   
      <h1>Profile</h1>
      <h2>Username: {userProfile?.username}</h2>
      <FirestoreProvider sdk={firestoreInstance}>
        <Users></Users>
      </FirestoreProvider>
  </>
}

export default ProfilePage;