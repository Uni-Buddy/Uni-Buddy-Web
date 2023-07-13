import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginpage from "./Pages/Loginpage/Loginpage"
import Registerpage from "./Pages/Registerpage/Registerpage";
import Mypage from './Pages/Mypage/Mypage';
import Editpi from './Pages/Mypage/Editpi';
import Changepswd from './Pages/Mypage/Changepswd';
import Timetablepage from './Pages/Timetable/Timetablepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/editPI" element={<Editpi />} />
        <Route path="/changepswd" element={<Changepswd />} />
        <Route path="/timetable" element={<Timetablepage />} />

      </Routes>
    </Router>
  );
};

export default App;
