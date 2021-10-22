import * as React from 'react'
import BackgroundPlaceholder from '../components/BackgroundPlaceholder'
import Hit from '../components/Layout/index/Hit/Hit'
import Layout from '../components/Layout/Layout'
import MainSlider from '../components/MainSlider/MainSlider'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <section>
        <h2 className="a11y-hidden">메인 슬라이드</h2>
        <MainSlider
          style={{
            marginLeft: 'min(calc((100vw - 100%) / -2), 0px)',
            minWidth: '100%',
            width: '100vw',
          }}
        />
      </section>
      <BackgroundPlaceholder />
      <section>
        <h2 hidden>중고거래 인기매물</h2>
        <Hit />
      </section>
    </Layout>
  )
}

export default IndexPage
