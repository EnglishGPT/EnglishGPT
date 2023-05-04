// frontend/src/pages/Profile.tsx
import React from 'react';
import styles from '../assets/styles/pages/Profile.module.css';

// Replace with the actual user data fetched from your API
const userData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@example.com',
  profileImage: 'https://via.placeholder.com/200',
  studyProgress: 75, // percentage
  vocabulariesStudied: 120,
  storiesRead: 15,
  storiesShared: 5,
  tokensAvailable: 250,
};

const Profile: React.FC = () => {
  return (
    <div className={styles.container}>
      <img
        src={userData.profileImage}
        alt="Profile"
        className={styles.profileImage}
      />
      <div className={styles.userInfo}>
        <div>
          <span className={styles.label}>Name: </span>
          {userData.firstName} {userData.lastName}
        </div>
        <div>
          <span className={styles.label}>Email: </span>
          {userData.email}
        </div>
        <div>
          <span className={styles.label}>Study Progress: </span>
          {userData.studyProgress}%
        </div>
        <div>
          <span className={styles.label}>Vocabularies Studied: </span>
          {userData.vocabulariesStudied}
        </div>
        <div>
          <span className={styles.label}>Stories Read: </span>
          {userData.storiesRead}
        </div>
        <div>
          <span className={styles.label}>Stories Shared: </span>
          {userData.storiesShared}
        </div>
        <div>
          <span className={styles.label}>Tokens Available: </span>
          {userData.tokensAvailable}
        </div>
      </div>
    </div>
  );
};

export default Profile;
