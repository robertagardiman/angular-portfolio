import * as angular from 'angular'; //ogni volta che uso la parola 'angular'
import * as uiRouter from '@uirouter/angularjs';
import './app.scss';
import appComponent from './app.component';
import PortfolioModule from './portfolio/portfolio.module';

export default angular
  .module('App', ['ui.router',PortfolioModule])
  .component('app', appComponent)
  .name;
