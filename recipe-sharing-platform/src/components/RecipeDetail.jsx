import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // convert id to number (since params are strings)
    const recipeId = Number(id);

    const foundRecipe = recipesData.find(
      (item) => item.id === recipeId
    );

    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="p-4">Recipe not found...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">
        {recipe.title}
      </h1>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Ingredients
      </h2>


      <h2 className="text-xl font-semibold mt-6 mb-2">
        Summmary
      </h2>
      <p>{recipe.summary}</p>

    </div>
  );
};

export default RecipeDetail;
 