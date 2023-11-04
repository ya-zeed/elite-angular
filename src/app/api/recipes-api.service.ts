import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RecipesApiService {
  recipeIndex: number = 0;
  sharedData: any;
  recipeDetails: any;

  constructor(private http: HttpClient, private router: Router) {}

  getRecipe(index: number) {
    this.recipeIndex = index;
     this.http
      .get(`https://elite.yt.sa/api/recipes/${index}/languages/`)
      .subscribe((res: any) => {
        console.log(res.data);
        this.setSharedData(res.data);
        this.router.navigate(['recipe']);
      });
  }

  getLanguage(languages: string, index: number) {
    return this.http
      .get(
        `https://elite.yt.sa/api/recipes/${this.recipeIndex}/languages/${index}`
      )
  }

  setSharedData(data: any) {
    this.sharedData = data;
  }
  getSharedData() {
    return this.sharedData;
  }
}
