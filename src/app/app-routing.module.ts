import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScanScreenComponent } from './Views/scan-screen/scan-screen.component';
import { HomeScreenComponent } from './Views/home-screen/home-screen.component';
const routes: Routes = [
  {path:'',component:HomeScreenComponent},
  {path:'scan' , component:ScanScreenComponent}
];


@NgModule({
  imports: [
  [RouterModule.forRoot(routes)]],
  exports: [RouterModule]
})

export class AppRoutingModule { }
