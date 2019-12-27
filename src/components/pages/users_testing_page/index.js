//
// import { PropTypes } from "prop-types";
//
// import React from 'react';
// import Timer from "../Timer/Timer";
// import './index.css'
// import styled from 'styled-components';
//
//
//
// const TestBox = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-around;
//     align-items: center;
//     /*width: 150px;*/
//     min-height: 200px;
//     background-color: #e7e7e7;
//     /*border: 4px solid;*/
//     border-top: none;
//     border-bottom: none;
//     box-sizing: border-box;
//     margin: auto;
//
// `;
//
// let color = ["red", "blue", "yellow", "green", "purple","firebrick","darkorange","chartreuse", "khaki", "gold", "azure"];
// let s = Math.floor(Math.random()*8);
//
// const BoxAnswer = styled.div`
//
//     display: flex;
//
//     margin: 20px;
//     vertical-align: center;
//     width: 47%;
//     height: 350px;
//     background-color: ${color[s]};
// `;
//
// const BoxAnswer2 = styled.div`
//     /*width: 50px;*/
//     display: flex;
//     /*justify-content: center;*/
//
//     margin: 20px;
//     vertical-align: center;
//     width: 47%;
//     height: 350px;
//     background-color: ${color[s+1]};
// `;
//
// const BoxAnswer3 = styled.div`
//
//     display: flex;
//     /*justify-content: center;*/
//
//     margin: 20px;
//     vertical-align: center;
//     width: 47%;
//     height: 350px;
//     background-color: ${color[s+2]};
// `;
//
// const BoxAnswer4 = styled.div`
//     display: flex;
//     margin: 20px;
//     vertical-align: center;
//     width: 47%;
//     height: 350px;
//     background-color: ${color[s+3]};
// `;
//
// const BoxWrap = styled.div`
//     background-color: #e7e8ea;
//     height: 100vh;
//     padding: 2rem;
//
// `;
//
// const Box = styled.div`
//     margin: auto;
//     background-color: #e7e7e7;
// `;
//
// const P = styled.div`
// margin: auto;
// `;
//
// const   TestingPage = (props) => {
//     console.log(props);
//     this.state = {
//         mark: false,
//         description: 'ИМЯ ИГРЫ',
//         games: [
//             { question:"Вопрос 1",
//                 answers:[
//                     {var:"Ответ 1",correct: true },
//                     {var:"Ответ 2",correct: false},
//                     {var:"Ответ 3",correct: false},
//                     {var:"Ответ 4",correct: false}
//                 ]
//             }
//         ]
//     };
//
//     choiceAnswer = (event)=> {
//         if(this.state.mark === false) {
//             let choice = event.target.innerHTML;
//             console.log(choice);
//             this.setState({
//                 mark: true
//             })
//         }
//     };
//
//
//     render ()
//     {
//         let Question = this.state.games[0].question;
//         return (
//
//             <BoxWrap>
//                 <Box>
//
//                     <h2>{Question} </h2>
//
//                     <Timer/>
//
//                     <TestBox onClick={this.choiceAnswer}>
//                         {/*<BoxAnswer ><P>ПЕРВЫЙ</P></BoxAnswer>*/}
//                         {/*<BoxAnswer2 ><P>ВТОРОЙ</P></BoxAnswer2>*/}
//                         {/*<BoxAnswer3 ><P>ТРЕТИЙ</P></BoxAnswer3>*/}
//                         {/*<BoxAnswer4 ><P>ЧЕТВЕРТЫЙ</P></BoxAnswer4>*/}
//
//                         {this.state.games[0].answers.map((element, i) => {
//                             // console.log(element.var);
//                             return <BoxAnswer2>{element.var}</BoxAnswer2>
//                         })}
//
//                     </TestBox>
//                 </Box>
//             </BoxWrap>
//         )
//     }
// };
//
// export default TestingPage;



import { PropTypes } from "prop-types";

import React, {Component} from 'react';
import Timer from "../../UI/Timer/Timer";
import './index.css'
import styled from 'styled-components';
import {connect} from 'react-redux';



const TestBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    /*width: 150px;*/
    min-height: 200px;
    background-color: #e7e7e7;
    /*border: 4px solid;*/
    border-top: none;
    border-bottom: none;
    box-sizing: border-box;
    margin: auto;
