import * as angular from 'angular'; //da scrivere ogni volta che uso la parola 'angular'
import * as uiRouter from '@uirouter/angularjs';
import routes from './app.routes';
import './app.scss';
import appComponent from './app.component';
import homeComponent from './home/home.component';
import aboutComponent from './about/about.component';
import projectsComponent from './projects/projects.component';

export default angular
  .module('App', ['ui.router'])
  .component('app', appComponent)
  .component('home', homeComponent)
  .component('about', aboutComponent)
  .component('projects', projectsComponent)
  .config(function($stateProvider, $urlRouterProvider){
    routes.forEach(function(route){
      $stateProvider.state(route.state, route.config);
      $urlRouterProvider.otherwise('/home');
    })
  })
  .name;
