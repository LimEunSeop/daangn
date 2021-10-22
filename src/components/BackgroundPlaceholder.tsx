import React from 'react'
import styled from 'styled-components'
import background from 'assets/images/background.jpg'

const BackgroundPlaceholder = styled.div`
  position: relative;
  width: 100%;
  height: 700px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: min(calc((100vw - 100%) / -2), 0px);
    right: min(calc((100vw - 100%) / -2), 0px);
    background: url(${background}) no-repeat center top/cover;
    background-attachment: fixed;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: min(calc((100vw - 100%) / -2), 0px);
    right: min(calc((100vw - 100%) / -2), 0px);
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export default BackgroundPlaceholder
