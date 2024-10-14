import React from 'react';
import Layout from '../components/Layout';
import { Typography, Container } from '@material-ui/core';

export default function Home() {
  return (
    <Layout>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          Добро пожаловать в 4ePoeM
        </Typography>
        <Typography variant="body1">
          Ваше любимое караоке-приложение теперь доступно онлайн!
        </Typography>
      </Container>
    </Layout>
  );
}
