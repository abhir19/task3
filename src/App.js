import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TransactionList from './components/TransactionList';
import {Route,Switch} from 'react-router-dom';
import Main from './Main';


function App() {
  
  return (
    <>
   
     
    
    <Switch>
    <Route exact path="/" component={ Main }/>
    <Route exact path="/show" component={TransactionList}/>
   
    
      </Switch>
    </>

    
      
  ) 
}

export default App;
