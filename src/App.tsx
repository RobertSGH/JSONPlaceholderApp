import { Container } from '@mui/material';
import Header from '../src/components/Header/Header';
import PostList from './components/PostList/PostList';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<PostList />} />
          <Route path='/posts/:id' element={<PostDetails />} />
          <Route path='/users' element={<p>Coming soon!</p>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
