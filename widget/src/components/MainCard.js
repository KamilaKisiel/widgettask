import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../images/icona-pop.jpg'

class MainCard extends Component {
    render () {
        return (
            <div className='card'>
                <img className='icona' alt='icona pop' src={image}/>
                <div className='songTitle'>
                    <h1>Icona Pop</h1>
                    <p>Still Don't Know</p>
                </div>
                <div className='buttonsPanel'>
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