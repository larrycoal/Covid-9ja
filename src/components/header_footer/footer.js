import React from 'react';
import {Fade} from 'react-reveal'
const footer = () => {
    return (
        <div className="bck_red">
            <Fade delay={500} duration={1000}>
                <footer className="font_righteous">
                    Olayiwola
                    <div className="footer_copyright">
                        created by olanrewaju Olayiwola
                    </div>
                </footer>
            </Fade>
        </div>
    );
};

export default footer;