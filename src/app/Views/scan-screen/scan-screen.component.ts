import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'scan-screen',
  templateUrl: './scan-screen.component.html',
  styleUrls: ['./scan-screen.component.css']
})
export class ScanScreenComponent implements OnInit{
  options: AnimationOptions = {
    path: '/assets/lottie_twoo.json',
  };
   
  ngOnInit() {

  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
