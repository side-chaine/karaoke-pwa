import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Добро пожаловать в 4ePoeM
      </Typography>
      <Typography variant="body1">
        Ваше любимое караоке-приложение теперь доступно онлайн!
      </Typography>
      <Link href="/queue" passHref>
        <Button variant="contained" color="primary">
          Начать петь
        </Button>
      </Link>
    </Container>
  );
}
