function RecommendationList() {
  const {
  recommendations,
  generateRecommendations,
} = useRecipeStore();

  useEffect(() => {
  generateRecommendations();
}, []);

return (
  <div>
    <h2>Recommended for You</h2>
    
    {recommendations.length === 0 && (
    <p>No recommendations yet.</p>
    )}
    
    {recommendations.map((recipe) => (
    <div key={recipe.id}>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
    </div>
    ))}
  </div>
)
}

export default RecommendationList;