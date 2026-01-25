import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom"

function DeleteRecipeButton({recipeId}) {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate()

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/recipe")
  }
  return(
    <button onClick={handleDelete}>Delete Recipe</button>
  )
}

export default DeleteRecipeButton;