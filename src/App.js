import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Trainers from './components/Trainers';
import TrainerCard from './components/TrainerCard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/">
            <Trainers/>
          </Route>
          <Route path="/trainers">
            <Trainers/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
