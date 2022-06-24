import { getFirestore } from 'firebase/firestore';
import React, { useContext } from 'react';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import { LoginContext } from '../contexts/LoginContext';

const ProfilePage = () => {

  const { userProfile } = useContext<any>(LoginContext);

  const firestoreInstance = getFirestore(useFirebaseApp());
  return <>
    <FirestoreProvider sdk={firestoreInstance}>    
      <h1>Profile</h1>
      <h2>Username: {userProfile.username}</h2>
    </FirestoreProvider>
  </>
}

export default ProfilePage;