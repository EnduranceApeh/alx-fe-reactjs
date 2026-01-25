import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [
  {
    id: "1",
    title: "Jollof Rice",
    description: "Delicious ghanna jolllof",
  },
  {
    id: "2",
    title: "Stew",
    description: "Red tomatoes stew"
  }
  ],
  addRecipe: (newRecipe) => set(state => ({recipes: [...state.recipes, newRecipe]})),
  setRecipes: (recipes) => set({ recipes }),

  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id)
  })),
  updateRecipe: (updatedRecipe) => 
    set((state) => ({
      recipes: state.recipes.map((recipe) => 
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    })) 
}))

export default useRecipeStore;