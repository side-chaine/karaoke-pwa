import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAw3hdoDMOo8_tNyJr0Qll-jIUhxFpNpQk",
  authDomain: "epoem-e9d6d.firebaseapp.com",
  projectId: "epoem-e9d6d",
  storageBucket: "epoem-e9d6d.appspot.com",
  messagingSenderId: "741768633751",
  appId: "1:741768633751:web:edb229519fa2bfa4d0f8d2",
  measurementId: "G-928H142ZPG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export { auth, database, googleProvider };
EOL~
cat > pages/index.js << EOL
import React, { useState } from 'react';
import { Typography, Container, Button, CircularProgress } from '@mui/material';
import Link from 'next/link';
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from '../firebase';
import { useAuth } from '../components/AuthProvider';

export default function Home() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Sign in successful", result.user);
    } catch (error) {
      console.error("Error signing in with Google", error);
      alert(`Ошибка входа: ${error.message}`);
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
