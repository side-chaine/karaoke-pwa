import React from 'react';
import Layout from '../components/Layout';
import { Typography, Container, Button, Paper, Avatar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAuth } from '../components/AuthProvider';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const ProfilePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const Profile = () => {
  const { user } = useAuth();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <Layout>
      <Container maxWidth="sm">
        <ProfilePaper elevation={3}>
          <Typography variant="h4" component="h1" gutterBottom>
            Профиль
          </Typography>
          {user ? (
            <>
              <Avatar sx={{ width: 100, height: 100, mb: 2 }} src={user.photoURL}>
                {user.displayName ? user.displayName[0] : 'U'}
              </Avatar>
              <Typography variant="h6" gutterBottom>
                {user.displayName}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {user.email}
              </Typography>
              <Box mt={2}>
                <Button variant="contained" color="primary" onClick={handleSignOut}>
                  Выйти
                </Button>
              </Box>
            </>
          ) : (
            <Box display="flex" flexDirection="column" alignItems="center">
              <Button variant="contained" color="primary" onClick={handleGoogleSignIn} sx={{ mb: 2 }}>
                Войти через Google
              </Button>
            </Box>
          )}
        </ProfilePaper>
      </Container>
    </Layout>
  );
};

export default Profile;
