import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { RecipesApiService } from 'src/app/api/recipes-api.service';
import { recipesDetails } from 'src/app/interface/recipesDetails.interface';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'scan-screen',
  templateUrl: './scan-screen.component.html',
  styleUrls: ['./scan-screen.component.css']
})
export class ScanScreenComponent implements OnInit{
  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];

  options: AnimationOptions = {
    path: '/assets/lottie_twoo.json',
    
  };

 
  src!: string;

  arr:recipesDetails [] =[];
  constructor (private recipeService: RecipesApiService) {}
  ngOnInit() { this.recipeService.getRecipe(120).subscribe((res:any) => {
      this.arr = res.data;
      console.log(this.arr);
    });
  }
  getLang(language:string,index:number){
   this.recipeService.getLanguage(language,index)
  }
  


  animationCreated(animationItem: AnimationItem):void {
  }
}
