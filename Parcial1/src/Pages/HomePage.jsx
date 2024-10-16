import { getRecipes, deleteRecipe } from "../Services"
import Recipe from "../Components/Recipe"
import { useEffect, useState } from "react"
import Modal from "../Components/Modal"
import styles from './HomePage.module.css';


const HomePage = ({colorMode}) => {
    const [recipes, setRecipes] = useState([]);
    const [isCreating, setIsCreating] = useState(false);
    const [filter, setFilter] = useState("");
    const [bgColor, setBGColor] = useState({backgroundColor: "white"});
    const fetchRecipes = async () => {setRecipes(await getRecipes());}

    /* Nota: no me dió el tiempo de completar el modo oscuro, a modo de ejemplo cambie un par de colores, podría seguir repitiendo el mismo procedimiento en las demás cosas para lograr una estética completa de modo oscuro.*/
    useEffect(() => {
        if(colorMode === "light"){
            setBGColor({
                backgroundColor: "white",
                color: "black"
            });
        }
        else{
            setBGColor({
                backgroundColor: "#000039",
                color: "lightgrey"
            });
        }
    }, [colorMode]);
    

    const newRecipe = () => {
        setIsCreating(true)
    }

    useEffect(() => {
        fetchRecipes();
    }, [])

    return (
        <div id="container" style={bgColor} className={styles.homepageContainer}>
            <h1>Gestor de Recetas</h1>
            <div className={styles.headerContainer}>
                <input type="text" className={styles.searchInput} placeholder="Buscar Receta" onChange={(e) => setFilter(e.target.value)}/>
                <button onClick={newRecipe} className={styles.btnAgregarReceta}>Agregar Receta</button>
            </div>
            <div className={styles.recipesContainer}>
                {recipes.map((recipe) => {
                    if (!recipe.type.toLowerCase().includes(filter.toLowerCase())) return;
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