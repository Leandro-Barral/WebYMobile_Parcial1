import { useParams } from "react-router-dom";
import { getRecipe } from "../Services";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const RecipesPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [players, setPlayers] = useState("");
    const [categories, setCategories] = useState("");
    
    useEffect(() => {
        const fetchRecipe = async () => {
            const fetchedRecipe = await getRecipe(id);
            setTitle(fetchedRecipe.title);
            setDescription(fetchedRecipe.description);
            setPlayers(fetchedRecipe.players);
            setCategories(fetchedRecipe.categories);
        };
        fetchRecipe();
    }, []);

    return(
        <>
            <button onClick={() => {navigate("/")}}>Atrás</button>
            <div>Nombre: {title}</div>
            <div>Descripcion: {description}</div>
            <div>Cantidad de Jugadores: {players}</div>
            <div>Categorías: {categories}</div>
        </>
    )
}

export default RecipesPage; 