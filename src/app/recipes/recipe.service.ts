import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('TestRecipe',
            'This is sample description',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
        new Recipe('AnotherTestRecipe',
            'This is sample description',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')
    ];

    getRecipes() {
        // slice to enforce copy of original array
        return this.recipes.slice();
    }
}
