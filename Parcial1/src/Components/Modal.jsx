import { postRecipe } from "../Services";
import { useState } from "react";
import styles from "./Modal.module.css"

const Modal = ({ isOpen, setrecipes, close, title }) => {

    const [recipeTitle, setRecipeTitle] = useState("");
    const [recipeDescription, setRecipeDescription] = useState("");
    const [recipePlayers, setRecipePlayers] = useState(0);
    const [recipeCategories, setRecipeCategories] = useState("");

    const saveRecipe = async () => {
        if (recipeTitle == "" || recipeDescription == "" || recipePlayers == "" || recipeCategories == "") {
            alert("No se pudo guardar la receta porque hay campos inválidos");
        }
        else {
            const recipeData = {
                title: recipeTitle,
                description: recipeDescription,
                players: recipePlayers.toString(),
                categories: recipeCategories
            }
            setrecipes(await postRecipe(recipeData));
            close();
        }
    }

    return (
        isOpen ?
            <>
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h3 className={styles.modalTitle}>{title}</h3>

                        <div className={styles.formGroup}>
                            <label>Nombre de la Receta</label>
                            <input
                                type="text"
                                className={styles.inputText}
                                placeholder="Nombre de la Receta"
                                onChange={(e) => setRecipeTitle(e.target.value)}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Descripción de la Receta</label>
                            <input
                                type="text"
                                className={styles.inputText}
                                placeholder="Descripción de la Receta"
                                onChange={(e) => setRecipeDescription(e.target.value)}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Cantidad de Participantes</label>
                            <input
                                type="number"
                                className={styles.inputNumber}
                                onChange={(e) => setRecipePlayers(e.target.value)}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Categorías</label>
                            <select
                                className={styles.selectCategory}
                                onChange={(e) => setRecipeCategories(e.target.value)}
                            >
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                                <option value="Men / Women">Men / Women</option>
                            </select>
                        </div>

                        <div className={styles.buttonGroup}>
                            <button className={styles.cancelButton} onClick={close}>Cancelar</button>
                            <button className={styles.acceptButton} onClick={saveRecipe}>Aceptar</button>
                        </div>
                    </div>
                </div>

            </>
            :
            <></>
    )
}

export default Modal;