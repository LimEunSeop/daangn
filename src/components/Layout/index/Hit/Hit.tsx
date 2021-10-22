import React from 'react'
import * as styles from './Hit.module.scss'

import prod1 from './images/prod1.jpg'
import prod2 from './images/prod2.jpg'
import prod3 from './images/prod3.jpg'
import prod4 from './images/prod4.jpg'
import prod5 from './images/prod5.jpg'
import prod6 from './images/prod6.jpg'
import prod7 from './images/prod7.jpg'
import prod8 from './images/prod8.jpg'

const Hit = () => {
  return (
    <div className={styles.wrapper}>
      <h2>중고거래 인기매물</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#">
            <div className={styles.imgbox}>
              <img src={prod1} alt="" />
            </div>
            <div className={styles.text}>
              <span className={styles.title}>
                Msi geforce gtx 1060 3gt oc 팔아요
              </span>
              <span className={styles.price}>150,000원</span>
              <span className={styles.address}>서울 성북구 석관동</span>
              <span className={styles.counts}>관심 10 ∙ 채팅 15</span>
            </div>
          </a>
        </li>
        <li className={styles.item}>
          <a href="#">
            <div className={styles.imgbox}>
              <img src={prod2} alt="" />
            </div>
            <div className={styles.text}>
              <span className={styles.title}>
                기가바이트 GTX 1660 Super Udv OC 6g 팝니다
              </span>
              <span className={styles.price}>300,000원</span>
              <span className={styles.address}>
                충북 청주시 청원구 율량.사천동
              </span>
              <span className={styles.counts}>관심 7 ∙ 채팅 28</span>
            </div>
          </a>
        </li>
        <li className={styles.item}>
          <a href="#">
            <div className={styles.imgbox}>
              <img src={prod3} alt="" />
            </div>
            <div className={styles.text}>
              <span className={styles.title}>이케아 4단 찰제선반 팝니다</span>
              <span className={styles.price}>3,000원</span>
              <span className={styles.address}>경남 창원시 성산구 성산동</span>
              <span className={styles.counts}>관심 6 ∙ 채팅 17</span>
            </div>
          </a>
        </li>
        <li className={styles.item}>
          <a href="#">
            <div className={styles.imgbox}>
              <img src={prod4} alt="" />
            </div>
            <div className={styles.text}>
              <span className={styles.title}>5단 책장 팔아요</span>
              <span className={styles.price}>10,000원</span>
              <span className={styles.address}>경남 김해시 회현동</span>
              <span className={styles.counts}>관심 18 ∙ 채팅 8</span>
            </div>
          </a>
        </li>
        <li className={styles.item}>
          <a href="#">
            <div className={styles.imgbox}>
              <img src={prod5} alt="" />
            </div>
            <div className={styles.text}>
              <span className={styles.title}>
                갤럭시 탭 S7 128기가 미스틱 블랙
              </span>
              <span className={styles.price}>300,000원</span>
              <span className={styles.address}>경기도 안산시 단원구 와동</span>
              <span className={styles.counts}>관심 7 ∙ 채팅 12</span>
            </div>
          </a>
        </li>
        <li className={styles.item}>
          <a href="#">
            <div className={styles.imgbox}>
              <img src={prod6} alt="" />
            </div>
            <div className={styles.text}>
              <span className={styles.title}>위닉스 제습기 10L</span>
              <span className={styles.price}>90,000원</span>
              <span className={styles.address}>제주 제주시 이도2동</span>
              <span className={styles.counts}>관심 5 ∙ 채팅 24</span>
            </div>
          </a>
        </li>
        <li className={styles.item}>
          <a href="#">
            <div className={styles.imgbox}>
              <img src={prod7} alt="" />
            </div>
            <div className={styles.text}>
              <span className={styles.title}>아우디 푸쉬카</span>
              <span className={styles.price}>20,000원</span>
              <span className={styles.address}>서울 송파구 잠실동</span>
              <span className={styles.counts}>관심 2 ∙ 채팅 19</span>
            </div>
          </a>
        </li>
        <li className={styles.item}>
          <a href="#">
            <div className={styles.imgbox}>
              <img src={prod8} alt="" />
            </div>
            <div className={styles.text}>
              <span className={styles.title}>캠핑 테이블 95cm</span>
              <span className={styles.price}>10,000원</span>
              <span className={styles.address}>대구 동구 신기동</span>
              <span className={styles.counts}>관심 5 ∙ 채팅 5</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Hit
