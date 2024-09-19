import React from 'react';
import styled from 'styled-components';

const RightDiv = styled.div`
  width: 30%;
  height: 100%;
  // border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  background-color: #FFD177;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: #FFB24D;
    cursor: pointer;
  }
`;

const Rightnavbar = () => {
  return (
    <RightDiv>
      <Button>Schedule a visit</Button>
    </RightDiv>
  );
}

export default Rightnavbar;
