import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Trainers from './components/Trainers';
import TrainerMain from './components/TrainerMain';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>  
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/trainers">
            <Trainers/>
          </Route>
          <Route path="/trainermain/:id">
            <TrainerMain/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
