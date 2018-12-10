import React, { Component } from 'react';
import OurFirstComponent from './OurFirstComponent'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMusicPlaying: false }
  }

  PlayButton() {
    return (<a href="/" title="Play video" className="play"> </a>)
  };
  render() {
    const status = this.state.isMusicPlaying ? 'Playing :)' : 'Not playing :(';
    
    return (
      <div className='App'>
        <h1>{status}</h1>
        <OurFirstComponent/>
     {this.PlayButton()}   
      </div>
    );
  }
}

export default App;
