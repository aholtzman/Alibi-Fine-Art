import React, { Component } from 'react'
import Images from './Images'

export default class Gallery extends Component {
  render() {
    return(
      <Images onClick="void(0)" data={this.props.data} />
    );
  }
}
