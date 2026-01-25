// RecipeDetails component
import useRecipeStore from "./recipeStore";
import { useParams } from 'react-router-dom';

import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { recipeId } = useParams();

  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  /* Favorites */
  const { favorites, addFavorite, removeFavorite } = useRecipeStore();
  const isFavorite = favorites.includes(recipe.id);


  function handleFavorite() {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  }

  console.log(recipe)
  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <DeleteRecipeButton recipeId={recipeId} />
      <EditRecipeForm recipe={recipe} />
      {/* Render EditRecipeForm and DeleteRecipeButton here */}

      <button onClick={handleFavorite}>
        {isFavorite ? "❤️ Remove Favorite" : "🤍 Add Favorite"}
      </button>

    </div>
  );
};

export default RecipeDetails