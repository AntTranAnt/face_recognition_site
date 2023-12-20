import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div>
            <p>
                {/* { } encloses javascript code */}
                {'Enter image link to detect faces:'}
            </p>
            {/* give center to all divs to make searchbar and button on same line */}
            <div className='center'>
                <div className='form center pa4 br3 shadow-2'>
                    <input className='f3 pa2 w-70 center' type='text' />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;