import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import Link from 'next/link';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase';
import { useAuth } from '../components/AuthProvider';

export default function Home() {
  const { user } = useAuth();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Добро пожаловать в 4ePoeM
      </Typography>
      <Typography variant="body1">
        Ваше любимое караоке-приложение теперь доступно онлайн!
      </Typography>
      {user ? (
        <Typography variant="body1">
          Привет, {user.displayName || user.email}!
        </Typography>
      ) : (
        <Button variant="contained" color="primary" onClick={handleGoogleSignIn}>
          Войти через Google
        </Button>
      )}
      <Link href="/queue" passHref legacyBehavior>
        <Button variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
          Начать петь
        </Button>
      </Link>
    </Container>
  );
}
