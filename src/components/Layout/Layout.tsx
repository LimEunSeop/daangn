import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import 'styles/index.scss'
import Navigation from '../Navigation/Navigation'
import * as styles from './Layout.module.scss'
import Sitetop from '../Sitetop/Sitetop'
import Footer from './Footer/Footer'

interface Props {
  pageTitle?: string
  children: React.ReactNode
}

const Layout = ({ pageTitle, children }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.layoutWrapper}>
      <Helmet>
        <title>{pageTitle || data.site.siteMetadata.title}</title>
      </Helmet>

      <header className={styles.header}>
        <Sitetop />
        <h2 className="a11y-hidden">네비게이션</h2>
        <Navigation />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
