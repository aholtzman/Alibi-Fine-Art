import styled from 'styled-components'
import React from 'react'

const Div = styled.div`
  width: 100vw;
  background-color: black;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Footer = () => {
  return(
    <Div>
      <a href="https://www.facebook.com/Alibi.fine.art" target='_blank' rel="noopener noreferrer"><img src={require('../images/fb.png')} alt='facebook logo link' /></a>
      <a href="https://www.instagram.com/alibifineart/" target='_blank' rel="noopener noreferrer"><img src={require('../images/in.png')} alt='instagram logo link' /></a>
      <a href="mailto:info@alibifineart.com" ><img src={require('../images/mail.png')} alt='email logo link' /></a>
    </Div>
  );
}

export default Footer
