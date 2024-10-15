import React, { useEffect, useState } from 'react';
import { Typography, Container, List, ListItem, ListItemText, Button } from '@mui/material';
import { ref, onValue, push } from "firebase/database";
import { auth, database } from '../firebase';

const Queue = () => {
  const [queueItems, setQueueItems] = useState([]);

  useEffect(() => {
    const queueRef = ref(database, 'queue');
    const unsubscribe = onValue(queueRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const items = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value
        }));
        setQueueItems(items);
      }
    });

    return () => unsubscribe();
  }, []);

  const addToQueue = () => {
    const queueRef = ref(database, 'queue');
    push(queueRef, {
      song: 'Новая песня',
      singer: auth.currentUser ? auth.currentUser.displayName : 'Аноним'
    });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Очередь песен
      </Typography>
      <Button onClick={addToQueue} variant="contained" color="primary">
        Добавить песню
      </Button>
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
