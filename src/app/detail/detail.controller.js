export default class DetailController{
  /* @ngInject */
  constructor(ProjectsService, $state){
    console.log('sono il controller del dettaglio');
    this.state = $state;
    this._projectsService = ProjectsService;
  }
  $onInit(){
    this.slug = this.state.params.slug;
    this.item = this._projectsService.activeProject; //current project

    if(!this.item){
      this._projectsService.getProjects().then((projects) => {
        this.item = projects.find(p => p.slug == this.slug);
      })
    }
  }

  next(item){
    this._projectsService.getProjects().then((projects) => {
      const currentProjectIndex = projects.findIndex(p => p.id == this.item.id);
      console.log(currentProjectIndex);
      let nextProject = projects[currentProjectIndex + 1];
      if(!nextProject){
        nextProject = projects[0];
      }
      this.state.go('Detail', {slug: nextProject.slug})
    })
  }

  prev(item){
    this._projectsService.getProjects().then((projects) => {
      const currentProjectIndex = projects.findIndex(p => p.id == this.item.id);
      let prevProject = projects[currentProjectIndex - 1];
      if(!prevProject){
        prevProject = projects[projects.length - 1];
      }
      this.state.go('Detail', {slug: prevProject.slug})
    })
  }
}
