import React, {Component} from 'react';
import {Route} from "react-router-dom";

import ResultPage from '../resultPage';
import TestingPage from '../users_testing_page';
import PedingRoom from '../PendingRoom';

import socket from 'socket.io-client';
import {connect} from 'react-redux';
import Dashbord from "../Dashbord";
import Button from "../../UI/Button/Button";



class Common extends Component {
    state = {
        // compVisible: "w4"
        compVisible: this.props.compVisible
    };

    componentWillMount(){
        const {nickName} = this.props;
        window.socket = socket({
            path: "/room/",
            query: {
                name: nickName,
                roomID: this.props.roomID
            }
        });
    }

    componentWillUnmount(){
        // disconnect socket
    }

    render(){
        return(

            <div>
                {/*<Route path='/common/dashbord' component={Dashbord} />*/}
                {/*<Route path='/common/pending' component={PedingRoom} />*/}
                {/*<Route path='/common/testing' component={TestingPage} />*/}
                {/*<Route path='/common/result' component={ResultPage} />*/}

                <Button />

            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        nickName: state.currentUser.nickName,
        roomID: state.currentUser.roomID,
        compVisible: state.currentUser.compVisible
    }
};

const dispatchToProps = (dispatch) => {
    return {
        setQuestions(questions){
            dispatch({
                type: "SET_QUESTIONS",
                questions
            })
        }
    }
}

export default connect(mapStateToProps, dispatchToProps)(Common);
// export default Common;