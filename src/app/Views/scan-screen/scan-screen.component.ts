import { Component, OnInit, ViewChild } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { RecipesApiService } from 'src/app/api/recipes-api.service';

@Component({
  selector: 'scan-screen',
  templateUrl: './scan-screen.component.html',
  styleUrls: ['./scan-screen.component.css'],
})
export class ScanScreenComponent implements OnInit {
 
  options: AnimationOptions = {
    path: '/assets/lottie_twoo.json',
  };
  constructor(
    private recipeService: RecipesApiService,
  ) {}
  torchEnabled = false;
  qrResultString : any ;
  toggleTorch(): void {
    this.torchEnabled = !this.torchEnabled;
  }
  scanSuccessHandler(e: any) {
    console.log(e);
    this.recipeService.getRecipe(e)
  }
  clearResult(): void {
    this.qrResultString = null;
  }
  ngOnInit() {}
 

  animationCreated(animationItem: AnimationItem): void {}
}
