import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Allposts from './components/Allposts.js';
import OnePost from './components/Onepost.js';

function App (){

  return (
    <BrowserRouter>
    <Route component = {Allposts} path = "/" exact />
    <Route component = {OnePost} path = "/:slug"/>
    <div className = 'main'>
    </div>
    </BrowserRouter>
  )
};


export default App;