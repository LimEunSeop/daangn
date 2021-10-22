import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import * as styles from './MainSlider.module.scss'
import slider_1 from 'assets/images/slider_1.png'
import slider_2 from 'assets/images/slider_2.png'
import slider_3 from 'assets/images/slider_3.png'
import slider_3_1 from 'assets/images/slider_3_1.svg'
import slider_3_2 from 'assets/images/slider_3_2.svg'
import slider_3_3 from 'assets/images/slider_3_3.svg'
import slider_4 from 'assets/images/slider_4.png'

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: styles.slickDots,
  autoplay: true,
  autoplaySpeed: 3000,
}

interface MainSliderProps {
  style?: React.CSSProperties
}

const MainSlider = (props: MainSliderProps) => {
  return (
    <div className={styles.wrapper} {...props}>
      <Slider {...sliderSettings}>
        <div className={styles.sliderItemContainer}>
          <div
            className={styles.sliderItem}
            style={{ backgroundColor: '#FBF7F2' }}
          >
            <div className={styles.sliderItemInner}>
              <div className={styles.text}>
                <em>
                  당신 근처의
                  <br />
                  당근마켓
                </em>
                <p>
                  중고 거래부터 동네 정보까지, 이웃과 함께해요.
                  <br />
                  가깝고 따뜻한 당신의 근처를 만들어요.
                </p>
              </div>
              <div className={styles.image} style={{ right: '-100px' }}>
                <img src={slider_1} alt="" width="804" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sliderItemContainer}>
          <div className={styles.sliderItem}>
            <div className={styles.sliderItemInner}>
              <div className={styles.text}>
                <em>
                  우리 동네
                  <br />
                  중고 직거래 마켓
                </em>
                <p>동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.</p>
                {/* <a href="#">인기매물 보기</a>
                <a href="#">믿을 수 있는 중고거래</a> */}
              </div>
              <div className={styles.image}>
                <img src={slider_2} alt="" width="532" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sliderItemContainer}>
          <div
            className={styles.sliderItem}
            style={{ backgroundColor: '#E6F3E6' }}
          >
            <div className={styles.sliderItemInner}>
              <div className={styles.text}>
                <em>
                  이웃과 함께 하는
                  <br />
                  동네생활
                </em>
                <p>우리 동네의 다양한 이야기를 이웃과 함께 나누어요.</p>
              </div>
              <div className={styles.image}>
                <img src={slider_3} alt="" width="535" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sliderItemContainer}>
          <div className={styles.sliderItem}>
            <div className={styles.sliderItemInner}>
              <div className={styles.text}>
                <em>
                  내 근처에서 찾는
                  <br />
                  동네가게
                </em>
                <p>
                  우리 동네 가게를 찾고 있나요?
                  <br />
                  동네 주민이 남긴 진짜 후기를 함께 확인해보세요!
                </p>
                {/* <a href="#">당근마켓 동네가게 찾기</a> */}
              </div>
              <div className={styles.image}>
                <img src={slider_4} alt="" width="526" />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default MainSlider
