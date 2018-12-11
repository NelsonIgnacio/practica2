import React, { Component } from 'react'
import OurFirstComponent from './OurFirstComponent'
import PlayButton from './PlayButton'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <OurFirstComponent/>
        <PlayButton></PlayButton>
      </div>
    );
  }
}

export default App;
