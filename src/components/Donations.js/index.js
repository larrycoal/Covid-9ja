import React, { useState } from "react";
import {Button} from '@material-ui/core'
import {Zoom} from 'react-reveal'
const Donations = () => {
  const [amount] = useState([100, 350, 750]);
  const [position] = useState(["regular", "vip", "vvip"]);
  const [desc] = useState([
    "donate to help out in the fight against corona virus",
    "donate to help out in the fight against corona virus",
    "donate to help out in the fight against corona virus",
  ]);
  const [anime]=useState([500,0,500])

  const donationCard = () => {
    return amount.map((amt, i) => (
        <Zoom delay={anime[i]}>
      <div className="pricing_item">
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${amt}</span>
            <span>{position[i]}</span>
          </div>
          <div className="pricing_description">{desc[i]}</div>
          <div className="pricing_buttons">
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              Link
            </Button>
          </div>
        </div>
      </div>
      </Zoom>
    ));
  };
  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Donations</h2>
        <div className="pricing_wrapper">{donationCard()}</div>
      </div>
    </div>
  );
};

export default Donations;
