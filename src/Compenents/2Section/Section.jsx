import React from 'react'
import Leftsection from './Leftsection';
import Rightsection from './Rightsection';
import styled from 'styled-components'

const SectionDiv = styled.div`
width: 100vw;
height: 700px;
// border: 2px solid black;
background-color: #FFD177;
// padding: 80px 80px;
display: flex;
box-sizing : border-box;

`;


const Section = () => {
  return (
    <SectionDiv>
        <Leftsection/>
        <Rightsection/>
    </SectionDiv>
  )
}

export default Section