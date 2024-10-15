import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import { useAuth } from '../components/AuthProvider';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';

const Profile = () => {
  const { user } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  if (!user) {
    return (
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          Профиль
        </Typography>
        <Typography variant="body1">
          Пожалуйста, войдите в систему.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Профиль
      </Typography>
      <Typography variant="body1">
        Привет, {user.displayName || user.email}!
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleSignOut}>
        Выйти
      </Button>
    </Container>
  );
};

export default Profile;
