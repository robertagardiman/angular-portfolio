/* @ngInject */
export default class {
  constructor(ProjectsService, $state){
    console.log('sono il controller del dettaglio');
    this.state = $state;
    this.projectsService = ProjectsService;
  }
  $onInit(){
    this.id = this.state.params.id;
    this.item = this.projectsService.activeProject;
  }
}
