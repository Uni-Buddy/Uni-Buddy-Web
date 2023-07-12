import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Loginpage/Login';
import Register from './pages/Registerpage/Register';
import Start from './pages/Startpage/Start';
import Share from './pages/Sharepage/Share';
import Diarylist from './pages/Diarylistpage/Diarylist';
import Diarywrite from './pages/Diarywritepage/Diarywrite';
import Mypage from './pages/Mypage/Mypage';
import Editpi from './pages/Mypage/Editpi';
import Changepswd from './pages/Mypage/Changepswd';
import Time from './Timepage/Time';
import Calendar from './pages/Calendarpage/Calendar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/start" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/share" element={<Share />} />
        <Route path="/diarylist" element={<Diarylist />} />
        <Route path="/diarywrite" element={<Diarywrite />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/time" element={<Time />} />
        <Route path="/editPI" element={<Editpi />} />
        <Route path="/changepswd" element={<Changepswd />} />
        <Route path="/calendar" element={<Calendar />} />

        <Route path="/@username">
          <Route index element={<Start />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
