import React, { Component } from 'react';
import styled from 'styled-components';

const Wraper = styled.div`
background-color: #e7e8ea;
 width: 100%;
    height: 100vh;
    display: flex;
    font-size: 30px;
   display: flex;
   flex-direction: column;
   //flex-wrap: wrap;
`;

const Ul = styled.ul`
 list-style: none;
     flex-direction: column;
     margin: auto;
     
`;

const Li = styled.li`
:first-child {
    background: url(http://i.imgur.com/XC7Sd03.png) rgba(25, 255, 255, 0.2) center no-repeat/cover;
   background-blend-mode: multiply;
   color: #fff;
    
    }
display: flex;
align-self: center;
`;

const P = styled.li`
margin: 30px 100px;
`

const Div = styled.div`
display: flex;
margin:0 auto;
padding-top: 80px;
`
const Div2 = styled.div`
margin: auto;

`


const H1 = styled.p` 
margin-left: 321px;
`
const H2 = styled.p` 
margin-left: 208px;
`


class ResultPage extends Component {
    state =[
        {
          name: 'USER1',
          score:1036
        },{
            name: 'USER2',
            score:1202
        },{
            name: 'USER3',
            score:2036
        },{
            name: 'USER4',
            score:202
        },{
            name: 'USER5',
            score:10
        },{
            name: 'USER6',
            score:1302
        },{
            name: 'USER7',
            score:2022
        },{
            name: 'USER8',
            score:402
        }
    ];

    render (){
    return (

        <Wraper>


           <Div>
               <H1>NAME</H1><H2>SCORE</H2></Div>
<Div2>
    <Ul>
        {this.state.sort((a,b)=>{
              return  b.score - a.score;
            }).map((item,e)=>{
                let a = e;
                a++;
                return  <Li><P>№{a}</P>  <P>{this.state[e].name}</P>
                    <P>{this.state[e].score}</P>
                </Li>})}
                </Ul>
</Div2>
        </Wraper>
    )

}
}
export default ResultPage;
