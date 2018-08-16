import React, { Component } from 'react';
import Player from './components/Player';
import Playlist from './components/Playlist';
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
  faBars,
  faReply
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
  faBars,
  faReply
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'player'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  render() {
    return (
      <div className="App">
        {this.state.route === 'player'
          ? <Player onRouteChange={this.onRouteChange}/>
          : <Playlist onRouteChange={this.onRouteChange}/>
        }
      </div>
    );
  }
}

export default App;
