import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore'; // Adjust the path if necessary

const RecipeList = () => {
  const { filteredRecipes, filterRecipes, searchTerm } = useRecipeStore();

  useEffect(() => {
    filterRecipes(); // Filter recipes whenever the search term changes
  }, [searchTerm, filterRecipes]);

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>{recipe.title}</div>
      ))}
    </div>
  );
};

export default RecipeList;