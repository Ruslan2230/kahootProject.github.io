import React, { Component } from 'react';
import { Button } from "../../UI"
import styled from 'styled-components';


const Wrapper = styled.div`
    width: 600px;
    height: 100%;
    margin: auto;
    border: #9e77f1 4px solid;
    background-color: #e7e7e7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
const box = styled.div `
    height: 100%;
    width: 300px;
    background-color: #e7e7e7;
    display: flex;

    align-items: center;
    flex-direction: column;
    border: aqua 1px solid;
`;

const text = styled.div `
    height: 20px;
    width: 100px;
    background-color: #e7e7e7;
`;

class Create extends Component {
    constructor(props){
        super(props);
        this.state = {
            edit: false,
            id: null
        };
    }
    edit = (event) => {
        let curentNumber = event.target.id;
        this.setState ({
            edit: true,
            id : curentNumber
        });
    };
    createBlock = () => {
        this.props.createBlock()
    };
    remove = () => {
        this.props.deletBlock(this.props.index)
    };
    save = () => {
        this.props.updateQuestion (this.refs.newTxt0.value, this.state.id);
        {this.props.questionInfo[this.state.id].answers.map((v,j)=>{
            this.props.updateAnswers1(this.refs[`Txt${j}`].value, this.state.id, j);
        })}
        this.setState ({edit: false})
    };
    rendNorm = () => {
        return (
            <div>{this.props.questionInfo.map((element, i)=> {
                    return <div>
                        <div className="text">{element.question}</div>

                        {element.answers.map((answ, j)=> <div className="text" key={j}>{answ.var}</div>)}

                        <Button height="30" width="70" onClick={this.edit} id={i}>Редактировать</Button>
                        <Button height="30" width="70" color="#ff0808" onClick={this.remove} >Удалить</Button>
                    </div>
                }
            )}

            </div>


        );
    };

    rendEdit = () => {
        return (
            <div>
                <textarea ref="newTxt0" defaultValue={`${this.props.questionInfo[this.state.id].question}`}></textarea><br/>

                {this.props.questionInfo[this.state.id].answers.map((answ, j)=>{
                    return <div><textarea ref={`Txt${j}`} defaultValue={answ.var}></textarea><br/></div>
                })}
                <Button height="30" width="70" color="#5ab962" onClick={this.save} >Сохранить</Button>
            </div>
        );
    };

    render() {
        if (this.state.edit) {
            return this.rendEdit ();
        } else {
            return this.rendNorm ();
        }
    }
}

class AdminEditGame extends Component {

    constructor(props){
        super(props);
        this.state = {
            description: 'ИМЯ ИГРЫ',
            games: [
                { question:"Вопрос 1",
                    answers:[
                        {var:"v1",correct: true},
                        {var:"v2",correct: false},
                        {var:"v3",correct: false} ,
                        {var:"v4",correct: false}]
                }
            ]
        };
    };

    askGame = (id) =>{
        fetch(`https://kahoot-bootcamp4.herokuapp.com/games/${id}`)
            .then((res)=>res.json())
            .then((data)=> {
                console.log(data.data);
                this.setState({...data.data})
            })
    };
componentWillMount(){
    console.log(this.props.match.params.id);
    this.askGame(this.props.match.params.id)
}
    sendGame = () => {
        let newGame = this.state;
        console.log(newGame);
        fetch('https://kahoot-bootcamp4.herokuapp.com/games/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data.data.status === 200) {
                    this.props.history.push('/choise')
                } else {
                    alert("ОШИБКА В СОЗДАНИИ ТЕСТА")
                }
            });
    };
    namedGame = () => {
        let name = prompt();
        this.setState({description : name})
    };
    deletBlock =(i) => {
        let questionArr = this.state.games;
        questionArr.splice(i, 1);
        this.setState({games:questionArr})
    };
    createBlock =() => {
        let questionArr = this.state.games;
        questionArr.push(
            { question:"Вопрос",
                answers:[
                    {var:"ячейка для правильного ответа",correct: true},
                    {var:"v",correct: false},
                    {var:"v",correct: false} ,
                    {var:"v",correct: false}]
            }
        );
        this.setState({games:questionArr})
    };
    updateQuestion = (text, i)=>{
        let questionArr = this.state.games;
        questionArr[i].question = text;
        this.setState({games:questionArr})
    };
    updateAnswers1 = (text, i, j)=>{
        let questionArr = this.state.games;
        questionArr[i].answers[j].var = text;
        this.setState({games:questionArr})
    };

    render () {
        return (
            <Wrapper>
                <Button height="30" width="30" color="#E321E7" onClick={this.namedGame} >Введите имя игры</Button> <br/>
                <p>{this.state.description}</p>
                <Button height="30" width="30" color="#2D3EFF" onClick={this.createBlock} >Создать вопрос</Button>
                {
                    <Create questionInfo={this.state.games}
                            updateQuestion={this.updateQuestion}
                            updateAnswers1={this.updateAnswers1}
                            deletBlock={this.deletBlock}
                            createBlock={this.createBlock}
                    >
                    </Create>
                }
                <br/><Button height="30" width="30" color="#E321E7" onClick={this.sendGame} >ОТПРАВКА ИГРЫ</Button>

            </Wrapper>
        )
    }
}

export default AdminEditGame;