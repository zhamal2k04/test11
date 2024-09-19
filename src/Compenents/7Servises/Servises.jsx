import React from 'react'
import styled from 'styled-components'


const Service = styled.div`

width: 100vw;
height: 600px;
  background-color: white;
// border: 1px solid black;
// padding: 40px;
box-sizing: border-box;

`;

const SellCards = styled.div`
width: 100vw;
height: 100%;
display: flex;
justify-content: space-around;
margin-top: 20px;


`;

const Cards = styled.div`
width: 360px;
height: 360px;
border: 1px solid gray;
display: flex;
flex-direction: column;
gap: 10px;
justify-content: center;
align-items: center;
padding: 10px 40px;
box-sizing: border-box;
border-radius: 15px;

  &:hover  {
    scale: 1.1;
    cursor: pointer;
    transition: 1s;
    background-color: green;
     border-radius: 15px;
 box-shadow: 0 0 20px
}

    & button: hover{
cursor: pointer;
color: white;
background-color:#151C31;   
}
`;


const Sycle = styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
background-color: #F2F4FF;
display: flex;
justify-content: center;
align-items: center;
`;

const Button = styled.button`
width: 150px;
height: 50px;
background-color: white;
border: 1px solid #151C31;
border-radius: 10px;
color: #151C31;
font-weight: 600;
font-size: 16px;


`;



const Servises = () => {
    return (
        <Service>
            <h1 style={{ marginLeft: '100px', marginTop: '80px' }}>Discover Our Services</h1>
            <a style={{ textDecoration: 'none' }} href="#"><h3 style={{ marginLeft: '1300px' }}>See All Property</h3></a>
            <p style={{ marginLeft: '100px' }} >Quis in porttitor purus sed</p>

            <SellCards>
                <Cards>
                    <Sycle><h1>$</h1></Sycle>
                    <h1>See A Property</h1>
                    <p style={{textAlign: 'center', color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora esse aperiam rem voluptate, recusandae repudiandae voluptas consectetur quae ex nisi.</p>
                    <Button>Learn More</Button>
                </Cards>

                <Cards>
                    <Sycle><h1>$</h1></Sycle>
                    <h1>See A Property</h1>
                    <p style={{textAlign: 'center', color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora esse aperiam rem voluptate, recusandae repudiandae voluptas consectetur quae ex nisi.</p>
                    <Button>Learn More</Button>
                </Cards>

                <Cards>
                    <Sycle><h1>$</h1></Sycle>
                    <h1>See A Property</h1>
                    <p style={{textAlign: 'center', color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora esse aperiam rem voluptate, recusandae repudiandae voluptas consectetur quae ex nisi.</p>
                    <Button>Learn More</Button>
                </Cards>
            </SellCards>
        </Service>
    )
}

export default Servises