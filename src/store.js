import { createStore } from 'redux';

const initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_AUTHOR_FIRST = 'UPDATE_AUTHOR_FIRST';
export const UPDATE_AUTHOR_LAST = 'UPDATE_AUTHOR_LAST';
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';
export const UPDATE_INSTRUCTIONS = 'UPDATE_INSTRUCTIONS';
export const UPDATE_RECIPES = 'UPDATE_RECIPES';
export const CLEAR_FIELDS = 'CLEAR_FIELDS';
export const DELETE_RECIPE = 'DELETE_RECIPE';

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_NAME:
            return {
                ...state,
                name: action.payload
            }
        case UPDATE_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case UPDATE_AUTHOR_FIRST:
            return {
                ...state,
                authorFirst: action.payload
            }
        case UPDATE_AUTHOR_LAST:
            return {
                ...state,
                authorLast: action.payload
            }
        case UPDATE_INGREDIENTS:
            const newIngredients = [...state.ingredients, action.payload]
            return {
                ...state,
                ingredients: newIngredients
            }
        case UPDATE_INSTRUCTIONS:
            const newInstructions = [...state.instructions, action.payload]
            return {
                ...state,
                instructions: newInstructions
            }
        case UPDATE_RECIPES:
            const { name, category, authorFirst, authorLast, ingredients, instructions } = state;
            const recipe = { name, category, authorFirst, authorLast, ingredients, instructions };
            const newRecipes = [...state.recipes, recipe];
            return {
                ...state,
                recipes: newRecipes
            }
        case CLEAR_FIELDS:
            return {
                name: '',
                category: '',
                authorFirst: '',
                authorLast: '',
                ingredients: [],
                instructions: [],
                recipes: state.recipes
            }
        case DELETE_RECIPE:
            const updatedRecipes = state.recipes;
            updatedRecipes.splice(action.payload, 1);
            return {
                ...state,
                recipes: updatedRecipes
            }
        default: return state;
    }
}

export default createStore(reducer);
