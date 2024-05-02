import {
  Box,
  CardContent,
  CircularProgress,
  Typography,
  Alert,
  Card,
} from '@mui/material';
import { Post } from '../../models/Post';
import { useParams } from 'react-router-dom';
import useFetchData from '../../hook/FetchData';

const PostDetails = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: post,
    isLoading,
    error,
  } = useFetchData<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return (
    <Box
      sx={{
        width: '100%',
        p: 2,
        mt: 2,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {isLoading ? (
        <CircularProgress />
      ) : error ? (
        <Alert severity='error'>{error.message}</Alert>
      ) : post ? (
        <Card
          raised
          sx={{
            maxWidth: 900,
            backgroundColor: 'grey',
            color: 'white',
          }}
        >
          <CardContent>
            <Typography variant='h5' component='div' gutterBottom>
              {post.title}
            </Typography>
            <Typography variant='body1'>{post.body}</Typography>
            <Typography variant='caption' display='block' sx={{ mt: 2 }}>
              User: {post.userId}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography>No post details available.</Typography>
      )}
    </Box>
  );
};

export default PostDetails;
