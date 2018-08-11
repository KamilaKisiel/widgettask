import React, { Component } from 'react';
// import image from '../images/from'

class MainCard extends Component {
    render () {
        return (
            <div className='card'>
                <img alt='icona pop' src="https://lastfm-img2.akamaized.net/i/u/300x300/7eab07ac89694304890fcd6d51c72255.jpg"/>
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