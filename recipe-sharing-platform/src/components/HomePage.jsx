import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import itemsData from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(itemsData)
  }, [])
  return(
    <>
    <h1 className="text-lg font-bold">Recipe sharing platform</h1>
      <ul className="flex gap-5 justify-center items-center mt-[60px] rounded-lg">
        {recipes.map((recipe) => {
          return (<li key={recipe.id} className="shadow-lg w-[250px] h-[100px] text-center">
            <img src={recipe.image} alt="" />
            <h2 className="font-bold">{recipe.title}</h2>
            <Link to={`/recipe/${recipe.id}`} className="text-blue-300 hover:text-blue-500">View Details</Link>

          </li>)
        })}
      </ul>
    </>
  )
}

export default HomePage