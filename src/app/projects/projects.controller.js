export default class ProjectsController {
  constructor(ProjectsService, $state){
    console.log('sono il controller dei progettini');
    this.projectsService = ProjectsService;
    this.state = $state;
  }

  $onInit(){
    this.projectsService.getProjects().then((data) =>{
      this.projects = data;
  	});
  }

  getClickedProj(item){
    this.projectsService.setActiveProject(item); //funz che richiamo nel servizio per salvare l'elemento cliccato
    this.state.go('Detail', {id: item.id}) //metodo '.go'per reindirizzare alla rotta desiderata
  }
}
