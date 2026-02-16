import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` Hello {{ city }}, {{ 1 + 10 }}`,
})
export class App {
  city = 'Almaty';
}
