import recipes from "./recipes.mjs";

function getRandomInt() {
    return Math.floor(Math.random()*recipes.length)
}

function getRandomRecipe(list) {
    const randomNum = getRandomInt();
    return list[randomNum];
}

function recipePortion(recipe) {
    return `<figure class="recipe">
        <img class="recipe_img" alt="${recipe.name}" src="${recipe.image}">
        <figcaption>
            <div class="info">
                ${tagsTemplate(recipe.tags)}
                <h3 class="name">${recipe.name}</h3>
                ${ratingTemplate(recipe.rating)}
                <p>${recipe.description}</p>
            </div>
        </figcaption>
    </figure>`;
}

function tagsTemplate(tags) {
    let html = `<ul class="tags">`;
    tags.forEach(tag => {
        html += `<li>${tag}</li>`;
    });

    html += `</ul>`;
    return html;
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else if (i - 0.5 === rating) {
            html += `<span aria-hidden="true" class="icon-star-half">1/2</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

    html += `</span>`;
    return html;
}


const recipe = getRandomRecipe(recipes);

function renderRecipes(recipeList) {
    const outputElement = document.querySelector("#recipe-block");
    const recipeHTML = recipeList.map(recipe => recipePortion(recipe)).join('');
    outputElement.innerHTML = recipeHTML;
}

function filterRecipes(query) {
    return recipes
        .filter(recipe => {
            const queryLower = query.toLowerCase();
            return (
                recipe.name.toLowerCase().includes(queryLower) ||
                recipe.tags.some(tag => tag.toLowerCase().includes(queryLower)) ||
                recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(queryLower))
            );
        })
        .sort((a, b) => a.name.localeCompare(b.name)); 
}

function searchHandler(event) {
    event.preventDefault(); 
    const query = document.getElementById('searched').value; 
    const filteredRecipes = filterRecipes(query); 
    renderRecipes(filteredRecipes); 
}

function init() {
    recipes.sort((a, b) => a.name.localeCompare(b.name)); 
    renderRecipes(recipes);
    const searchButton = document.querySelector('.search');
    searchButton.addEventListener('click', searchHandler);
    const randomButton = document.querySelector('.random-recipe');
    randomButton.addEventListener('click', randomHandler);
    const allButton = document.querySelector('.all-recipes')
    allButton.addEventListener('click', allHandler);
}

init();

function allHandler(event) {
    recipes.sort((a, b) => a.name.localeCompare(b.name)); 
    renderRecipes(recipes);
}

function randomHandler(event) {
    const recipe = getRandomRecipe(recipes);
    renderRecipes([recipe]);
}

init();