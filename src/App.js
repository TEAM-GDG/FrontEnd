import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { Outlet, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CalPage from './pages/CalPage';
import StatPage from './pages/StatPage';
import CommuPage from './pages/CommuPage';
import RankPage from './pages/RankPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
      <Navbar />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="cal" element={<CalPage />} />
        <Route path="insight" element={<StatPage />} />
        <Route path="community" element={<CommuPage />} />
        <Route path="rank" element={<RankPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
