import './App.css';
import appData from "./assets/app-data.json";
import CaveItem from "./components/CaveItem";
import React, { useState, useEffect } from 'react';
import FilterBar from "./components/FilterBar";

function App() {
    return (
    <div className="App">
      <h1 className="h1">The Cave</h1>
      <FilterBar caveCatalog={appData}/>
    </div>
  );
}

export default App;
