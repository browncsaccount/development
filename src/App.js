import './App.css';
import appData from "./assets/app-data.json";
import CaveItem from "./components/CaveItem";
import React, { useState, useEffect } from 'react';
import FilterBar from "./components/FilterBar";

function App() {
    return (
    <div className="App">
        <div className="h1">
            <h1>The Cave</h1>
            <img src="https://i.postimg.cc/d1S5P5xd/thecave.png" width="100" alt="The Cave"/>
        </div>
      <FilterBar caveCatalog={appData}/>
    </div>
  );
}

export default App;
