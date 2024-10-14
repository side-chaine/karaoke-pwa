import React from 'react';
import Layout from '../components/Layout';
import { Typography, Container, Button, Paper, Avatar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const ProfilePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const Profile = () => {
  const isLoggedIn = false;

  return (
    <Layout>
      <Container maxWidth="sm">
        <ProfilePaper elevation={3}>
          <Typography variant="h4" component="h1" gutterBottom>
            Профиль
          </Typography>
          {isLoggedIn ? (
            <>
              <Avatar sx={{ width: 100, height: 100, mb: 2 }}>U</Avatar>
              <Typography variant="h6" gutterBottom>
                Имя пользователя
              </Typography>
              <Typography variant="body1" gutterBottom>
                email@example.com
              </Typography>
              <Box mt={2}>
                <Button variant="contained" color="primary">
                  Редактировать профиль
                </Button>
              </Box>
            </>
          ) : (
            <Box display="flex" flexDirection="column" alignItems="center">
              <Button variant="contained" color="primary" sx={{ mb: 2 }}>
                Войти через Google
              </Button>
              <Button variant="contained" style={{ backgroundColor: '#4C75A3', color: 'white' }}>
                Войти через VK
              </Button>
            </Box>
          )}
        </ProfilePaper>
      </Container>
    </Layout>
  );
};

export default Profile;
