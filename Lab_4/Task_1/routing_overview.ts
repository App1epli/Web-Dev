// app.ts
import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
  <router-outlet />

  `,
  
  imports: [RouterOutlet],
})
export class App {}

// app.routes.ts
import {Routes} from '@angular/router';
export const routes: Routes = [
  
];

// app.config.ts
import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],

};
