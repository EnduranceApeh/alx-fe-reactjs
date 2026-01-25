import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [
    {
      id: "1",
      title: "Jollof Rice",
      description: "Delicious Ghana jollof",
    },
    {
      id: "2",
      title: "Stew",
      description: "Red tomatoes stew",
    },
  ],

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  setRecipes: (recipes) =>
    set({
      recipes,
    }),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter(
        (recipe) => recipe.id !== id
      ),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id
          ? updatedRecipe
          : recipe
      ),
    })),

  searchTerm: "",

  setSearchTerm: (term) =>
    set({
      searchTerm: term,
    }),

  filteredRecipes: [],

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title
          .toLowerCase()
          .includes(state.searchTerm.toLowerCase())
      ),
    })),


  // Store Is for user favorite recipes
  favorites: [],
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Generate simple personalized recommendations
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
