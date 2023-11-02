import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yaz-ui';

  constructor (private router : Router) {}
  options: AnimationOptions = {
    path: '/assets/lottie_one.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  GoToScan () {
    console.log('object');
    this.router.navigate(['scan']);
  }


}
