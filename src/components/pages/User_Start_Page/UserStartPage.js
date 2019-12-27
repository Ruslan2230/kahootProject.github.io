import React, {Component} from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import {Button, Input} from '../../UI';
import {connect} from 'react-redux';





class UserStartPage extends Component {
    state = {
        rendError: false,
        pinCode: ''
    };

    changeInput(field, e) {
        this.setState({
            [field]: e.target.value
        });
    };

    checkPin = () => {
        fetch('https://kahoot-bootcamp4.herokuapp.com/rooms/check/', {
            method: 'POST',
            body: JSON.stringify({pinCode: this.state.pinCode}),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((res)=>res.json())
            .then((data)=>{

                console.log(data);
                if(data.status === 200) {
                    console.log("OK");
                     this.props.addPin(data.data.token);
                     this.props.addId(data.data.roomID);

                    this.props.history.push('/name')
                }
                else {
                    // this.setState({
                    //     rendError: true
                    // });
                    alert("ОШИБКА В ")
                }

            })
            .catch((e)=>{this.setState({rendError: true})});


    };

    render() {
        return (
            <div className="root">
                <div>{this.state.rendError ? "ОШИБКА" : ""}</div>
                <Input type="text"
                       className="login__name"
                       placeholder="ENTER_PINCODE"
                       value={this.state.pinCode}
                       onChange={this.changeInput.bind(this, 'pinCode')}
                />
                <br/>
                <Button width={10} height={30} onClick={this.checkPin}>Enter</Button>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         pinCode: state.users.pinCode
//     }
// };
const dispatchToProps = (dispatch) => {
    return {
        addPin: ({pinCode}) => {
            dispatch({
                type: "ADD_NEW_PINCODE",
                pinCode
            });
        },
        addId: (roomID) => {
            dispatch({
                type: "ADD_NEW_ROOMID",
                roomID
            });
        },
    }

};


export default connect(null, dispatchToProps)(UserStartPage);