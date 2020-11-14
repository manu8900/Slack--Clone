import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <Router>
      <Header/>
      <div className="app__body">
       <Sidebar/>
       <Switch>
         <Route path="/room/:roomId" component={Chat}/>
       </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
