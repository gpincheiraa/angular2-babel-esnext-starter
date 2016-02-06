'use strict';
import {ListComponent} from './components/post/list';
import {NewComponent} from './components/post/new';
import {AboutComponent} from './components/about';
import {LoginComponent} from './components/login';

export const router = {
  config: [
    { path: '/', component: ListComponent, name: 'List', useAsDefault: true },
    { path: '/new', component: NewComponent, name: 'New' },
    { path: '/about', component: AboutComponent, name: 'About' },
    { path: '/login', component: LoginComponent, name: 'Login' }
  ]
};
