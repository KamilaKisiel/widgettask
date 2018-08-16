import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Playlist = ({ onRouteChange }) => {
    return (
        <div className='card'>
            <div className='return'>
                <p className='playlist'>Playlist</p>
                <button className='btn returnButton smallBtn'>
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
                            <div>
                                <p className='songDuration'>3:16 | Icona Pop</p>
                                <p className='songTitle'>Still Don't Know</p>
                            </div>
                            <div className='songAction'>
                                <button className='btn share smallBtn'>
                                    <FontAwesomeIcon icon="share-alt"></FontAwesomeIcon>
                                </button>
                                <button className='btn heart smallBtn'>
                                    <FontAwesomeIcon icon="heart"></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='listItem'>
                            <div>
                                <p className='songDuration'>2:35 | Icona Pop</p>
                                <p className='songTitle'>I Love it</p>
                            </div>
                            <div className='songAction'>
                                <button className='btn share smallBtn'>
                                    <FontAwesomeIcon icon="share-alt"></FontAwesomeIcon>
                                </button>
                                <button className='btn heart smallBtn'>
                                    <FontAwesomeIcon icon="heart"></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='listItem'>
                            <div>
                                <p className='songDuration'>2:50 | Icona Pop</p>
                                <p className='songTitle'>Girlfriend</p>
                            </div>
                            <div className='songAction'>
                                <button className='btn share smallBtn'>
                                    <FontAwesomeIcon icon="share-alt"></FontAwesomeIcon>
                                </button>
                                <button className='btn heart smallBtn'>
                                    <FontAwesomeIcon icon="heart"></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='listItem'>
                            <div>
                                <p className='songDuration'>3:07 | Icona Pop</p>
                                <p className='songTitle'>We Got the World</p>
                            </div>
                            <div className='songAction'>
                                <button className='btn share smallBtn'>
                                    <FontAwesomeIcon icon="share-alt"></FontAwesomeIcon>
                                </button>
                                <button className='btn heart smallBtn'>
                                    <FontAwesomeIcon icon="heart"></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='listItem'>
                            <div>
                                <p className='songDuration'>3:24 | Icona Pop</p>
                                <p className='songTitle'>Nights Like This</p>
                            </div>
                            <div className='songAction'>
                                <button className='btn share smallBtn'>
                                    <FontAwesomeIcon icon="share-alt"></FontAwesomeIcon>
                                </button>
                                <button className='btn heart smallBtn'>
                                    <FontAwesomeIcon icon="heart"></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='scrollBar'>.</div>
        </div>
    );
}

export default Playlist;