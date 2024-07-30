import React, { useCallback, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import MainPage from './pages/mainUtilPage/MainPage';
import CalPage from './pages/mainUtilPage/CalPage';
import StatPage from './pages/mainUtilPage/StatPage';
import CommuPage from './pages/mainUtilPage/CommuPage';
import RankPage from './pages/mainUtilPage/RankPage';
import NotFoundPage from './pages/etcPage/NotFoundPage';
import Footer from './components/Footer';
import RecordPage from './pages/subUtilPage/RecordPage';
import LoginPage from './pages/membersPage/LoginPage';
import RegisterPage from './pages/membersPage/RegisterPage';
import FindIdPage from './pages/membersPage/FindIdPage';
import FindPwdPage from './pages/membersPage/FindPwdPage';

const Layout = ({ naviState, handleChangePage }) => {
  return (
    <div className="App">
      <Header handleChangePage={handleChangePage} />
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
        {/* 주요 기능 5종 */}
        <Route
          index
          element={<MainPage handleChangePage={handleChangePage} />}
        />
        <Route path="cal" element={<CalPage />} />
        <Route path="insight" element={<StatPage />} />
        <Route path="community" element={<CommuPage />} />
        <Route path="rank" element={<RankPage />} />

        {/* 보조 기능 */}
        <Route path="statusRecord" element={<RecordPage />} />

        {/* 회원 정보 관련 기능 */}
        <Route
          path="membersLogin"
          element={<LoginPage handleChangePage={handleChangePage} />}
        />
        <Route path="membersRegister" element={<RegisterPage />} />
        <Route
          path="membersFindEmail"
          element={<FindIdPage handleChangePage={handleChangePage} />}
        />
        <Route
          path="membersFindPassword"
          element={<FindPwdPage handleChangePage={handleChangePage} />}
        />

        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
});

export default App;
