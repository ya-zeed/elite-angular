import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesApiService } from 'src/app/api/recipes-api.service';


@Component({
  selector: 'recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  recivedData: any;
  recipeDerails: any

  constructor(
    private recipeService: RecipesApiService,
    private route : Router
  ) {}

  ngOnInit(): void {
    this.recivedData = this.recipeService.getSharedData();
  }

  getLang(language: string, index: number) {
    this.recipeService.getLanguage(language, index).subscribe((res: any) => {
      this.recipeDerails = res.data;
      console.log(this.recipeDerails);
    }); 
  }
}
