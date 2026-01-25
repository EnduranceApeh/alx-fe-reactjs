
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import RecommendationList from "./components/RecommendationsList";
import FavoritesList from "./components/FavoritesList";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>

    <Router>
      <Routes>
        <Route
         path="/"
         element={
          <>
            <SearchBar />
            <AddRecipeForm />
            <RecipeList />
            <FavoritesList />
            <RecommendationList />
          </>
         } />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
