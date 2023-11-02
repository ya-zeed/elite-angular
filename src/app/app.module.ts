import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanScreenComponent } from './Views/scan-screen/scan-screen.component';
import { HomeScreenComponent } from './Views/home-screen/home-screen.component';
import {HttpClientModule} from "@angular/common/http";
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';
LOAD_WASM().subscribe();

export function playerFactory() {
  return player;
}

@NgModule({

  declarations: [
    AppComponent,
    ScanScreenComponent,
    HomeScreenComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
,
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,NgxScannerQrcodeModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
