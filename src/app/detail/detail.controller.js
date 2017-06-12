export default class DetailController{
  /* @ngInject */
  constructor(ProjectsService, $state){
    console.log('sono il controller del dettaglio');
    this.state = $state;
    this._projectsService = ProjectsService;
  }
  $onInit(){
    this.slug = this.state.params.slug;
    this.item = this._projectsService.activeProject;

    if(!this.item){
      this._projectsService.getProjects().then((projects) => {
        this.item = projects.find(p => p.slug == this.slug);
      })
    }
  }
}
