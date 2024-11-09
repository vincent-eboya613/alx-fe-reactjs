import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  // Consume the UserContext to access user data
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;