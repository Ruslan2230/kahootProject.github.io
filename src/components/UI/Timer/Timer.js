import React, {Component} from "react";
import { PropTypes } from "prop-types";
import './Timer.css';
import styled from 'styled-components';




const LineBox = styled.div`
    display: ${props => props.visible ? 'block' : 'none'}
    transition: 1500ms;
    width: ${props => props.width}%;
    height: 10px;
    background-color: #ff9dbf;
`;


export default  class Timer extends Component {

    static defaultProps = {
        seconds: 50,
        paused: false,
        reverse: true,
        setPoused: () => {},
        setStop: () => {},
    };

    state = {
        seconds: 50,
        paused: false,
        reverse: true,
        initialTime: this.initialTime
    };



    setPoused = () =>{
          this.state.paused = !this.state.paused;
        if (this.state.paused === false) {
            this.startTimer()
        } else {clearInterval(this.interval)}
    };

    setStop = () => {
        this.setState(() => {
            let seconds = 0;
            return {seconds};
        });
        clearInterval(this.interval);
         console.log(this.state.seconds);
    };

    startTimer = () => {
        this.interval = setInterval (() => {
            this.setState(() => {

                let seconds = this.state.seconds;
                this.state.reverse ? seconds-- : seconds++;
                 if ( this.state.seconds === 0){
                     this.setStop();
                }
                return {seconds};
            })
        }, 1000);
    };



    componentDidMount(){
        this.startTimer();
        // console.log(this.interval);
        this.initialTime = this.state.seconds;
    };

    componentWillUnmount(){
        clearInterval(this.interval)
    };

    render(){
        let seconds = this.state.seconds;
        return (
            <div>
                <div className="timerBox" style={{fontSize: "64px"}}>

                        {/*<p style={{fontSize: "20px", marginRight: "40px"}}>Time left</p>*/}

                        {/*<span className="minutes">{*/}
                            {/*(seconds/60 < 10) ? "0" + Math.floor(seconds/60) : Math.floor(seconds/60)*/}
                        {/*}</span>*/}
                        {/*:*/}
                        <span className="seconds">{
                            (seconds%60 < 10) ? "0" + (seconds%60) : (seconds%60)
                        }</span>

                        {/*<div onClick={this.setPoused} className="timerPause" />*/}

                        {/*<div onClick={this.setStop} className="timerStop" />*/}
                </div>
                <LineBox width={ (this.state.seconds/this.initialTime)*100 } visible={this.state.reverse}/>
            </div>
        )
    }
}