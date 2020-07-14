import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15857.550161031922!2d3.1679266999999998!3d6.472497049999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1594734304453!5m2!1sen!2sus"
             title="map"
             width="100%" 
             height="350" 
             frameBorder="0" 
             allowFullScreen="" 
             aria-hidden="false" 
             tabindex="0">
             </iframe>
             <div className="location_tag">
                 <div>Virus Heat Map</div>
             </div>
        </div>
    );
};

export default Location;