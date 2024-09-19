import React from 'react'
import styled from 'styled-components'

const CenterDiv = styled.div`
width: 40%;
height: 100%;
// border: 1px solid gray;
& ul{
    height: 100%;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    & li{
        font-size: 19px;

        &:hover{
            background-color: #030513;
            transition: 1s ease;
        }
        
        & a{
        text-decoration: none;
        color: white;

         
        
            }
        }
    }
`;

const Centernavbar = () => {
    return (
        <CenterDiv>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Property</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Agent</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </CenterDiv>
    )
}

export default Centernavbar