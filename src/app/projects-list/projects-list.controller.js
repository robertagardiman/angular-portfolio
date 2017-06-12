export default class ProjectsListController {
  /* @ngInject */
  constructor(ProjectsService, $state) {
    this._projectsService = ProjectsService;
    this.state = $state;
  }

  $onInit(){
    this._projectsService.getProjects().then((data) => {
      this.projects = data;
    });
  }

  getClickedProj(item){
    this._projectsService.setActiveProject(item); //funz che richiamo nel servizio per salvare l'elemento cliccato
    this.state.go('Detail', {slug: item.slug}) //metodo '.go'per reindirizzare alla rotta desiderata
  }
}
