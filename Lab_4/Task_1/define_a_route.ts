import {Routes} from '@angular/router';
import {Home} from './home/home';
import {User} from './user/user';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'App Home Page'
  },
  {
    path: 'user',
    title: "App User Page",
    component: User,
  },
];
