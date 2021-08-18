import React from 'react';
import ItemLisContainer from './components/ItemListContainer/ItemLisContainer.js'
import ItemCount from './components/ItemCount/ItemCount';
import NavBar from './components/NavBar/NavBar.js';


const datos ={
  titulo: "PRODUCTOS"
}

function App() {

  return (
    
    <div className="App">
      <NavBar/>
      <ItemLisContainer titulo= {datos.titulo} />
      <ItemCount />
    </div>
    
  );
}

export default App;
