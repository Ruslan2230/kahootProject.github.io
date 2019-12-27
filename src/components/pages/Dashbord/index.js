

import  React, {Component} from "react";
import styled from 'styled-components';
import {Button} from "../../UI";

import {connect} from 'react-redux';
import socket from 'socket.io-client';



const Container = styled.div`
    font-style: italic;
    font-size: 26px;
`;

const Ul = styled.div`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0;
`;

const Div = styled.div`
background-color: #e7e8ea;
height: 100vh;
`;

const Li = styled.div`
  flex-basis: 30%;
  margin-top: 40px;
  :nth-child(-n+3) {
    margin-top: 0;
    }
`;

const H1 = styled.div`
font-size: 36px;
padding: 50px 0;
display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`;

const Btn = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;


`;


class AdminUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            pin: this.props.nickName,
            users: [],
            // compVisible: "w4"
        };
    }



    componentWillMount(){

        window.socket.on("new-user-connected", (users) => {
            console.log("Socket on!");
            this.setState({
                users: users
            })
        });

        window.socket.on("user-disconnected", (users) => {
            this.setState({
                userList: users
            })
        })

     };



    shift = () => {
        window.socket.emit("start-game", this.props.id);

        this.props.history.push("/common/testing");
    };



    render(){
        console.log(this.props);
        console.log(this.state);
        return(

            <Div>

            <H1>Name: {this.props.nickName}</H1>
                <br/>
            <H1>game code: {this.props.id}</H1>

            <Container>
            <Ul>
                {this.state.users.map((user, index) => {

                     return <Li>{`Игрок${user}`}</Li>

                })}


                {/*{this.state.users.map((users, index) => {*/}

                    {/*return <Li>{this.state.users[index].name.toUpperCase()}</Li>*/}
                {/*})}*/}
            </Ul>
        </Container>

                <Btn>
                <H1> Players: ...{this.state.users.length}...
                <Button onClick={this.shift} >Start</Button>
                </H1>
                </Btn>

            </Div>

        )}
}


const mapStateToProps = (state) => {
    return {
        nickName: state.currentUser.nickName,
        id: state.currentUser.roomID,


    }
};
const dispatchToProps = (dispatch) => {
    return {
        shiftRoom: ({roomID}) => {
            dispatch({
                type: "ADD_NEW_ROOMID",
                roomID
            });
        },
        shift: ({questions}) => {
            dispatch({
                type: "SET_QUESTIONS",
                questions
            });
        },
    }

};

export default connect(mapStateToProps, dispatchToProps)(AdminUser);



// const dispatchToProps = (dispatch) => {
//     return {
//         addNickName: ({nickName}) => {
//             dispatch({
//                 type: "ADD_NEW_NICK_NAME",
//                 nickName
//             });
//         },
//         addCurrentName: ({nickName}) => {
//             dispatch({
//                 type: "USER_CHANGE_NAME",
//                 nickName
//             });
//         }
//
//     }
//
// };
//
//
// export default connect(null, dispatchToProps)(UserName);

