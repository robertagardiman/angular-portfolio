export default class AppController {
  /* @ngInject */
  constructor($state){
    this.state = $state;
  }

  setActive(pageName){
    const urlPage = this.state.current.url;
    if(urlPage && urlPage.indexOf(pageName) > -1){
      return true;
    }else {
      return false;
    }
  }
}
