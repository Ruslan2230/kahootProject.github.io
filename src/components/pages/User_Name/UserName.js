import React, {Component} from 'react';
import styled from 'styled-components';
import {Button, Input} from '../../UI';
import {connect} from 'react-redux';

const DivName = styled.div`
background-color: #e7e8ea;
  height: 100vh;
  display: flex;
`
const Name = styled.div`
    margin: auto;
   
`;



class UserName extends Component {
    state = {
        nickName: this.props.nickName
    };
    changeInput(field, e){
        this.setState({
            [field]: e.target.value
        })
    };
    addNick = () => {
        this.props.addNickName({
            nickName: this.state.nickName
        });
        this.props.addCurrentName({
            nickName: this.state.nickName
        });
        this.props.history.push('/common/pending')
    };



    render() {
        const {nickName} = this.state;
        console.log(nickName);
        return (
            <DivName>
                <Name>
                    <Input type="text"
                           className="login__name"
                           placeholder="nickName"
                           value={this.state.nickName}
                           onChange={this.changeInput.bind(this, 'nickName')}
                    />
                    <br/>
                    <Button height={30}  onClick={this.addNick}>Enter</Button>
                </Name>
            </DivName>
        )
    }
}



const dispatchToProps = (dispatch) => {
    return {
        addNickName: ({nickName}) => {
            dispatch({
                type: "ADD_NEW_NICK_NAME",
                nickName
            });
        },
        addCurrentName: ({nickName}) => {
            dispatch({
                type: "USER_CHANGE_NAME",
                nickName
            });
    }

    }

};


export default connect(null, dispatchToProps)(UserName);