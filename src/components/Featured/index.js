import React from 'react';
import Carrousel from './Carrousel'
import Timesince from './Timesince'
const Featured = () => {
    return (
        <div style={{position:"relative"}}>
             <Carrousel/>
            <div className="artist_name">
                <div className="wrapper">
                Corona Countdown
                </div>
            </div>
           <Timesince/>
        </div>
    );
};

export default Featured;