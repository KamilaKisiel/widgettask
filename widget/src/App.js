import React, { Component } from 'react';
import MainCard from './components/MainCard';
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
        <MainCard></MainCard>
      </div>
    );
  }
}

export default App;
