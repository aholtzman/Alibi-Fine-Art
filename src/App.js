import React, { Component } from 'react'
import Splash from './components/Splash'
import Exhibitions from './components/Exhibitions'
import Artists from './components/Artists'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Splash />
        <Exhibitions />
        <Artists />
        <Footer />
      </div>
    );
  }
}

export default App;
