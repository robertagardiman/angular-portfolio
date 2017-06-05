import * as angular from 'angular';
import * as uiRouter from '@uirouter/angularjs';
import routes from './portfolio.routes';

export default angular
  .module('Portfolio', ['ui.router'])
  .config(function($stateProvider){
    routes.forEach(function(route){
      $stateProvider.state(route.state, route.config);
    })
  })
  .name;
