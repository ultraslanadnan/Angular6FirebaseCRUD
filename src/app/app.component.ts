import { Component } from '@angular/core';
import { Model, TodoItem } from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 model = new Model();
 isDisplay = false;
 // tslint:disable-next-line: typedef
 getName() {
  return this.model.user;
}

// tslint:disable-next-line: typedef
getItems() {
  if (this.isDisplay) {
    return this.model.items;

  }
  return this.model.items.filter(item => !item.action);
}

// tslint:disable-next-line: typedef
addItem(value) {
 // tslint:disable-next-line: no-conditional-assignment
 if (value !== '') {
  this.model.items.push(new TodoItem(value, false));
 }
}

}
