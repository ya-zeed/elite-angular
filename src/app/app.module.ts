import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanScreenComponent } from './Views/scan-screen/scan-screen.component';
import { HomeScreenComponent } from './Views/home-screen/home-screen.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    ScanScreenComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
