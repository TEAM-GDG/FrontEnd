import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CalPage from './pages/CalPage';
import StatPage from './pages/StatPage';
import CommuPage from './pages/CommuPage';
import RankPage from './pages/RankPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';
import RecordPage from './pages/RecordPage';

const Layout = ({ handleChangePage }) => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
      <Navbar handleChangePage={handleChangePage} />
    </div>
  );
};

const App = () => {
  const navigate = useNavigate();

  const handleChangePage = (e, location) => {
    e.preventDefault();
    navigate(location);
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Routes>
      <Route path="/" element={<Layout handleChangePage={handleChangePage} />}>
        <Route
          index
          element={<MainPage handleChangePage={handleChangePage} />}
        />
        <Route path="howdoyoufeel" element={<RecordPage />} />
        <Route path="cal" element={<CalPage />} />
        <Route path="insight" element={<StatPage />} />
        <Route path="community" element={<CommuPage />} />
        <Route path="rank" element={<RankPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