`;

let color = ["red", "blue", "yellow", "green", "purple","firebrick","darkorange","chartreuse", "khaki", "gold", "azure"];
let s = Math.floor(Math.random()*8);
let order1 = Math.floor(Math.random()*10);
let order2 = Math.floor(Math.random()*10);
let order3 = Math.floor(Math.random()*10);
let order4 = Math.floor(Math.random()*10);

const BoxAnswer = styled.div`
  
    display: flex;
   justify-content: center;
   align-items: center;
   font-size: 300%;
   font-weight: bold;
    margin: auto;
    vertical-align: center;
    width: 47%;
    height: 90px;
    background-color: ${color[s]};
    order: ${order1};
`;

const BoxAnswer2 = styled.div`
   
    display: flex;
    justify-content: center;
   align-items: center;
   font-size: 300%;
   font-weight: bold;
   
    margin: auto;
    vertical-align: center;
    width: 47%;
    height: 90px;
    background-color: ${color[s+1]};
    order: ${order2};
`;

const BoxAnswer3 = styled.div`
    
    display: flex;
    justify-content: center;
   align-items: center;
   font-size: 300%;
   font-weight: bold;
    margin: auto;
    vertical-align: center;
    width: 47%;
    height: 90px;
    background-color: ${color[s+2]};
    order: ${order3};
`;

const BoxAnswer4 = styled.div`
    display: flex;
    justify-content: center;
   align-items: center;
   font-size: 300%;
   font-weight: bold;
    margin: auto;
    vertical-align: center;
    width: 47%;
    height: 90px;
    background-color: ${color[s+3]};
    order: ${order4};
`;

const BoxWrap = styled.div`
    background-color: #f8fff9;
`;

const Box = styled.div`
    width: 600px;
    //height: 400px;
    margin: auto;
    border: #9e77f1 2px solid;
    background-color: #e7e7e7;
`;


class TestingPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            mark: false,
            description: 'ИМЯ ИГРЫ',
            games: [

                { questionText:`What is the output of this code? \nfunction bin (num){ \nwar res = \"\", \nwhile (num>0){\nres=num%2+res \nnum=Math.floor(num/2)\n } \nreturn res \n} \ndocument.write(bin(6))`,


                    answers:[
                        {var:"110",correct: true },
                        {var:"100",correct: false},
                        {var:"001",correct: false},
                        {var:"101",correct: false}

                    ]
                },{},{}
            ]
        };
    };
    choiceAnswer = (event)=> {
        if(this.state.mark === false) {
            let choice = event.target.innerHTML;
            let corr = this.state.games[0].answers[0].var;
            console.log(corr)
            console.log(choice);
            if(choice==corr){alert("CORRECT")}
            else (alert("NOT CORRECT"))
            this.setState({
                mark: true
            })
        }
    };

    componentDidMount(){

        fetch('/games/5afac2581652e80014d995eb',{
            method: "GET",
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then( game => {
                this.setState({
                    games:game.data.games,
                    description: game.data.description
                })
            })
            .catch(e=>{console.log(e)});

    }



    render () {
        // console.log(this.state.games)
         console.log(this.state.games);
         console.log(this.state.games[1].questionText);

         let Question = this.state.games[0].questionText;


        return (

            <BoxWrap>
                <Box>
                    <h2>{Question}</h2>
                    <Timer />
                    <TestBox onClick={this.choiceAnswer}>

                        <BoxAnswer >{this.state.games[0].answers[0].var}</BoxAnswer>

                        <BoxAnswer2 >{this.state.games[0].answers[1].var}</BoxAnswer2>

                        <BoxAnswer3 >{this.state.games[0].answers[2].var}</BoxAnswer3>

                        <BoxAnswer4 >{this.state.games[0].answers[3].var}</BoxAnswer4>


                        {/*{this.state.games[0].answers.map((element, i)=>{*/}
                        {/*// console.log(element.var);*/}
                        {/*return <BoxAnswer2 >{element.var}</BoxAnswer2>*/}
                        {/*})}*/}

                    </TestBox>
                </Box>
            </BoxWrap>
        )}
}

 // export default TestingPage;

const mapStateToProps = (state) => {
    return {
         questions: state.questions,
        id: state._id

    }
};

export default connect(mapStateToProps, null)(TestingPage);
