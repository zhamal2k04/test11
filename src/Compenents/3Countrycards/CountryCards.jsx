import React from 'react'
import styled from 'styled-components'

const CardsDiv = styled.div`
width: 100vw;
height: 550px;
// border: 1px solid black;
padding : 80px 80px;
box-sizing : border-box;


`;

const Cards = styled.div`
display: flex;
flex-direction : column;
gap: 6px;
    width:200px;
    height: 300px;
    // border: 1px solid black;
    margin-top: 35px;

     &:hover  {
    scale: 1.1;
    cursor: pointer;
    transition: 1s;
    background-color: gray;
     border-radius: 15px;


    }

`;


const CardsContainer = styled.div`
width: 100%;
height: 300px;
display: flex;
justify-content : space-around;
align-items : center;
flex-direction : row;
`;

const Cardsin = styled.div`
    width:100%;
    height: 250px;
    // border: 1px solid black;
    border-radius: 15px;
    background-color: #FFD177;
`;


const CountryCards = () => {
  return (
    <CardsDiv>
        <h1 style={{textAlign: 'left'}} >Browse Property by Country</h1>
        <a href="#" style={{textDecoration: 'none'}} ><h3 style={{textAlign: 'right'}}>See All Country</h3></a>
        <p>Posuere id quam lerem dignissim</p>

        <CardsContainer>

          <Cards>

            <Cardsin></Cardsin>
            <h2 style={{marginTop: '20px'}}>United States</h2>
            <p>10 Properties</p>

          </Cards>

          <Cards>

            <Cardsin></Cardsin>
            <h2 style={{marginTop: '20px', textAlign: 'left'}}>United States</h2>
            <p style={{textAlign: 'left'}}>10 Properties</p>

          </Cards>

    <Cards>

<Cardsin></Cardsin>
<h2 style={{marginTop: '20px', textAlign: 'left'}}>United States</h2>
<p style={{textAlign: 'left'}}>10 Properties</p>

    </Cards>

<Cards>

<Cardsin></Cardsin>
<h2 style={{marginTop: '20px', textAlign: 'left'}}>United States</h2>
<p style={{textAlign: 'left'}}>10 Properties</p>

</Cards>

<Cards>

<Cardsin></Cardsin>
<h2 style={{marginTop: '20px', textAlign: 'left'}}>United States</h2>
<p style={{textAlign: 'left'}}>10 Properties</p>

</Cards>

        </CardsContainer>

        

    </CardsDiv>

    
  )
}

export default CountryCards