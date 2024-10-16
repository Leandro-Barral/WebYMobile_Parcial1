import { getRecipes, deleteRecipe } from "../Services"
import Recipe from "../Components/Recipe"
import { useEffect, useState } from "react"
import Modal from "../Components/Modal"
import styles from './HomePage.module.css';


const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [isCreating, setIsCreating] = useState(false);
    const fetchRecipes = async () => {setRecipes(await getRecipes());}

    const newRecipe = () => {
        setIsCreating(true)
    }

    useEffect(() => {
        fetchRecipes();
    }, [])

    return (
        <div className={styles.homepageContainer}>
            <h1>Gestor de Recetas</h1>
            <button onClick={newRecipe} className={styles.btnAgregarReceta}>Agregar Receta</button>
            <div className={styles.recipesContainer}>
                {recipes.map((recipe) => {
                    return (
                        <Recipe data={recipe} handleDelete={async () => {setRecipes(await deleteRecipe(recipe.id));}}/>
                    )
                })}
            </div>
            <Modal isOpen={isCreating} setrecipes={setRecipes} close={()=>{setIsCreating(false)}} title={"Nueva Receta"}></Modal>            
        </div>
    )
}

export default HomePage;