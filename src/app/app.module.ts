import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanScreenComponent } from './Views/scan-screen/scan-screen.component';
import { HomeScreenComponent } from './Views/home-screen/home-screen.component';
import {HttpClientModule} from "@angular/common/http";
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { RecipeDetailsComponent } from './Views/recipe-details/recipe-details.component';
import { IngredientsComponent } from './Views/ingredients/ingredients.component';
import { ServiceWorkerModule } from '@angular/service-worker';


export function playerFactory() {
  return player;
}

@NgModule({

  declarations: [
    AppComponent,
    ScanScreenComponent,
    HomeScreenComponent,
    RecipeDetailsComponent,
    IngredientsComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
,
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ZXingScannerModule,
    LottieModule.forRoot({ player: playerFactory }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
