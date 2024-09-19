import React from 'react'
import LeftBangoonan from './LeftBangoonan'
import RightBangoonan from './RightBangoonan'
import styled from 'styled-components'


const Bang = styled.div`
width: 100vw;
height: 600px;
  display: flex;
  background-color:#F2F4FF;
  // justify-content: space-around;
  // align-items: center;
  `;

const Bangoonan = () => {
  return (
    <Bang>
        <LeftBangoonan/>
        <RightBangoonan/>
    </Bang>
  )
}

export default Bangoonan