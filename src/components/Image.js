import React, { Component } from 'react'
import styled from 'styled-components'
import Overlay from './Overlay'
import Layer from './Layer'

const Photo = styled.img`
  width: 250px;
  height: 250px;
  opacity: 1;
  width: 100%;
  transition: .5s ease;
  backface-visibility: hidden;
`

class Image extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return(
      <Layer onclick="void(0)">
        <Photo
          src={this.props.data.image}
          alt={this.props.data.name}
          key={this.props.data.id}
        />
        <Overlay data={this.props.data}/>
      </Layer>
    );
  }
}

export default Image
