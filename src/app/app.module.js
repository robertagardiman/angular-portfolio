import * as angular from 'angular'; //da scrivere ogni volta che uso la parola 'angular'
import * as uiRouter from '@uirouter/angularjs';
import routes from './app.routes';
import './app.scss';
import appComponent from './app.component';
import homeComponent from './home/home.component';
import aboutComponent from './about/about.component';
import projectsComponent from './projects/projects.component';
import projectsListComponent from './projects-list/projects-list.component';
import itemComponent from './project-item/item.component';
import detailComponent from './detail/detail.component';
import ProjectsService from './projects/projects.service';

/* @ngInject */
function Config($stateProvider, $urlRouterProvider, $compileProvider) {
  routes.forEach(function(route){
    $stateProvider.state(route.state, route.config);
    $urlRouterProvider.otherwise('/home');
  })
  $compileProvider.debugInfoEnabled(true);
}

export default angular
  .module('App', ['ui.router'])
  .component('app', appComponent)
  .component('home', homeComponent)
  .component('about', aboutComponent)
  .component('projects', projectsComponent)
  .component('projectsList', projectsListComponent)
  .component('item', itemComponent)
  .component('detail', detailComponent)
  .service('ProjectsService', ProjectsService)
  .config(Config)
  .name;
