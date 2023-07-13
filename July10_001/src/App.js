import { Route, Routes } from 'react-router-dom';
import PostPage from './pages/PostPage';
import Share from './pages/Share';
import Reigster from './pages/Register';
import Login from './pages/Login';
import Start from './pages/Start';
import Diarywrite from './pages/Diarywrite';
import Diarylist from './pages/Diarylist';
import Test from './pages/test';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/start" element={<Start />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reigster" element={<Reigster />} />
      <Route path="/diarywrite" element={<Diarywrite />} />
      <Route path="/diarylist" element={<Diarylist />} />
      <Route path="/share" element={<Share />} />
      <Route path="/test" element={<Test />} />
      <Route path="/@username">
        <Route index element={<Start />} />
        <Route path=":postId" element={<PostPage />} />
      </Route>
    </Routes>
  );
};

export default App;
