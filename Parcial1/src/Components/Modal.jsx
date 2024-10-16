import { postRecipe, getRecipes } from "../Services";
import { useState } from "react";
import styles from "./Modal.module.css"

const Modal = ({ isOpen, setrecipes, close, title }) => {

    const [recipeName, setRecipeName] = useState("");
    const [recipeDescription, setRecipeDescription] = useState("");
    const [recipeType, setRecipeType] = useState(0);
    const [recipePreparation, setRecipePreparation] = useState("");

    const saveRecipe = async () => {
        if (recipeName == "" || recipeDescription == "" || recipeType == "" || recipePreparation == "") {
            alert("No se pudo guardar la receta porque hay campos inválidos");
        }
        else {
            const recipeData = {
                name: recipeName,
                description: recipeDescription,
                type: recipeType.toString(),
                preparation: recipePreparation
            }
            await postRecipe(recipeData)
            setrecipes(await getRecipes());
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
                                onChange={(e) => setRecipeName(e.target.value)}
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
                            <label>Tipo de Receta</label>
                            <input
                                type="text"
                                className={styles.inputText}
                                placeholder="Tipo de Receta"
                                onChange={(e) => setRecipeType(e.target.value)}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Pasos</label>
                            <input
                                type="text"
                                className={styles.inputText}
                                placeholder="Pasos"
                                onChange={(e) => setRecipePreparation(e.target.value)}
                            />
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