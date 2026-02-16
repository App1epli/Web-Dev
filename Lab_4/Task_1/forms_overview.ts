import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
    <label for="framework">Favorite Framework:</label>
    <input id="framework" type="text" [(ngModel)]="favoriteFramework" />

  `,
  imports: [FormsModule],
})
export class User {
  username = 'youngTech';
  favoriteFramework = '';
}
