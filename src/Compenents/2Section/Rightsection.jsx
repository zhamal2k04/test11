import React from 'react'
import styled from 'styled-components'





const Rightdiv = styled.div`
*{
    margin: 0;
    padding:0;    
    box-sizing:border-box;
    }

width:50%;
height: 700px;
// border : 1px solid green;
padding : 80px 80px;
box-sizing : border-box;
`;


const StyledForm = styled.form`
display: flex;
flex-direction: column;
width: 350px;
height: 550px;
background-color: white;
border-radius :20px;
padding : 30px;

  &: hover{
  background-color: green;
  p{
  color: white;
  }
  }

  &:hover button {
  cursor: pointer;
  
}

  h1{
  font-size: 25px;
  }

  p{
    font-size: 14.2px;
  text-align: left;
  color: gray;
  margin-top: 15px;
  }

  h2{
      font-size: 18px;
        margin-top: 15px;
  }

  input[type="text"],
  input[type="email"],
  select {
    width: 280px;
    height: 50px;
    border-radius: 5px;
    padding-left: 10px;
    margin-top: 5px;
    border: 1px solid gray;
  }


`;

const StyledButton = styled.button`

    width: 280px;
    height: 50px;
    border-radius: 5px;
    margin-top: 10px;
    background-color: #151C31;
    color: white;
    border: none;


`;




const Rightsection = () => {
  return (
    <Rightdiv>
      <StyledForm action="">
        <h1>Real Estate Inquiry Form</h1>
        <p>Please provide the folloving  information to help us better understand  your real state needs</p>
        <h2>Your Information</h2>
        <input type="text" placeholder='Your name' />
        <br />
        <input type="email" placeholder='Your email' />
        <h2>Your Preference</h2>

        <select name="" id="" >
          <option value="">Type of property are you interested</option>
          <option value="">What's your preferred location?</option>
          <option value="">What's your budget?</option>
        </select>

        <select name="" id="" >
          <option value="">Type of property are you interested</option>
          <option value="">What's your preferred location?</option>
          <option value="">What's your budget?</option>
        </select>

        <select name="" id="" >
          <option value="">Type of property are you interested</option>
          <option value="">What's your preferred location?</option>
          <option value="">What's your budget?</option>
        </select>

        <StyledButton>Get Inquiry</StyledButton>

        
      </StyledForm>
   
    </Rightdiv>
  )
}

export default Rightsection