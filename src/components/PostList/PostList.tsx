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

import { Post } from '../../models/Post';
import useFetchData from '../../hook/FetchData';

const PostList = () => {
  const {
    isLoading,
    data: posts,
    error,
  } = useFetchData<Post[]>(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  );

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity='error' sx={{ m: 2 }}>
        {error.message}
      </Alert>
    );
  }

  return (
    <List sx={{ maxWidth: 800, margin: 'auto' }}>
      {posts?.map((post: Post) => (
        <div key={post.id}>
          <Card sx={{ my: 1, backgroundColor: 'grey', color: 'white' }}>
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
