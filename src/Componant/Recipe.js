// Recipe.js
import React from 'react';
import { useIngredients } from './IngredientContext';

function Recipe() {
  const { ingredients } = useIngredients();

  return (
    <div>
      <h3>Recipe</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recipe