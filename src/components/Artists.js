import React from 'react'
import styled from 'styled-components'
import Gallery from './Gallery'
import data from '../images/data'

const Div = styled.div`
  background-color: white;
  height: 100%;
  padding: 20px;
  padding-bottom: 50px;
  color: #101032;
  margin-top: 20px;
  margin-bottom: 30px;

  h1 {
    padding-left: 10px;
  }
`
const Artists = () => {
  return(
    <Div id='artists'>
      <h1>Artists</h1>
      <Gallery data={data} />
    </Div>
  );
}

export default Artists
