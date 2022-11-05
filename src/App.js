import React from "react"
import Banner from "./Components/Banner/Banner"
import NavBar from "./Components/NavBar/NavBar"
import './App.css'
import {action, originals, romace } from './urls'
import RowPost from "./Components/RowPost/RowPost";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={romace} title='Romance' isSmall/>
    </div>
  );
}

export default App;
