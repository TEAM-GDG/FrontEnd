import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./pages/mainUtilPage/MainPage";
import StatPage from "./pages/mainUtilPage/StatPage";
import CommunityPage from "./pages/mainUtilPage/CommunityPage";
import RankPage from "./pages/mainUtilPage/RankPage";
import NotFoundPage from "./pages/etcPage/NotFoundPage";
import Footer from "./components/Footer";
import RecordPage from "./pages/subUtilPage/RecordPage";
import LoginPage from "./pages/membersPage/LoginPage";
import RegisterPage from "./pages/membersPage/RegisterPage";
import FindIdPage from "./pages/membersPage/FindIdPage";
import FindPwdPage from "./pages/membersPage/FindPwdPage";
import ChangePwdPage from "./pages/membersPage/ChangePwdPage";
import CommunityPostPage from "./pages/subUtilPage/CommunityPostPage";
import CommunitySearchPage from "./pages/subUtilPage/CommunitySearchPage";
import CommunityWritePage from "./pages/subUtilPage/CommunityWritePage";
import MyPage from "./pages/mainUtilPage/MyPage";

const Layout = ({ location, isMembersPage }) => {
  return (
    <div className="App">
      {!isMembersPage && <Header location={location} />}
      <Outlet />
      <Footer />
      <Navbar location={location} />
    </div>
  );
};

const App = React.memo(() => {
  const [isMembersPage, setIsMembersPage] = useState(false);

  let location = useLocation();

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    setIsMembersPage(location.pathname.includes("/members"));
  }, [location.pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout location={location} isMembersPage={isMembersPage} />}
      >
        {/* 메인페이지 */}
        <Route index element={<MainPage />} />
        {/* 통계 */}
        <Route path="insight" element={<StatPage />} />
        {/* 커뮤니티 */}
        <Route path="community">
          <Route index element={<CommunityPage />} />
          <Route path=":post_id" element={<CommunityPostPage />} />
          <Route path="search" element={<CommunitySearchPage />} />
          <Route path="write" element={<CommunityWritePage />} />
        </Route>
        {/* 랭킹 */}
        <Route path="rank" element={<RankPage />} />
        {/* 마이페이지 */}
        <Route path="mypage" element={<MyPage />} />
        {/* 감정 기록 */}
        <Route path="status">
          <Route path="record" element={<RecordPage />} />
        </Route>
        {/* 회원 정보 관련 기능 */}
        <Route path="members">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="findemail" element={<FindIdPage />} />
          <Route path="findpassword" element={<FindPwdPage />} />
          <Route path="resetpassword" element={<ChangePwdPage />} />
        </Route>
        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
});

export default App;
