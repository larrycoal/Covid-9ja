import React,{useEffect,useState} from "react";
import{Zoom} from "react-reveal"
import axios from "axios"

const Info = () => {
   const [status,setStatus]=useState({
       TotalConfirmed:"0",
       TotalDeaths:"0",
       TotalRecovered:"0"
   })
    const getData = async ()=>{
      let data= await  axios.get("https://api.covid19api.com/summary")
      let njaCases=data.data.Countries.find(element=>element.Country === "Nigeria")
    
      setStatus({
          TotalConfirmed:njaCases.TotalConfirmed,
          TotalDeaths:njaCases.TotalDeaths,
          TotalRecovered:njaCases.TotalRecovered
      })
    }

    useEffect(()=>{
       getData()
    })
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom duration={500}>
          <div className="vn_item">
            <div className="vn_outer">
              <div className="vn_inner">
                <div className="vn_icon_square bck_red"></div>
                <div className="vn_icon"></div>
                <div className="vn_title">
                 Nigeria 1st case:
                </div>
                <div className="vn_desc">
                Feb 28th 2020
                </div>
              </div>
            </div>
          </div>
        </Zoom>
          <Zoom duration={500} delay={500}>
          <div className="vn_item">
            <div className="vn_outer">
              <div className="vn_inner">
                <div className="vn_icon_square bck_yellow"></div>
                <div className="vn_icon"></div>
                <div className="vn_title">
                    Total cases:
                </div>
                <div className="vn_desc">
                    {status.TotalConfirmed}
                </div>
              </div>
            </div>
          </div>
          </Zoom>
          <Zoom duration={500} delay={1000}>
          <div className="vn_item">
            <div className="vn_outer">
              <div className="vn_inner">
                <div className="vn_icon_square bck_red"></div>
                <div className="vn_icon"></div>
                <div className="vn_title">
                    Recovered:{status.TotalRecovered}
                </div>
                <div className="vn_desc">
                    Death:{status.TotalDeaths}
                </div>
              </div>
            </div>
          </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Info;
