import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular First Application';
  author = 'Andres Diaz';
  count = 0;
  imgSource = './../favicon.ico';
  enableButton = true;
}
