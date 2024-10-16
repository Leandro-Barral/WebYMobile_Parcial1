const URL = "http://localhost:3000/api/dishes/";

export const getRecipes = async () => {
    const res =  await fetch(URL);
    return await res.json();
}

export const getRecipe = async (id) => {
    const res = await fetch(URL + id);
    const recipeArray = await res.json();
    return recipeArray[0];
}

export const postRecipe = async (recipeData) => {
    const res = await fetch(URL, {
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(recipeData)
    });
    return await res.json();
}

export const putRecipe = async (recipeData) => {
    const res = await fetch(URL + recipeData.id, {
        method: 'PUT',
        body: JSON.stringify(recipeData)
    });
    return await res.json();
}

export const deleteRecipe = async (id) => {
    const res = await fetch(URL + id, {
        method: 'DELETE'
    });
    return await res.json();
}