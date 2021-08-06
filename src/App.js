import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemLisContainer from './components/ItemListContainer/ItemLisContainer.js'
import ItemCount from './components/ItemCount/ItemCount.js';
import {DataProvider } from "./components/itemList/itemList"

function App() {

  return (
    <DataProvider>
      <div className="App">
        <NavBar />
        <ItemLisContainer />
        <ItemCount />
      </div>
    </DataProvider>
  );
}

export default App;
