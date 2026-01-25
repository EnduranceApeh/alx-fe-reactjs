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

    console.log(recipe)
    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <DeleteRecipeButton recipeId={recipeId}/>
        <EditRecipeForm recipe={recipe}/>
        {/* Render EditRecipeForm and DeleteRecipeButton here */}
      </div>
    );
  };

  export default RecipeDetails