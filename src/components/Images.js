import React, { Component } from 'react'
import Image from './Image'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default class Images extends Component {
  render() {
    return(
      <Div>
        {this.props.data.map((data) => {
          return <Image data={data} key={data.id} name={data.name} url={data.url} />
        })}
      </Div>
    );
  }
}
