import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import face from './face_logo.png';

const Logo = () => {
    return (
        // style passes in an object
        <div class='ma4 mt0'>
            <Tilt perspective={2000} scale={1.02} gyroscope={false}>
                <div style={{ height: '150px', width:'150px', tiltEnable:'false'}} class='Tilt shadow-2 br2'>
                    <h1><img alt='logo' src={face} /></h1>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;