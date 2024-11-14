import { useRecipeStore } from './recipeStore';
import { Link, useParams } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';
import EditRecipeForm from './EditRecipeForm';

  const RecipeDetails = () => {

    const {id} = useParams();
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === parseInt(id))
    );

    if (!recipe) {
        return <div>Recipe Not Found</div>;
    }

    return (
      <div>
        <Link to='/'>Home</Link>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <EditRecipeForm recipe={recipe}/>
        <DeleteRecipeButton recipe={recipe} />
      </div>
    );
  };

export default RecipeDetails
