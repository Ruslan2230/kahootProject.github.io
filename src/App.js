import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect} from 'react-router-dom';
import './App.css';
import {excludeProp, getLogged} from "./utils";
import {Provider} from 'react-redux';
import store from './components/store/index';

import StartPage from './components/pages/startPage';
import AdminLogin from './components/pages/admin_login/Login'
import AdminCreateGame from './components/pages/admin_create_game';
import TestingPage from './components/pages/users_testing_page/index';
import AdminEditGame from './components/pages/edit/';
import UserStartPage from './components/pages/User_Start_Page/UserStartPage';
import UserName from './components/pages/User_Name/UserName';
import ResultPage from './components/pages/resultPage';
import PendingRoom from './components/pages/PendingRoom';
import Dashbord from './components/pages/Dashbord/index';
import AdminChoiseTest from './components/pages/adminChoiseTest/AdminChoiseTest';
import Common from './components/pages/Common/index';

const PrivateRoute = (props) => {

  // Проверяем залогинен ли пользователь
  if (getLogged()) {

    // Перенаправляем на закрытый роутинг

    return <Route {...excludeProp(props, 'component')} component={props.component}/>
  } else {

    // Перенаправляем на страницу логина
    return <Redirect to="/login"/>
  }
};


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className='links'>
              <NavLink to='/'>/==start==/</NavLink>
              <NavLink to='/common/testing'>Test</NavLink>
              <NavLink to='/create'>create</NavLink>
              <NavLink to='/edit'>edit</NavLink>
              <NavLink to='/login'>Login</NavLink>
              <NavLink to='/start'>Start</NavLink>
              <NavLink to='/name'>Name</NavLink>
              <NavLink to='/common/result'>result</NavLink>
              <NavLink to='/common/pending'>pending</NavLink>
              <NavLink to='/choise'>choise</NavLink>
              <NavLink to='/common/dashbord'>dashbord</NavLink>
              <NavLink to='/common'>Common</NavLink>
            </div>

            <Switch>
              <Route path='/login' component={AdminLogin}/>
              <Route path='/start' component={UserStartPage}/>
              <Route path='/name' component={UserName}/>
              <PrivateRoute path='/create' component={AdminCreateGame}/>
              <PrivateRoute path='/edit/:id' component={AdminEditGame}/>
              <Route path='/common/' component={Common}/>
              <Route path='/choise' component={AdminChoiseTest}/>

              <Route path='/' component={StartPage}/>


            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;