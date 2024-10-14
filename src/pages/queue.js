import React from 'react';
import Layout from '../../components/Layout';
import { Typography, Container, List, ListItem, ListItemText } from '@mui/material';

const Queue = () => {
  // Здесь будет логика получения данных о очереди
  const queueItems = [
    { id: 1, song: 'Bohemian Rhapsody', singer: 'Иван' },
    { id: 2, song: 'Imagine', singer: 'Мария' },
    { id: 3, song: 'Hotel California', singer: 'Алексей' },
  ];

  return (
    <Layout>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          Очередь песен
        </Typography>
        <List>
          {queueItems.map((item) => (
            <ListItem key={item.id}>
              <ListItemText primary={item.song} secondary={`Исполнитель: ${item.singer}`} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Layout>
  );
};

export default Queue;
