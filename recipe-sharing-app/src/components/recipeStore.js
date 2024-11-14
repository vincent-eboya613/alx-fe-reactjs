import { create } from 'zustand';

export const useRecipeStore = create(set => ({
  recipes: [], // Array of recipes
  searchTerm: '', // The term to search/filter by
  filteredRecipes: [], // Array to hold the filtered results
  
  // Existing actions
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }), // Fixing typo (should be recipes instead of Recipes)
  deleteRecipe: (recipeToDelete) => set(state => ({ 
    recipes: state.recipes.filter(recipe => recipe !== recipeToDelete) 
  })),
  updateRecipe: (updatedRecipe) => set(state => ({ 
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe) 
  })),
  
  // New actions for search and filtering
  setSearchTerm: (term) => set({ searchTerm: term }), // Action to set search term
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
}));

export { useRecipeStore };