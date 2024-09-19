import React from 'react'
import styled from 'styled-components'

const LeftB = styled.div`
width: 40%;
height: 100%;
// border: 1px solid black;
// background-color: #F2F4FF;
display: flex;
flex-direction: column;
  padding: 30px 0;
  box-sizing: border-box;

`;


const Choosess = styled.div`
// width: 40%;
height: 100%;
// border: 1px solid green;
`;


const SycleText = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
`;

const Sycles = styled.div`
width: 100px;
height: 350px;
// border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 50px;

:hover {
background-color: gray;
cursor: pointer;
}

`;

const Sycle = styled.div`
width: 60px;
height: 60px;
// border: 1px solid black;
border-radius: 50%;
background-color: #FFD177;



`;


const Text = styled.div`
width: 350px;
height: 350px;
// border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;


p{
color: gray;
}

`;

const BAnButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 5px;
  position: relative;
  top: -80px;
  left: 110px;
  
  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }
`;

const LeftBangoonan = () => {
  return (
    <LeftB>
        <h1 style={{fontSize: '40px', marginLeft: '80px'}}>Why Choose Bangoonan?</h1>
        <p style={{width: '420px', color: 'gray', marginLeft: '80px', marginTop: '15px', fontSize: '20px'}}>Metus morbi sit cras sit a penatibus mauris lobortis tellus. Nisl velit etiam</p>

        <Choosess>

            <SycleText>
            <Sycles>
                <Sycle></Sycle>
                <Sycle></Sycle>
                <Sycle></Sycle>
            </Sycles>

            <Text>
                <h1 style={{fontSize: '20px', marginTop: '-5px'}}>Excellent Communication</h1>
                <p style={{marginTop: '-15px'}}>Aliquet rhoncus ornare dolor quam.
                Quis egestas aliquam.</p>

                <h1 style={{fontSize: '20px', marginTop: '25px'}}>Excellent Communication</h1>
                <p style={{marginTop: '-15px'}}>Aliquet rhoncus ornare dolor quam.
                Quis egestas aliquam.</p>

                <h1 style={{fontSize: '20px', marginTop: '20px'}}>Excellent Communication</h1>
                <p style={{marginTop: '-15px'}}>Aliquet rhoncus ornare dolor quam.
                Quis egestas aliquam.</p>

            </Text>
            </SycleText>
        <BAnButton>Learn More</BAnButton>

        </Choosess>


    </LeftB>
  )
}

export default LeftBangoonan