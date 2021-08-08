import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemLisContainer from './components/ItemListContainer/ItemLisContainer.js'
import ItemCount from './components/ItemCount/ItemCount';



function App() {

  return (
    
    <div className="App">
      <NavBar />
      <ItemLisContainer />
      <ItemCount />
    </div>
    
  );
}

export default App;
