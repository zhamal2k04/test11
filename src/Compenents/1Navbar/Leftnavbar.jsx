import React from 'react'
import styled from 'styled-components';


const Left = styled.div`
width: 30%;
height: 100%;
// border: 1px solid green;
display: flex;
justify-content: center;
align-items: center;
h1{
    color: white;
    font-family: 'Times New Roman', Times, serif;
    }
`;

const Leftnavbar = () => {
    return (
        <Left>
            <h1>BNGOON</h1>
        </Left>
    );
}

export default Leftnavbar