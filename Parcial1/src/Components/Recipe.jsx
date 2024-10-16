import { useNavigate } from "react-router-dom";
import styles from"./Recipe.module.css"

const Recipe = ({ data, handleDelete }) => {
    const navigate = useNavigate();

    return(
        <div className={styles.recipeContainer}>
            <h3 className={styles.recipeTitle}>{data.name}</h3>
            <h3 className={styles.recipeType}>Tipo: {data.type}</h3>
            <button className={styles.btnDetails} onClick={() => {navigate("/details/" + data.id)}}>Detalles</button>
            <button className={styles.btnDelete} onClick={handleDelete}>Borrar</button>
        </div>
    )
}

export default Recipe;