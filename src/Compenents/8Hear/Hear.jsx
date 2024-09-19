import React from 'react'
import styled from 'styled-components'
import boy from '../8Hear/boy.png'
import stars from '../8Hear/stars.png'


const Hearcontainer = styled.div`
width: 100vw;
height: 600px;
background-color:#F2F4FF
`;

const CardContainer = styled.div`
width: 100%;
height:600px;
// border: 1px solid yellow;
display: flex;
align-items: center;
justify-content: center;
padding: 30px;
box-sizing: border-box;


`;

const CardLeft = styled.div`
width: 40%;
height: 100%;
display: flex;
align-items: center;
justify-content: end;
box-sizing: border-box;

  
`;

const CardLeftin = styled.div`
width: 400px;
height: 530px;
border: 1px solid black;
background-color: #151C31;
border-radius: 20px

  >:hover  {
    scale: 1.1;
    cursor: pointer;
    transition: 1s;
    background-color: white;
     border-radius: 15px;
 box-shadow: 0 0 20px
}

`;

const CardRight = styled.div`
width: 60%;
height: 100%;
background-color: #F2F4FF;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
gap: 20px;

  >:hover  {
    scale: 1.1;
    cursor: pointer;
    transition: 1s;
    background-color: green;
     border-radius: 15px;
 box-shadow: 0 0 20px
}

`;

const Cards = styled.div`
width: 300px;
height: 250px;
// border: 1px solid black;
padding: 20px;
box-sizing: border-box;
background-color: white;
border-radius: 20px





`;

const Img1 = styled.img`
width: 18px;
margin-left:10px;

`;

const Img2 = styled.img`
width: 80px;
border-radius: 50%;
float: left;
margin-top: 20px;

`;


const Hear = () => {
  return (
    <Hearcontainer>
         <h1 style={{ marginLeft: '100px', marginTop: '80px' }}>Discover Our Services</h1>
         <a style={{ textDecoration: 'none' }} href="#"><h3 style={{ marginLeft: '1300px' }}>See All Property</h3></a>
         <p style={{ marginLeft: '100px', color: 'gray' }} >Quis in porttitor purus sed</p>

        <CardContainer>
            <CardLeft>
              <CardLeftin></CardLeftin>
            </CardLeft>

            <CardRight>

              <Cards>
              <Img1 src={stars} alt="" />
                <Img1 src={stars} alt="" />
                <Img1 src={stars} alt="" />
                <Img1 src={stars} alt="" />
                <Img1 src={stars} alt="" />
                <p style={{marginTop: '15px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam optio excepturi consectetur atque eius. At, tempore. Quaerat ut corrupti eveniet.</p>
                <Img2 src={boy} alt="" />
                <h1 style={{marginTop: '30px'}}>Marc Pillay</h1>
              </Cards>

              <Cards>
              <Img1 src={stars} alt="" />
                <Img1 src={stars} alt="" />
                <Img1 src={stars} alt="" />
                <Img1 src={stars} alt="" />
                <Img1 src={stars} alt="" />
                <p style={{marginTop: '15px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam optio excepturi consectetur atque eius. At, tempore. Quaerat ut corrupti eveniet.</p>
                <Img2 src={boy} alt="" />
                <h1 style={{marginTop: '30px'}}>Marc Pillay</h1>
              </Cards>

              <Cards>
              <Img1 src={stars} alt="" />
                <Img1 src={stars} alt="" />
                <Img1 src={stars} alt="" />
                <Img1 src={stars} alt="" />
                <Img1 src={stars} alt="" />
                <p style={{marginTop: '15px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam optio excepturi consectetur atque eius. At, tempore. Quaerat ut corrupti eveniet.</p>
                <Img2 src={boy} alt="" />
                <h1 style={{marginTop: '30px'}}>Marc Pillay</h1>
              </Cards>

              <Cards>
              <Img1 src={stars} alt="" />
                <Img1 src={stars} alt="" />
                <Img1 src={stars} alt="" />
                <Img1 src={stars} alt="" />
                <Img1 src={stars} alt="" />
                <p style={{marginTop: '15px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam optio excepturi consectetur atque eius. At, tempore. Quaerat ut corrupti eveniet.</p>
                <Img2 src={boy} alt="" />
                <h1 style={{marginTop: '30px'}}>Marc Pillay</h1>
              </Cards>
                
            </CardRight>
        </CardContainer>
    </Hearcontainer>
  )
}

export default Hear