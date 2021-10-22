import React, { useCallback, useState } from 'react'
// import { Link } from 'gatsby'
import * as styles from './Navigation.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import data from './data.json'

const cx = classNames.bind(styles)

const { hits, categories } = data

const Navigation = () => {
  const [opened, setOpened] = useState(false)

  const moreButtonClickHandler = useCallback(
    (e) => {
      setOpened(!opened)
    },
    [opened]
  )

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.primaryMenuList}>
        {hits.map((title) => (
          <li className={styles.primaryMenuItem}>
            <a href="#">{title}</a>
          </li>
        ))}
        <li className={styles.primaryMenuItem}>
          <button
            className={cx(['moreButton', opened && 'opened'])}
            onClick={moreButtonClickHandler}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </li>
      </ul>
      <div className={styles.subMenuWrapper}>
        <ul className={cx('subMenuList', opened && 'opened')}>
          {categories.map((list) => (
            <li className={styles.subMenuItem}>
              <span className={styles.subMenuTitle}>{list.title}</span>
              {list.items.map((item) => (
                <a href="#">{item}</a>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
