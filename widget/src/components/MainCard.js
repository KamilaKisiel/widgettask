import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../images/icona-pop.jpg';

class MainCard extends Component {
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
                    <button className='btn volumeBtn'>
                    <FontAwesomeIcon icon="volume-up"></FontAwesomeIcon>
                    </button>                    
                    <button className='btn share'>
                        <FontAwesomeIcon icon="share-alt"></FontAwesomeIcon>
                    </button>
                    <button className='btn stepBackward'>
                        <FontAwesomeIcon icon="step-backward"></FontAwesomeIcon>
                    </button>
                    <button className='btn playButton'>
                        <FontAwesomeIcon icon="play"></FontAwesomeIcon>
                    </button>
                    <button className='btn stepForward'>
                        <FontAwesomeIcon icon="step-forward"></FontAwesomeIcon>
                    </button>
                    <button className='btn heart'>
                        <FontAwesomeIcon icon="heart"></FontAwesomeIcon>
                    </button>

                </div>
            </div>
        );
    }
}

export default MainCard;