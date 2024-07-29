import React, { useCallback, useState } from 'react';
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

const Layout = ({ naviState, handleChangePage }) => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
      <Navbar naviState={naviState} handleChangePage={handleChangePage} />
    </div>
  );
};

const App = React.memo(() => {
  const navigate = useNavigate();

  const [naviState, setNaviState] = useState('/');

  const handleChangePage = useCallback(
    (e, location) => {
      e.preventDefault();
      setNaviState(location);
      navigate(location);
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    },
    [navigate],
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout naviState={naviState} handleChangePage={handleChangePage} />
        }
      >
        <Route
          index
          element={<MainPage handleChangePage={handleChangePage} />}
        />
        <Route path="statusRecord" element={<RecordPage />} />
        <Route path="cal" element={<CalPage />} />
        <Route path="insight" element={<StatPage />} />
        <Route path="community" element={<CommuPage />} />
        <Route path="rank" element={<RankPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
});

export default App;
