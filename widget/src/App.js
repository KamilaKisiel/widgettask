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
  faRetweet
} from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(
  faShareAlt, 
  faPlay, 
  faStepBackward, 
  faStepForward, 
  faHeart,
  faRandom,
  faRedo,
  faRetweet
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
