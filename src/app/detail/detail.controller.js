export default class DetailController{
  /* @ngInject */
  constructor(ProjectsService, $state){
    this.state = $state;
    this._projectsService = ProjectsService;
  }
  $onInit(){
    this.slug = this.state.params.slug;
    this.item = this._projectsService.activeProject; //current project

    this._projectsService.getProjects().then((projects) => {
      this.item = projects.find(p => p.slug == this.slug);
      this.nextProjectTitle = this.getNextProj(this.item, projects);
      this.prevProjectTitle = this.getPrevProj(this.item, projects);
    })
  }

  getNextProj(item, projects){
    const currentProjectIndex = projects.findIndex(p => p.id == this.item.id);
    let nextProject = projects[currentProjectIndex + 1];
    if(!nextProject){
      nextProject = projects[0];
    }
    return nextProject.title;
  }

  next(item){
    this._projectsService.getProjects().then((projects) => {
      const currentProjectIndex = projects.findIndex(p => p.id == this.item.id);
      let nextProject = projects[currentProjectIndex + 1];
      if(!nextProject){
        nextProject = projects[0];
      }
      this.state.go('Detail', {slug: nextProject.slug})
    })
  }

  getPrevProj(item, projects) {
    const currentProjectIndex = projects.findIndex(p => p.id == this.item.id);
    let prevProject = projects[currentProjectIndex - 1];
    if(!prevProject){
      prevProject = projects[projects.length - 1];
    }
    return prevProject.title;
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
