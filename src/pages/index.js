import React from 'react';
import { Typography, Container } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Добро пожаловать в 4ePoeM
      </Typography>
      <Typography variant="body1">
        Ваше любимое караоке-приложение теперь доступно онлайн!
      </Typography>
    </Container>
  );
}
