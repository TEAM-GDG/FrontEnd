import React, { useState } from 'react';
import styles from './Rank.module.css';
import { useSelector } from 'react-redux';

const RankPage = () => {
  const privateRanks = useSelector(state => state.privateRanks);
  const companyRanks = useSelector(state => state.companyRanks);

  const [purpose, setPurpose] = useState('private');

  return (
    <div className="container">
      <div className={styles.rankContainer + ' m-b-30'}>
        <div className={styles.rankTopInfoContainer + ' horizon'}>
          <img
            src="/img/crown.png"
            alt="왕관"
            className={styles.rankTopInfoImg}
          />
          <span className={styles.rankTopInfoMaxPeople}>
            {purpose === 'private' && '총 34,534명 참여중'}
            {purpose === 'company' && '총 782개 기업 참여중'}
          </span>
          <span className={styles.rankTopInfoTopTen}>TOP 10</span>
        </div>
        <div className={styles.rankPurposeContainer}>
          <div
            style={
              purpose === 'private'
                ? { background: '#aeaeae' }
                : { color: '#bbbbbb' }
            }
            className={styles.rankPurposeButton}
            onClick={() => setPurpose('private')}
          >
            개인
          </div>
          <div
            style={
              purpose === 'company'
                ? { background: '#aeaeae' }
                : { color: '#bbbbbb' }
            }
            className={styles.rankPurposeButton}
            onClick={() => setPurpose('company')}
          >
            기업
          </div>
        </div>
        {purpose === 'private' && (
          <>
            <div
              className={styles.rankViewContainer}
              style={{ marginTop: '5%' }}
            >
              <div className={styles.rankView}>
                <div className={styles.rankViewInfo + ' ' + styles.Title}>
                  랭킹
                </div>
              </div>

              <div className={styles.rankView}>
                <div className={styles.rankViewInfo + ' ' + styles.Title}>
                  닉네임
                </div>
              </div>
              <div className={styles.rankView}>
                <div className={styles.rankViewInfo + ' ' + styles.Title}>
                  포인트
                </div>
              </div>
              <div className={styles.rankView}>
                <div className={styles.rankViewInfo + ' ' + styles.Title}>
                  연속 감정 표현
                </div>
              </div>
            </div>
            <div className={styles.rankViewContainer}>
              <div className={styles.rankView}>
                {privateRanks.map((rank, index) => (
                  <div key={index} className="horizon">
                    <div className={styles.rankViewInfo}>{rank.rank}</div>
                  </div>
                ))}
              </div>
              <div className={styles.rankView}>
                {privateRanks.map((rank, index) => (
                  <div key={index} className="horizon">
                    <div className={styles.rankViewInfo}>{rank.name}</div>
                  </div>
                ))}
              </div>
              <div className={styles.rankView}>
                {privateRanks.map((rank, index) => (
                  <div key={index} className="horizon">
                    <div className={styles.rankViewInfo}>{rank.score}</div>
                  </div>
                ))}
              </div>
              <div className={styles.rankView}>
                {privateRanks.map((rank, index) => (
                  <div key={index} className="horizon">
                    <div className={styles.rankViewInfo}>{rank.chain}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        {purpose === 'company' && (
          <>
            <div
              className={styles.rankViewContainer}
              style={{ marginTop: '5%' }}
            >
              <div className={styles.rankView}>
                <div className={styles.rankViewInfo + ' ' + styles.Title}>
                  랭킹
                </div>
              </div>

              <div className={styles.rankView}>
                <div className={styles.rankViewInfo + ' ' + styles.Title}>
                  기업명
                </div>
              </div>
              <div className={styles.rankView}>
                <div className={styles.rankViewInfo + ' ' + styles.Title}>
                  포인트
                </div>
              </div>
              <div className={styles.rankView}>
                <div className={styles.rankViewInfo + ' ' + styles.Title}>
                  사원 수(명)
                </div>
              </div>
            </div>
            <div className={styles.rankViewContainer}>
              <div className={styles.rankView}>
                {companyRanks.map((rank, index) => (
                  <div key={index} className="horizon">
                    <div className={styles.rankViewInfo}>{rank.rank}</div>
                  </div>
                ))}
              </div>
              <div className={styles.rankView}>
                {companyRanks.map((rank, index) => (
                  <div key={index} className="horizon">
                    <div className={styles.rankViewInfo}>{rank.company}</div>
                  </div>
                ))}
              </div>
              <div className={styles.rankView}>
                {companyRanks.map((rank, index) => (
                  <div key={index} className="horizon">
                    <div className={styles.rankViewInfo}>{rank.score}</div>
                  </div>
                ))}
              </div>
              <div className={styles.rankView}>
                {companyRanks.map((rank, index) => (
                  <div key={index} className="horizon">
                    <div className={styles.rankViewInfo}>{rank.human}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RankPage;
