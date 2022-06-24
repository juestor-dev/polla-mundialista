import { collection, orderBy, query } from "firebase/firestore";
import { useEffect } from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";

const Users = () => {
  const firestore = useFirestore();
  const usersCollection = collection(firestore, 'Users');
  const usersQuery = query(usersCollection, orderBy('name', 'desc'));
  const { status, data } = useFirestoreCollectionData(usersQuery);

  console.log('USERS - usersQuery', usersQuery);
  useEffect(() => {
    console.log('USERS - status', status);
    console.log('USERS - data', data);
    
  }, [status, data]);

  if (status === 'loading') {
    return (<p>Fetching users</p>);
  }

  return (
    <>
      <h1>
        Users
      </h1>

      <p>
        { JSON.stringify(data) } 
      </p>
    </>
  );
} 

export default Users;