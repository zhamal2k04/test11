import React from 'react'
import styled from 'styled-components'


const RightB = styled.div`
  width: 60%;
  height: 100%;
  // border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
    box-sizing: border-box;

    
`;

const Block1 = styled.div`
  width: 300px;
  height: 220px;
  background-color: #151C31;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

       &:hover  {
    scale: 1.1;
    cursor: pointer;
    transition: 1s;
    background-color: gray;
     border-radius: 15px;
 box-shadow: 0 0 20px

    }
  `;

  const Block2 = styled.div`
    width: 300px;
  height: 220px;
  background-color: #FFD177;
  border-radius: 10px;
  margin-left: 20px;

       &:hover  {
    scale: 1.1;
    cursor: pointer;
    transition: 1s;
    background-color: green;
     border-radius: 15px;
 box-shadow: 0 0 20px

    }
  `;

  const Block3 = styled.div`
  width: 620px;
height: 220px;
background-color: #FFD177;
border-radius: 10px;

     &:hover  {
    scale: 1.1;
    cursor: pointer;
    transition: 1s;
    background-color: blue;
     border-radius: 15px;
      box-shadow: 0 0 20px


    }
`;


const RightBangoonan = () => {
  return (
    <RightB>
        <Block1>
          <h1 style={{color: 'white'}}>10,000+</h1>
          <p style={{color: 'white'}}>Proporties Sold</p>
        </Block1>

        <Block2></Block2>
        <Block3></Block3>
    </RightB>
  )
}

export default RightBangoonan