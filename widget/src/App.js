import React, { Component } from 'react';
import Player from './components/Player';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faShareAlt, 
  faPlay, 
  faStepBackward, 
  faStepForward, 
  faHeart, 
  faRandom, 
  faRedo, 
  faRetweet,
  faVolumeUp,
  faBars
} from '@fortawesome/free-solid-svg-icons'


library.add(
  faShareAlt, 
  faPlay, 
  faStepBackward, 
  faStepForward, 
  faHeart,
  faRandom,
  faRedo,
  faRetweet,
  faVolumeUp,
  faBars
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Player></Player>
      </div>
    );
  }
}

export default App;
