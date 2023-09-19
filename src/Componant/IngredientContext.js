import React, { createContext, useContext, useState } from 'react';

const IngredientContext = createContext();

export function useIngredients() {
  return useContext(IngredientContext);
}

export function IngredientProvider({ children }) {
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  const removeIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };

  return (
    <IngredientContext.Provider value={{ ingredients, addIngredient, removeIngredient }}>
      {children}
    </IngredientContext.Provider>
  );
}
