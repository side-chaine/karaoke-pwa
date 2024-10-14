import React from 'react';
import Layout from '../components/Layout';
import { Typography, Container, Button } from '@mui/material';

const Profile = () => {
  const isLoggedIn = false;

  return (
    <Layout>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          Профиль
        </Typography>
        {isLoggedIn ? (
          <Typography variant="body1">
            Здесь будет отображаться информация о пользователе
          </Typography>
        ) : (
          <Button variant="contained" color="primary">
            Войти через Google
          </Button>
        )}
      </Container>
    </Layout>
  );
};

export default Profile;
