import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../images/icona-pop.jpg';

class Player extends Component {
    render() {
        return (
            <div className='card'>
                <div className='imgSection'>
                    <div className='topPanel'>
                        <div className='controlIcons'>
                            <FontAwesomeIcon icon="retweet"></FontAwesomeIcon>
                            <FontAwesomeIcon icon="random"></FontAwesomeIcon>
                            <FontAwesomeIcon icon="redo"></FontAwesomeIcon>
                        </div>
                        <div className='menu'>
                        <FontAwesomeIcon icon="bars"></FontAwesomeIcon>
                        </div>
                    </div>
                    <img className='icona' alt='icona pop' src={image} />
                    <div className='songTitle'>
                        <p>Icona Pop</p>
                        <p>Still Don't Know</p>
                    </div>
                </div>
                <div className='volume'>
                    <div className='volumeProgress volumeOne'>.</div>
                    <div className='volumeProgress volumeTwo'>.</div>
                </div>
                <div className='clearFloat'></div>
                <div className='buttonsPanel'>
                    <button className='volumeBtn'>
                        <FontAwesomeIcon icon="volume-up"></FontAwesomeIcon>
                    </button>
                    <button className='btn share smallBtn'>
                        <FontAwesomeIcon icon="share-alt"></FontAwesomeIcon>
                    </button>
                    <button className='btn stepBackward bigBtn'>
                        <FontAwesomeIcon icon="step-backward"></FontAwesomeIcon>
                    </button>
                    <button className='btn playButton bigBtn'>
                        <FontAwesomeIcon icon="play"></FontAwesomeIcon>
                    </button>
                    <button className='btn stepForward bigBtn'>
                        <FontAwesomeIcon icon="step-forward"></FontAwesomeIcon>
                    </button>
                    <button className='btn heart smallBtn'>
                        <FontAwesomeIcon icon="heart"></FontAwesomeIcon>
                    </button>

                </div>
            </div>
        );
    }
}

export default Player;