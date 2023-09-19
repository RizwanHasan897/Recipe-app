import './App.css';
import React from 'react';
import Header from './Componant/Header'
import Finder from './Componant/Finder';
import Recipe from './Componant/Recipe'
import { IngredientProvider } from './Componant/IngredientContext';

function App() {



  return (
    <div className="App">
      <Header/>
        <IngredientProvider>
          <div className='wrapper'>
            <div className='left'> 
              <Finder/>
            </div>
            <div className='right'>
            <Recipe />
            </div>
          </div>
        </IngredientProvider>
    </div>
  );
}

export default App;
