import React from 'react'
import './App.css';
import {Switch} from 'react-router-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import HeaderBar from './Component/Header/HeaderBar'
import Home from './Component/Otherpages/Home'
import Tasks from './Component/Otherpages/Tasks'
import AddTask from './Component/Otherpages/AddTask'
import View from './Component/Otherpages/View'
import Login from './Component/Otherpages/Login'
import Logout from './Component/Otherpages/Logout'
import Signup from './Component/Otherpages/Signup'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <HeaderBar/>   
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/tasks" component={Tasks}/>
      <Route exact path="/add-task" component={AddTask}/>
      <Route exact path="/view" component={View}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/logout" component={Logout}/>
      <Route exact path="/signup" component={Signup}/>
       
      </Switch>
     </BrowserRouter>
    </div>
  );
}
export default App;
