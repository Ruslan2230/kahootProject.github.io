import {Component} from 'react';
import React from 'react';
import styled from 'styled-components';
import {Button} from '../../UI';
import {connect} from 'react-redux';



// wraper
const Div = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #808080;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

`;




class StartPage extends Component{


 render(){
     return(
         <Div>
             <Button
                     color = {'#fff'}
                     width = {'60'}
                      onClick={()=>{this.props.history.push('/start')}}


             >USER</Button>

             <Button
                 color = {'#fff'}
                 width = {'60'}
                 onClick={()=>{this.props.history.push('/login')}}

             >TEACHER</Button>
         </Div>
     )
 }
}
export default StartPage;

// export default connect(mapStateToProps, null)(StartPage);

// this.props.history.push('/name')

