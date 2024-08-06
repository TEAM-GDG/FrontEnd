import React from 'react';
import '../../../App.css';
import styles from './Community.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CommunityPage = () => {
  const posts = useSelector(state => state.posts);

  return (
    <div className="container">
      <div className={styles.communityContainer + ' m-b-30'}>
        <div>
          <img
            className={styles.communityImage}
            src="/img/communityIcon/tree.png"
            alt="감정의숲"
          />
        </div>
        <div className={styles.communityAlignContainer}>
          <select className={styles.communityAlignSelect}>
            <option value="1">최신순</option>
            <option value="2">조회순</option>
            <option value="3">인기순</option>
          </select>
        </div>
        <div className="horizon" />
        {posts.map(post => (
          <Link
            to={`/community/${post.post_id}`}
            key={post.post_id}
            className={styles.communityPostContainer}
            href={post.post_id}
          >
            <div className={styles.communityPostInfoContainer}>
              <div className={styles.communityPostInfoTitle}>{post.title}</div>
              <div
                className={styles.communityPostInfoImage}
                style={{
                  content: '',
                  background: post.image_path
                    ? `url(${post.image_path}) lightgrey 50% / cover no-repeat`
                    : 'none',
                }}
              />
            </div>
            <div className={styles.communityPostInfoContainer}>
              <div className={styles.communityPostInfoDetail}>
                {post.name} ㆍ {post.created_at} ㆍ 조회 {post.view_count}
              </div>
              <div className={styles.communityPostInfoCount}>
                <img
                  className={styles.communityPostInfoCountImage}
                  src="/img/communityIcon/like.png"
                  alt="좋아요"
                />
                {post.like_count}
                <img
                  className={styles.communityPostInfoCountImage + ' m-l-15'}
                  src="/img/communityIcon/reply.png"
                  alt="댓글"
                />
                {post.comment_count}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
