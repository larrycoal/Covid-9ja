import React from 'react';
import Description from './Description'
import Figures from './Figures'

const Highlight = () => {
    return (
        <div className="highlight_wrapper">
            <Description/>
            <Figures/>
        </div>
    );
};

export default Highlight;