import React, { useState } from 'react';
import { Typography, Container, Button, CircularProgress } from '@mui/material';
import Link from 'next/link';
import { signInWithGoogle } from '../firebase';
import { useAuth } from '../components/AuthProvider';

export default function Home() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Error signing in with Google", error);
      alert(`Ошибка входа: ${error.message}. Пожалуйста, проверьте консоль для дополнительной информации.`);
    } finally {
      setLoading(false);
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
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleGoogleSignIn}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Войти через Google'}
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
