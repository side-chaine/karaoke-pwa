import React from 'react';
import Layout from '../components/Layout';
import { Typography, Container, List, ListItem, ListItemText, Paper, TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const QueueItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const Queue = () => {
  const queueItems = [
    { id: 1, song: 'Bohemian Rhapsody', singer: 'Иван' },
    { id: 2, song: 'Imagine', singer: 'Мария' },
    { id: 3, song: 'Hotel California', singer: 'Алексей' },
  ];

  return (
    <Layout>
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          Очередь песен
        </Typography>
        <Box mb={4}>
          <TextField
            fullWidth
            variant="outlined"
            label="Поиск песни"
            placeholder="Введите название песни или исполнителя"
          />
        </Box>
        <List>
          {queueItems.map((item, index) => (
            <QueueItem key={item.id} elevation={2}>
              <ListItem>
                <ListItemText
                  primary={`${index + 1}. ${item.song}`}
                  secondary={`Исполнитель: ${item.singer}`}
                />
                <Button variant="contained" color="primary">
                  Добавить в очередь
                </Button>
              </ListItem>
            </QueueItem>
          ))}
        </List>
      </Container>
    </Layout>
  );
};

export default Queue;
