import React from 'react';
import Layout from '../components/Layout';
import { Typography, Container, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook'; // Используем Facebook как замену для VK

const HeroSection = styled(Paper)(({ theme }) => ({
  backgroundImage: 'url("/hero-image.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: theme.palette.common.white,
  padding: theme.spacing(8),
  marginBottom: theme.spacing(4),
}));

const FeatureItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
}));

export default function Home() {
  return (
    <Layout>
      <HeroSection>
        <Typography variant="h2" component="h1" gutterBottom>
          Добро пожаловать в 4ePoeM
        </Typography>
        <Typography variant="h5" paragraph>
          Ваше любимое караоке-приложение теперь доступно онлайн!
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Начать петь
        </Button>
      </HeroSection>
      <Container>
        <Typography variant="h4" gutterBottom align="center">
          Почему 4ePoeM?
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <FeatureItem>
              <Typography variant="h6">Огромный выбор песен</Typography>
            </FeatureItem>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FeatureItem>
              <Typography variant="h6">Удобный интерфейс</Typography>
            </FeatureItem>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FeatureItem>
              <Typography variant="h6">Пойте с друзьями</Typography>
            </FeatureItem>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" spacing={2} style={{ marginTop: '2rem' }}>
          <Grid item>
            <Button variant="contained" color="primary" startIcon={<GoogleIcon />}>
              Войти через Google
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" style={{ backgroundColor: '#4C75A3', color: 'white' }} startIcon={<FacebookIcon />}>
              Войти через VK
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
