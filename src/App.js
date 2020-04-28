import React from 'react';
import './App.css';
import Container from './components/moviesContainer';
import Card from './components/movieCard';
import Modall from './components/modal';
import { Route } from 'react-router-dom'
import Description from "./components/desc"
import Acc from './components/acueil';

function App() {
  return (
    <div>
      <Route path="/:id" component={Description} />
      <Route exact path="/" component={Acc} />
      
    </div>
  );
}

export default App;
