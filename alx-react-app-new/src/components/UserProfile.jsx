import React from 'react';
import UserInfo from './UserInfo';

function ProfilePage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <div style={{ border: '1px solid gray', padding: '20px', borderRadius: '8px', backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
        <h2 style={{ color: 'blue', fontSize: '1.5rem', marginBottom: '10px' }}>User Profile</h2>
        <p style={{ color: '#666', fontSize: '1rem', margin: '0 0 10px' }}>Welcome to the profile page.</p>
        <UserInfo />
      </div>
    </div>
  );
}

export default ProfilePage;
