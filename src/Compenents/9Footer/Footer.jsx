import React from 'react'
import styled from 'styled-components'
import facebook from '../9Footer/facebook.png'
import instagram from '../9Footer/instagram.png'
import linkedin from '../9Footer/linkedin.png'
import youtube from '../9Footer/youtube.png'

const FooterContainer = styled.div`
width: 100vw;
height: 400px;
// border: 1px solid black;
background-color: black;
margin-top: 60px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const FooterTop = styled.div`
width: 80%;
height: 260px;
border-bottom: 1px solid #151C31;
display: flex;
justify-content: space-between;
align-items: center;
gap: 15px;

`;

const FooterInfo = styled.div`
width: 300px;
height: 250px;
display: flex;
justify-content: center;
// align-items: center;
flex-direction: column;
// border: 1px solid red;
gap: 20px;

li{
list-style-type: none;
margin-top: 5px;
}

a {
    color: black;
    text-decoration: none;
}
`;

const FooterBottom = styled.div`
width: 80vw;
height: 80px;
// border: 1px solid blue;
display: flex;
`;


const LeftBottom = styled.div`
width: 50%;
height: 100%;
// border: 1px solid yellow;
// border: 1px solid red;
display: flex;
align-items: center;

// gap: 15px;

& img {
    width: 25px;
    height: 25px;
    margin-left: 20px;
}
   `;

   const RightBottom = styled.div`
width: 50%;
height: 100%;
// border: 1px solid yellow;
display: flex;
align-items: center;
justify-content: end;

    ul{
    display: flex;
    gap: 40px;
        
        li{
        list-style: none;
        }
    }


   `;

const Footer = () => {
  return (
    <FooterContainer>
        <FooterTop>
            <FooterInfo>
                <h1 style={{color: 'white'}}>BNGOON</h1>
                <p style={{color: 'white'}}>Copyright @ 2023 Bangoonan Designed by TokoTema</p>
            </FooterInfo>

            <FooterInfo>
                <h1 style={{color: 'white'}}>Abuot Us</h1>
                <p style={{color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio corporis quas facilis, provident magnam illum.</p>
            </FooterInfo>

            <FooterInfo>
                <h1 style={{color: 'white'}}>Location</h1>
                <ul>
                    <li><a style={{color: 'white'}} target='_blank' href="#">United States</a></li>
                    <li><a style={{color: 'white'}} target='_blank' href="#">United Kingdom</a></li>
                    <li><a style={{color: 'white'}} target='_blank' href="#">Australia</a></li>
                </ul>
            </FooterInfo>

            <FooterInfo>
                <h1 style={{color: 'white'}}>Contact Info</h1>
                <p style={{color: 'white'}}>123 Main st. Anytown, USA</p>
                <p style={{color: 'white'}}>+1 (555) 555-5555</p>
                <p style={{color: 'white'}}>info@bangoonan.com</p>
            </FooterInfo>

        </FooterTop>
        <FooterBottom>

            <LeftBottom>
                <h1 style={{color: 'white'}}>Follow Us</h1>
                <a style={{color: 'white'}} target='_blank' href="https://www.facebook.com/"><img src={facebook} alt="" /></a>
                <a style={{color: 'white'}} target='_blank' href="https://www.instagram.com/"><img src={instagram} alt="" /></a>
                <a style={{color: 'white'}} target='_blank' href="https://www.linkedin.com/"><img src={linkedin} alt="" /></a>
                <a style={{color: 'white'}} target='_blank' href="https://www.youtube.com/"><img src={youtube} alt="" /></a>
            </LeftBottom>

            <RightBottom>
                <ul>
                    <li><a style={{color: 'white'}} href="#">Privacy</a></li>
                    <li><a style={{color: 'white'}} href="#">Terms</a></li>
                </ul>
            </RightBottom>

        </FooterBottom>
    </FooterContainer>
  )
}

export default Footer