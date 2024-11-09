
import React from 'react';
import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';

function App() {
  // User data to be shared across components
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Provide the UserContext to the rest of the application
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
