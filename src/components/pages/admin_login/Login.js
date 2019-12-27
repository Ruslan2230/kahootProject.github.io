import React, {Component} from 'react';
import styled from 'styled-components';

import {Button, Input} from '../../UI';

const Div = styled.div`
background-color: #e7e8ea;
  height: 100vh;
  display: flex;
`





const Box = styled.div`
    margin: auto;
    width: 250px;
`;


const sexses = `Вы зарегились`;
const notsexses = `Ошибка регистрации`;


class AdminLogin extends Component {
    state ={
        login: '',
        password: '',
        email: '',
        renderIf: false
    };

    onChange =(field, e) => {
        this.setState({
            [field]: e.target.value
        })
    };

    loginFunc = () => {
        fetch('http://localhost:9999/auth', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((token) => {
                localStorage.setItem("token", token.token);
            })
            .catch((e) => {
                console.log(e);
            })
    };

    loginReg = () => {
        fetch('http://localhost:9999/users', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((token) => {

                localStorage.setItem("token", token.token);

                this.setState({
                    renderIf : token.status
                });
                if(token.status !== 200) {
                    this.setState({
                        err: token.message
                })
                }
            })
            .catch((e) => {
                console.log(e);
            })
    };
    ifRender = () => {
        if (this.state.renderIf === 200) {return sexses}
        else {return this.state.renderIf === 400 ? this.state.err : ''}
    };




    render () {

        return (
<Div>
            <Box>

            <div>{this.ifRender()}</div>
            <Button onClick={this.loginReg}>Reg</Button>

            <Input height={10}
                   placeholder="Email"
                   type='text'
                   value={this.state.email}
                   onChange={this.onChange.bind(this, 'email')} /><br/>

            <Input height={10}
                   placeholder="Login"
                   type='text'
                   value={this.state.login}
                   onChange={this.onChange.bind(this, 'login')} /><br/>

            <Input height={10}
                   placeholder="Password"
                   type='password'
                   value={this.state.password}
                   onChange={this.onChange.bind(this, 'password')} /><br/>

            <Button onClick={this.loginFunc}>Login</Button>

            </Box>
</Div>
        )

    }
}

export default AdminLogin