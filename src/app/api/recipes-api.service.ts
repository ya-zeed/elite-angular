import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { recipesDetails } from '../interface/recipesDetails.interface';

@Injectable({
  providedIn: 'root',
})
export class RecipesApiService {
  recipeIndex:number = 0;
  constructor(private http: HttpClient) {}
  getRecipe(index: number) {
    this.recipeIndex = index;
    return this.http.get(`https://elite.yt.sa/api/recipes/${index}/languages/`);
  }

  getLanguage(languages:string, index: number) {
    this.http.get(
      `https://elite.yt.sa/api/recipes/${this.recipeIndex}/languages/${index}`
    ).subscribe(res =>{console.log(res)})
  }


}
