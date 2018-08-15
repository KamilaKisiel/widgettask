import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Playlist = ({ onRouteChange }) => {
        return (
            <div className='card'>
                <h4>Playlist</h4>
                <div className='return'>
                    <button className='btn smallBtn'>
                        <FontAwesomeIcon 
                        icon="reply"
                        onClick={() => onRouteChange('player')}
                        ></FontAwesomeIcon>
                    </button>
                </div>
                <div className='songList'>
                    <ul className='list'>
                        <li>
                            <div className='listItem'>
                                <p>3:16 | Icona Pop</p>
                                <p>Still Don't Know</p>
                            </div>
                        </li>
                        <li>
                            <div className='listItem'>
                                <p>2:35 | Icona Pop</p>
                                <p>I Love it</p>
                            </div>
                        </li>
                        <li>
                            <div className='listItem'>
                                <p>2:50 | Icona Pop</p>
                                <p>Girlfriend</p>
                            </div>
                        </li>
                        <li>
                            <div className='listItem'>
                                <p>3:07 | Icona Pop</p>
                                <p>We Got the World</p>
                            </div>
                        </li>
                        <li>
                            <div className='listItem'>
                                <p>3:24 | Icona Pop</p>
                                <p>Nights Like This</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='clearFloat'></div>

            </div>
        );
}

export default Playlist;