import React from 'react'
import styled from 'styled-components'
import logo from '../2Section/logo.png'



const LeftDiv = styled.div`
*{
    margin: 0;
    padding:0;    
    box-sizing:border-box;
    }

width:50%;
height: 700px;
// border : 1px solid red;
padding : 80px 80px;
box-sizing : border-box;

p{
    color: black;
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    h1{
    font-size: 50px;
    margin: 20px 0;
      }
`;


const Leftsection = () => {
    return (
        <LeftDiv>
            <p>Bangoonan Real Estate Agent</p>
            <h1>Find Your Dream</h1>
            <h1>Home Today</h1>
            <p>Are you ready to start the search for your dream home? Look no further than Bangoona Real Estate</p>
            <img src="./200+.png" alt="" />
            <img style={{marginTop: '30px'}} src={logo} alt="" />



        </LeftDiv>
    )
}

export default Leftsection