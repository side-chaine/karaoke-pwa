import React from 'react';
import { Typography, Container, List, ListItem, ListItemText } from '@mui/material';

const Queue = () => {
  const queueItems = [
    { id: 1, song: 'Bohemian Rhapsody', singer: 'Иван' },
    { id: 2, song: 'Imagine', singer: 'Мария' },
    { id: 3, song: 'Hotel California', singer: 'Алексей' },
  ];

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Очередь песен
      </Typography>
      <List>
        {queueItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText 
              primary={item.song} 
              secondary={`Исполнитель: ${item.singer}`} 
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Queue;