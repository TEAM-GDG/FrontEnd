import React from 'react';
import '../../../App.css';
import './index.css';

const CommunityPage = () => {
  return (
    <div className="container">
      <div className="communityContainer m-b-30">
        <div className="communityImageContainer">
          <img className="communityImage" src="tree.png" alt="감정의숲" />
        </div>
        <div className="communityAlignContainer">
          <select className="communityAlignSelect">
            <option value="1">최신순</option>
            <option value="2">조회순</option>
            <option value="3">인기순</option>
          </select>
        </div>
        <div className="horizon" />
        {/*추후 map 함수로 처리예정 */}
        <div className="communityPostContainer">
          <div className="communityPostInfo">
            <span className="communityPostInfoTitle">제목</span>
            <div className="communityPostInfoImage">이미지</div>
          </div>
          <div className="communityDetailContainer">
            <span className="communityDetailInfo">이것저것</span>
            <span className="communityDetailCount">좋아요 댓글</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
