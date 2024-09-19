import React from 'react'
import './navbar.css'
import Leftnavbar from './Leftnavbar';
import Centernavbar from './Centernavbar';
import Rightnavbar from './Rightnavbar';
import styled from 'styled-components'


const NavbarDiv = styled.div`
display: flex;

`;

const Navbar = () => {
  return (
    <NavbarDiv className='navbar'>
      <Leftnavbar/>
      <Centernavbar/>
      <Rightnavbar/>
    </NavbarDiv>
  )
}

export default Navbar