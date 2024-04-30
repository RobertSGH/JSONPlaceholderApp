import {
  CircularProgress,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Alert,
  Card,
  Divider,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Post } from '../../models/Post';

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts.');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity='error' sx={{ m: 2 }}>
        {error}
      </Alert>
    );
  }

  return (
    <List sx={{ maxWidth: 800, margin: 'auto' }}>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <Card sx={{ my: 1, backgroundColor: 'ActiveBorder', color: 'white' }}>
            <ListItemButton
              component={Link}
              href={`/posts/${post.id}`}
              underline='none'
            >
              <ListItemText primary={post.title} sx={{ my: 1 }} />
            </ListItemButton>
          </Card>
          <Divider variant='inset' component='li' />
        </div>
      ))}
    </List>
  );
};

export default PostList;
