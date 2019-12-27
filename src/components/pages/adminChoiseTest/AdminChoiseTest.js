import React, {Component} from 'react';
import styled from 'styled-components';
import  {Button} from "../../UI";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const Wraper = styled.div`
    padding-top: 100px;
    display:block;
    width: 100%;
    height: 100vh;
    background-color: #e7e8ea;
`;

const Li = styled.li`
    margin-bottom: 20px;
        display: flex;
    justify-content: space-around;
`;
const Ul = styled.ul`
    margin-top: 100px;
    list-style: none;
`;
const P  = styled.p`
    font-size: 25px;
    line-height: 0px;
    font-weight: 600;
    color: #7e2aa7;
    width: 397.2px;
        `;

const Div  = styled.div`
margin-left: 180px;
`


class AdminChoiseTest extends Component{
    constructor(props){
        super(props);
    this.state ={
        tests: [
        {
            description: 'тема для регуляркам',
            games: [
                { question:"Вопрос 1",
                    answers:[
                        {var:"v1",correct: true},
                        {var:"v2",correct: false},
                        {var:"v3",correct: false} ,
                        {var:"v4",correct: false}]
                }
            ]
        },
        {
            description: 'тема переменной',
            games: [
                { question:"Вопрос 1",
                    answers:[
                        {var:"v1",correct: true},
                        {var:"v2",correct: false},
                        {var:"v3",correct: false} ,
                        {var:"v4",correct: false}]
                }
            ]
        },
        {
            description: 'тема для инкапсуляция',
            games: [
                { question:"Вопрос 1",
                    answers:[
                        {var:"v1",correct: true},
                        {var:"v2",correct: false},
                        {var:"v3",correct: false} ,
                        {var:"v4",correct: false}]
                }
            ]
        },
        {
            description: 'HTML5',
            games: [
                { question:"Вопрос 1",
                    answers:[
                        {var:"v1",correct: true},
                        {var:"v2",correct: false},
                        {var:"v3",correct: false} ,
                        {var:"v4",correct: false}]
                }
            ]
        },
        {
            description: 'Css3',
            games: [
                { question:"Вопрос 1",
                    answers:[
                        {var:"v1",correct: true},
                        {var:"v2",correct: false},
                        {var:"v3",correct: false} ,
                        {var:"v4",correct: false}]
                }
            ]
        },
        {
            description: 'Git',
            games: [
                { question:"Вопрос 1",
                    answers:[
                        {var:"v1",correct: true},
                        {var:"v2",correct: false},
                        {var:"v3",correct: false} ,
                        {var:"v4",correct: false}]
                }
            ]
        },

    ]};}

    callData = () => {
        fetch('https://kahoot-bootcamp4.herokuapp.com/games/')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.data);
                this.setState({
                    tests: data.data
                })
            })
    }

    componentWillMount(){
            this.callData()
        }

    render(){
        return(
            <Wraper>
                <Div>
                    {/*<Link to='/create'>*/}

                    <Button onClick={()=>{this.props.history.push('/create')}} >Create Test</Button>
                {/*</Link>*/}
                </Div>
                <Ul>
                    {this.state.tests.map((key,i)=>{
                        return (<Li id={key._id}>
                            <P>{this.state.tests[i].description}</P>
                            <Button >Редактировать</Button>
                            <Button >Start</Button>
                            </Li>)
                    })}

                </Ul>

            </Wraper>
        )
    }

}



const mapStateToProps = (state) => {
    return {
        // nickName: state.currentUser.nickName
    }
};
// export default AdminChoiseTest;
export default connect(mapStateToProps, null)(AdminChoiseTest);