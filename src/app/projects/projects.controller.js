export default class ProjectsController {
  constructor(ProjectsService){
    console.log('sono il controller dei progettini');
    this.projectsService = ProjectsService;
  }

  $onInit(){
    this.projectsService.getProjects().then((data) =>{
      this.projects = data;
  	});
  }

}
