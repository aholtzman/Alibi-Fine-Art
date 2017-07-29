import React, { Component } from 'react'
import styled from 'styled-components'

const Div = styled.div`
  background-color: rgba(0, 0, 0, .8);
  color: white;
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  width: 250px;
  height: 250px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  a {
    text-decoration: none;
    color: white;
  }

  h1 {
    padding-top: 60px;
  }

  &:hover {
    opacity: .9;
  }

  &:focus {
    opacity: .9;
  }

  @media (max-width: 1024px) {
    opacity: .8;
  }
`

export default class Overlay extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return(
      <Div>
        <h1>{this.props.data.name}</h1>
        <a href={this.props.data.url} target='_blank' rel="noopener noreferrer">website</a>
      </Div>
    );
  }
}
