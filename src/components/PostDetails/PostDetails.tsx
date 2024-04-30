import {
  Box,
  CardContent,
  CircularProgress,
  Typography,
  Alert,
  Card,
} from '@mui/material';
import { Post } from '../../models/Post';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetails = () => {
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError('Failed to load post details');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

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
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert severity='error'>{error}</Alert>
      ) : post ? (
        <Card
          raised
          sx={{
            maxWidth: 900,
            backgroundColor: 'ActiveBorder',
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
