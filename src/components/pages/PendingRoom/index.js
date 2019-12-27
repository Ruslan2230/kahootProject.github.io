import  React, {Component} from "react";
import styled from 'styled-components';
import {connect} from 'react-redux';




const Container = styled.div`
    font-style: italic;
    font-size: 26px;
`

const Ul = styled.div`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0;
`


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
`

const H1 = styled.div`
font-size: 36px;
padding: 50px 0;
display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`

const Btn = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const P = styled.div`
font-size: 26px;
font-style: italic;
opacity: .7;
`

class PedingRoom extends Component{
    constructor(props){
        super(props);
        this.state = {
            // currentUser: this.props.nickName,
            // userList: this.props.users.users,
            //  userList: [] ,
             userList: ['Jim', 'Bim', 'Sim', 'Kim']

        };
    }

    componentDidMount(){

        window.socket.on("new-user-connected", (users) => {

            this.setState({
                // userList: users
                userList: users
            })

        });

        window.socket.on("user-disconnected", (users) => {
            this.setState({
                userList: users
            })
        });
        window.socket.on("start-game", (questions) => {
            console.log(questions);
            this.props.setQuestions(questions);
            this.props.history.push("/common/testing");
        })

    }

    componentWillUnmount(){
        window.socket.off("new-user-connected");
        window.socket.off("user-disconnected");
    }

    render(){
        return(

            <Div>

                <H1>{this.props.currentUser}</H1>
                <P>Waiting for other students!!!</P>
                <Container>
                    <Ul>
                        {this.props.users.map((user, index) => {
                            // return <Li>{users.toUpperCase()}</Li>
                            return <Li>{user.nickName} </Li>
                        })}



                        {/*{this.state.userList.map((users, index) => {*/}
                            {/*// return <Li>{users.toUpperCase()}</Li>*/}
                            {/*return <Li>{users}</Li>*/}
                        {/*})}*/}

                    </Ul>
                </Container>



            </Div>
        )
    }


}
const mapStateToProps = (state) => {
    return {

        nickName: state.currentUser.nickName,
         users:state.users.users
    }
};

export default connect(mapStateToProps, null)(PedingRoom);




