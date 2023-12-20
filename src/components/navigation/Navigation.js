import React from 'react';

//no state component

const Navigation = () => {
    return (
        // style passes in an object
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p class='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
    );
}

export default Navigation;