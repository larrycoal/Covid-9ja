import React from "react";
import {Fade} from 'react-reveal'

const Description = () => {
  return (
      <Fade duration={2000}>
    <div className="center_wrapper">
      <div className="highlight_description">
        <h3>Highlights</h3>
        <div>
          The coronavirus has been relatively slow to take hold in Africa, but
          blazing hot spots are beginning to emerge on the continent.The worst
          may be in Kano, Nigeria’s second-largest city, where government
          inaction allowed an unchecked outbreak. Dozens of doctors are
          infected. Gravediggers are overwhelmed.Officially, Kano, with an
          estimated population of five million, has reported 753 infections and
          33 related deaths, but those numbers do not reflect what health
          workers and residents say they are seeing on the ground.
        </div>
      </div>
    </div>
    </Fade>
  );
};

export default Description;
