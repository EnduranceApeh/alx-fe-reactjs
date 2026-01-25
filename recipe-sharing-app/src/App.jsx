
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";

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
          </>
         } />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
