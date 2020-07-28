import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Adnan';
  items = [
    { description: 'Kahvaltı', action: 'No' },
    { description: 'Kahvaltı', action: 'No' },
    { description: 'Kahvaltı', action: 'No' },
    { description: 'Kahvaltı', action: 'No' }
  ];
}
