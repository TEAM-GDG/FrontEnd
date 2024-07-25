import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CalPage from './pages/CalPage';
import StatPage from './pages/StatPage';
import CommuPage from './pages/CommuPage';
import RankPage from './pages/RankPage';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="cal" element={<CalPage />} />
          <Route path="stat" element={<StatPage />} />
          <Route path="community" element={<CommuPage />} />
          <Route path="rank" element={<RankPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
