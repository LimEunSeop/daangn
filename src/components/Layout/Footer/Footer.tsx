import React from 'react'
import * as styles from './Footer.module.scss'
import classNames from 'classnames/bind'

import logo_white from 'assets/images/logo_white.svg'

const cx = classNames.bind(styles)

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className="a11y-hidden">사이트 푸터</h2>
      <div className="footer-container">
        <div className={styles.footerTop}>
          <div className="footer-logo" aria-label="당근마켓">
            <img src={logo_white} alt="" />
          </div>
          <ul className={styles.footerList}>
            <li className={styles.footerListItem}>
              <a className={styles.linkHighlight} href="/trust">
                믿을 수 있는 중고거래
              </a>
            </li>
            <li className={styles.footerListItem}>
              <a
                className={styles.linkHighlight}
                href="https://cs.kr.karrotmarket.com/wv/faqs"
              >
                자주 묻는 질문
              </a>
            </li>
          </ul>
          <ul className={styles.footerList}>
            <li className={styles.footerListItem}>
              <a
                target="_blank"
                className={styles.linkHighlight}
                href="https://ad.daangn.com/"
              >
                광고주센터
              </a>
            </li>
            <li className={styles.footerListItem}>
              <a
                target="_blank"
                className="ga-click"
                data-event-category="town_link_from"
                data-event-action="index_base"
                data-event-label="footer_town"
                href="https://town.daangn.com"
              >
                동네가게
              </a>
            </li>
          </ul>
          <ul className={styles.footerList}>
            <li className={styles.footerListItem}>
              <a target="_blank" href="https://team.daangn.com/">
                회사 소개
              </a>
            </li>
            <li className={styles.footerListItem}>
              <a target="_blank" href="https://team.daangn.com/jobs/">
                채용
              </a>
            </li>
          </ul>
          <ul className={cx('footerList', 'policy')}>
            <li className={styles.footerListItem}>
              <a target="_blank" href="https://policy.daangn.com/terms.html">
                이용약관
              </a>
            </li>
            <li className={styles.footerListItem}>
              <a target="_blank" href="https://policy.daangn.com/privacy.html">
                개인정보처리방침
              </a>
            </li>
            <li className={styles.footerListItem}>
              <a target="_blank" href="https://policy.daangn.com/location.html">
                위치기반서비스 이용약관
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <div className={styles.copyright}>
            <ul className={styles.copyrightList}>
              <li className={styles.copyrightListItem}>
                고객문의{' '}
                <a href="mailto:cs@daangnservice.com">cs@daangnservice.com</a>
              </li>
              <li className={styles.copyrightListItem}>
                제휴문의{' '}
                <a href="mailto:contact@daangn.com">contact@daangn.com</a>
              </li>
            </ul>
            <ul className={styles.copyrightList}>
              <li className={styles.copyrightListItem}>
                지역광고 <a href="mailto:ad@daangn.com">ad@daangn.com</a>
              </li>
              <li className={styles.copyrightListItem}>
                PR문의 <a href="mailto:pr@daangn.com">pr@daangn.com</a>
              </li>
            </ul>
            <ul className={cx('copyrightList', 'copyrightListLight')}>
              <li className={styles.copyrightListItem}>
                <address>
                  서울특별시 구로구 디지털로 30길 28 609호 (당근서비스)
                </address>
              </li>
              <li className={styles.copyrightListItem}>
                사업자 등록번호 : 375-87-00088
              </li>
              <li className={styles.copyrightListItem}>
                직업정보제공사업 신고번호 : J1200020200016
              </li>
            </ul>
            <div id="social">
              <ul className={styles.socialList}>
                <li className="social-list-item">
                  <a
                    target="_blank"
                    className="footer-social-link"
                    href="https://www.facebook.com/daangn"
                  >
                    <img
                      alt="facebook"
                      src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-facebook-0563f4a93852d073b41f13b8bcabb03d47af3bb3a6755cdfedd8a73686c7f18c.svg"
                    />
                    <span className="sr-only">facebook</span>
                  </a>{' '}
                </li>
                <li className="social-list-item">
                  <a
                    target="_blank"
                    className="footer-social-link"
                    href="https://www.instagram.com/daangnmarket/"
                  >
                    <img
                      alt="instagram"
                      src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-instagram-2f6c88a461597907c114b7ce28eab053fcae791ed26417915fefb6f7c9f95756.svg"
                    />
                    <span className="sr-only">instagram</span>
                  </a>{' '}
                </li>
                <li className="social-list-item">
                  <a
                    target="_blank"
                    className="footer-social-link"
                    href="https://blog.naver.com/daangn"
                  >
                    <img
                      alt="blog"
                      src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-blog-e1b0d512d1766a6962ec5bbb5b0803d2a6a9c55ad97db5ba9eebb76013caceba.svg"
                    />
                    <span className="sr-only">blog</span>
                  </a>{' '}
                </li>
                <li className={styles.globalLinks}>
                  <img
                    src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-global-2f53678b428ec623cefd07a90dd7777f3e55fc0433918f645d7d75ace6ff1fc3.png"
                    width="24"
                    height="24"
                  />
                  <select id="global-links-select">
                    <option value="kr">한국</option>
                    <option value="https://uk.karrotmarket.com">영국</option>
                    <option value="https://ca.karrotmarket.com">캐나다</option>
                    <option value="https://us.karrotmarket.com">미국</option>
                    <option value="https://jp.karrotmarket.com">일본</option>
                  </select>
                </li>
              </ul>
            </div>
            <div className="copyright-text">©Danggeun Market Inc.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
