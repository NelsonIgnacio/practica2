import React, { Component } from 'react'

class PlayButton extends Component {
    constructor(props) {
        super(props)
        this.state = { isMusicPlaying: false }
    }

    handleClick() {
        if (this.state.isMusicPlaying) {
            this.audio.pause();
          } else {
            this.audio.play();
          }
        this.setState(prevState => {
          return { 
            isMusicPlaying: !prevState.isMusicPlaying   
          };
        });
      };
    render (){
        const status  = this.state.isMusicPlaying ? 'Playing :)' : 'Not playing :('
        return (
            <div>
            <h1>{status}</h1>
            <button  className='play' onClick={this.handleClick.bind(this)}></button>
            <audio id="audio" ref={(audioTag) => { this.audio = audioTag }}  />
            </div>
        );
    }
}
export default PlayButton;