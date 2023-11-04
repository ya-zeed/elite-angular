import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScanScreenComponent } from './Views/scan-screen/scan-screen.component';
import { HomeScreenComponent } from './Views/home-screen/home-screen.component';
import { RecipeDetailsComponent } from './Views/recipe-details/recipe-details.component';
import { IngredientsComponent } from './Views/ingredients/ingredients.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path:'',component:HomeScreenComponent},
  {path:'scan' , component:ScanScreenComponent},
  {path:'recipe',component:RecipeDetailsComponent},
  {path:'ingredients',component:IngredientsComponent},
  { path: '**', redirectTo:'' },
];


@NgModule({
  imports: [
  [RouterModule.forRoot(routes)]],
  exports: [RouterModule]
})

export class AppRoutingModule { }
