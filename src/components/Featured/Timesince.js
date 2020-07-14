import React, { Component } from 'react';
import {Slide} from 'react-reveal'

class Timesince extends Component {

    state={
        outbreakDate:"Dec, 31, 2019",
        days:"0",
        hours:"0",
        mins:"0",
        secs:"0"
    }
    
    Date(){
       let Time =Date.parse(new Date()) - Date.parse(this.state.outbreakDate)
       let days = Math.floor(Time/(1000*60*60*24))
       let hours =Math.floor((Time/(1000*60*60))%24)
       let mins =Math.floor((Time/1000/60)%60)
       let secs =Math.floor((Time/1000)%60)
       this.setState({
           days,
           hours,
           mins,
           secs
       })
    }

    componentDidMount(){
     setInterval(()=>{
         this.Date()
     },1000)
    }
    render() {
        return (
            <Slide left delay={1000}>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                  Time since Outbreak
                </div>
                <div className="countdown_bottom">
                    <div className="countdown_item">
                    <div className="countdown_time">
                       {this.state.days}
                       </div>
                       <div className="countdown_tag">
                       days
                       </div>
                    </div>
                    <div className="countdown_item">
                    <div className="countdown_time">
                    {this.state.hours}
                       </div>
                       <div className="countdown_tag">
                       hrs
                       </div>
                    </div>
                    <div className="countdown_item">
                    <div className="countdown_time">
                    {this.state.mins}
                       </div>
                       <div className="countdown_tag">
                       min
                       </div>
                    </div>
                    <div className="countdown_item">
                    <div className="countdown_time">
                    {this.state.secs}
                       </div>
                       <div className="countdown_tag">
                       secs
                       </div>
                    </div>
                </div>
            </div>
            </Slide>
        );
    }
}

export default Timesince;