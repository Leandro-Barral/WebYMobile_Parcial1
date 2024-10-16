import { useParams } from "react-router-dom";
import { getRecipe } from "../Services";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const RecipesPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [preparation, setPreparation] = useState("");
    
    useEffect(() => {
        const fetchRecipe = async () => {
            const fetchedRecipe = await getRecipe(id);
            setName(fetchedRecipe.name);
            setDescription(fetchedRecipe.description);
            setType(fetchedRecipe.type);
            setPreparation(fetchedRecipe.preparation);
        };
        fetchRecipe();
    }, []);

    return(
        <>
            <button onClick={() => {navigate("/")}}>Atrás</button>
            <div>Nombre: {name}</div>
            <div>Descripcion: {description}</div>
            <div>Tipo de Receta: {type}</div>
            <div>Pasos: {preparation}</div>
        </>
    )
}

export default RecipesPage; 