import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Background = styled.div`
  height: 100vh;
  background-color: pink;
  background: url(${require('../images/bg.png')}) no-repeat center;
  background-size: cover;
  text-align: center;
  line-height: 200%;
  overflow: scroll;
  padding: 10px;

  h1 {
    color: white;
    padding-top: 40px;
  }

  h3 {
    color: white;
    padding: 40px;
    padding-top: 20px;
  }
`

const Splash = () => {
  return(
    <Background>
      <h1>Alibi Fine Art</h1>
      <h3>is now closed</h3>
      <Button href='#exhibitions' >Exhibitions</Button>
      <Button href='#artists' >Artists</Button>
      <h3>Alibi Fine Art was a photography gallery located in the Ravenswood neighborhood of Chicago, established July, 2010. In March of 2014 the gallery moved from the original location at 1966 West Montrose Avenue a few blocks away at 4426 North Ravenswood Avenue - adjacent to Manifold gallery - and closed in July of 2017. A number of the exhibits were reviewed in New City, with reviews and write-ups also appearing in the Chicago Reader, Chicago Tribune, Photograph Magazine and on Hyperallergic.com. Links to the artists, exhibits, reviews, and write-ups can be found below. Thank you to the artists and to everyone who supported the gallery over the years. </h3>
    </Background>
  );
}

export default Splash
