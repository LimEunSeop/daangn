import React, { useCallback, useState } from 'react'
import * as styles from './Sitetop.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from 'assets/images/logo.svg'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

const Sitetop = () => {
  const [searchBorder, setSearchBorder] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)

  const searchMouseEnterHandler = useCallback(() => {
    setSearchBorder(true)
  }, [])
  const searchMouseLeaveHandler = useCallback(() => {
    if (!searchFocused) {
      setSearchBorder(false)
    }
  }, [searchFocused])
  const searchFocuseHandler = useCallback(() => {
    setSearchBorder(true)
    setSearchFocused(true)
  }, [])
  const searchBlurHandler = useCallback(() => {
    setSearchBorder(false)
    setSearchFocused(false)
  }, [])

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.logo}>
        <a href="#" aria-label="당근마켓">
          <img src={logo} alt="" width="120" />
        </a>
      </h1>
      <div
        className={cx('searchWrapper', searchBorder && 'bordered')}
        onMouseEnter={searchMouseEnterHandler}
        onMouseLeave={searchMouseLeaveHandler}
      >
        <input
          type="text"
          placeholder="동네 이름, 물품명 등을 검색해보세요!"
          onFocus={searchFocuseHandler}
          onBlur={searchBlurHandler}
        />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  )
}

export default Sitetop
