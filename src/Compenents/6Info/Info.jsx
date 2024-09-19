import React from 'react'
import styled from 'styled-components'

const Infocontainer = styled.div`
width: 100vw;
height: 250px;
// border: 1px solid yellow;
background-color: #151C31;
display: flex;
justify-content: space-evenly;
align-items: center;
`;

const InfoCards = styled.div`
width: 20%;
height: 100%;
// border: 1px solid black;
display: flex;
 flex-direction: column;
justify-content: center;
align-items: center;
`;

const Info = () => {
  return (
    <Infocontainer>
        <InfoCards>
            <h1 style={{fontSize: '55px', color: 'white' }}>20+</h1>
            <p style={{fontSize: '20px', color: 'white' }}>Years in the industry</p>
        </InfoCards>

        <InfoCards>
            <h1 style={{fontSize: '55px', color: 'white' }}>90%</h1>
            <p style={{fontSize: '20px', color: 'white' }}>Customer satisfaction</p>
        </InfoCards>

        <InfoCards>
            <h1 style={{fontSize: '55px', color: 'white' }}>10K</h1>
            <p style={{fontSize: '20px', color: 'white' }}>Properties sold</p>
        </InfoCards>

        <InfoCards>
            <h1 style={{fontSize: '55px', color: 'white' }}>50+</h1>
            <p style={{fontSize: '20px', color: 'white' }}>Country served</p>
        </InfoCards>
    </Infocontainer>
  )
}

export default Info