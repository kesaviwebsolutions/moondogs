import './App.css';
import Navbar from './components/Navbar'

import React, { Component } from 'react'
import Home from './components/Home';


export default class App extends Component {
  render() {
    return (
      <div>
       
        <Navbar/>
        <Home/>

      </div>
    )
  }
}



