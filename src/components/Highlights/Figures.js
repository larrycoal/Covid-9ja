import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import { Slide } from "react-reveal";
import Button from "../utils/Buttons"

const Figures = () => {
  let [init, setinit] = useState(0);
  //let[final,setFinal]=useState(40)

  const setPercent = () => {
    if (init < 41) {
      setinit(init++);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setPercent();
    },30);
  },);
  useEffect(() => {
    setPercent();
  });

  return (
    <div className="figures_wrapper">
      <Fade>
        <div className="figures_porcentage">
          <span>{init}%</span>
          <span>increase in mortality</span>
        </div>
      </Fade>
      <Slide right>
        <div className="figures_description">
          <p>
            Since the outbreak of covid-19, there has been a significant
            increase in mortality in the nothern region of Nigeria, these death
            werent classified as complication of covid-19 but victims were
            reported to have shown symptom of the virus. Nigeria lack adequate
            testing kit and majority of corona cases were never officially
            documented.

            <Button/>
          </p>
        </div>
      </Slide>
    </div>
  );
};

export default Figures;
