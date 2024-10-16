import { getRecipes, deleteRecipe } from "../Services"
import Recipe from "../Components/Recipe"
import { useEffect, useState } from "react"
import Modal from "../Components/Modal"
import styles from './HomePage.module.css';


const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [isCreating, setIsCreating] = useState(false);
    const [filter, setFilter] = useState("");
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
            <div className={styles.headerContainer}>
                <input type="text" className={styles.searchInput} placeholder="Buscar Receta" onChange={(e) => setFilter(e.target.value)}/>
                <button onClick={newRecipe} className={styles.btnAgregarReceta}>Agregar Receta</button>
            </div>
            <div className={styles.recipesContainer}>
                {recipes.map((recipe) => {
                    if (!recipe.name.toLowerCase().includes(filter.toLowerCase())) return;
                    else{
                        return (
                            <Recipe data={recipe} handleDelete={async () => {
                                await deleteRecipe(recipe.id);
                                setRecipes(await getRecipes());
                            }}/>
                        )
                    }
                })}
            </div>
            <Modal isOpen={isCreating} setrecipes={setRecipes} close={()=>{setIsCreating(false)}} title={"Nueva Receta"}></Modal>            
        </div>
    )
}

export default HomePage;