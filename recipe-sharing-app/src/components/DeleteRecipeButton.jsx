import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipe }) => {
    const navigate = useNavigate();
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

    const handleDelete = () => {
        deleteRecipe(recipe);
        navigate('/');
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default DeleteRecipeButton