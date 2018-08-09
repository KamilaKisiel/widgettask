import React, { Component } from 'react';
import image from '../../public/images/Icona_Pop'

class MainCard extends Component {
    render () {
        return (
            <div className='card'>
                <img alt='icona pop' src={image}/>
                <div className='songTitle'>
                    <h1>Icona Pop</h1>
                    <p>Still Don't Know</p>
                </div>
                <div className='buttonsPanel'>

                </div>
            </div>
        );
    }
}

export default MainCard;