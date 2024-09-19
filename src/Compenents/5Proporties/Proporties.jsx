import React from 'react'
import styled from 'styled-components'
import {logo} from '../5Proporties/logo.png'

const Property = styled.div`
width: 100vw;
height: 1100px;
// border: 1px solid green;

`;

const Cards = styled.div`
width: 100vw;
height: 1000px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 80px 80px;
box-sizing: border-box;
gap: 30px;



`;

const Card = styled.div`
width: 270px;
height: 350px;
border: 1px solid #151C31;
border-radius: 18px;
border-top: none;


    h3{
    margin-left: 20px;
    margin-top: 10px;
    }

        p{
    margin-left: 20px;
      margin-top: 10px;
      color: gray;
    }

         &:hover  {
    scale: 1.1;
    cursor: pointer;
    transition: 1s;
    box-shadow: 0 0 20px

    }
`;

const CardPart = styled.div`
width: 100%;
height: 200px;
// border: 1px solid gray;
background-color: #151C31;
border-top-right-radius: 20px;
border-top-left-radius: 20px;

`;

const Sale = styled.div`
width: 100px;
height: 40px;
background-color: #FFD177;
border-radius: 5px;
position: relative;
top: 20px;
left: 20px;
display: flex;
justify-content: center;
align-items: center;

`;

const Proporties = () => {
  return (
    <Property>
 
        <h1 style={{marginLeft: '100px', marginTop: '80px'}}>Explore Our Proporties</h1>
        <a style={{textDecoration: 'none'}} href="#"><h3 style={{marginLeft: '1300px' }}>See All Property</h3></a>
        <p style={{marginLeft: '100px'}} >Faucibus lorem purus sit in nunc.</p>

        <Cards>
            <Card>
                <CardPart>
                    <Sale>For Sale</Sale>
                </CardPart>
                <h3>$ 4,980</h3>
                <h3>Stunning Oceanfront Condo</h3>
                <p>12 Miami Beach, FL</p>
            </Card>

            <Card>
                <CardPart>
                    <Sale>For Sale</Sale>
                </CardPart>
                <h3>$ 4,980</h3>
                <h3>Stunning Oceanfront Condo</h3>
                <p>12 Miami Beach, FL</p>
            </Card>

            <Card>
                <CardPart>
                    <Sale>For Sale</Sale>
                </CardPart>
                <h3>$ 4,980</h3>
                <h3>Stunning Oceanfront Condo</h3>
                <p>12 Miami Beach, FL</p>
            </Card>

            <Card>
                <CardPart>
                    <Sale>For Sale</Sale>
                </CardPart>
                <h3>$ 4,980</h3>
                <h3>Stunning Oceanfront Condo</h3>
                <p>12 Miami Beach, FL</p>
            </Card>

            <Card>
                <CardPart>
                    <Sale>For Sale</Sale>
                </CardPart>
                <h3>$ 4,980</h3>
                <h3>Stunning Oceanfront Condo</h3>
                <p>12 Miami Beach, FL</p>
            </Card>

            <Card>
                <CardPart>
                    <Sale>For Sale</Sale>
                </CardPart>
                <h3>$ 4,980</h3>
                <h3>Stunning Oceanfront Condo</h3>
                <p>12 Miami Beach, FL</p>
            </Card>

            <Card>
                <CardPart>
                    <Sale>For Sale</Sale>
                </CardPart>
                <h3>$ 4,980</h3>
                <h3>Stunning Oceanfront Condo</h3>
                <p>12 Miami Beach, FL</p>
            </Card>

            <Card>
                <CardPart>
                    <Sale>For Sale</Sale>
                </CardPart>
                <h3>$ 4,980</h3>
                <h3>Stunning Oceanfront Condo</h3>
                <p>12 Miami Beach, FL</p>
            </Card>
        </Cards>
  
    </Property>
  )
}

export default Proporties