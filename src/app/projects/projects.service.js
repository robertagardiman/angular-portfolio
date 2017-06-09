/* @ngInject */
export default class ProjectsService{
		constructor($http, ProjectsModel){
			this.http = $http;
			//this.ProjectsModel = ProjectsModel;
		}

		getProjects() {
			return this.http.get('/src/app/projects/projects.data.json').then(function(response){
				return response.data;
			});
		}


		setActiveProject(item) {
			this.activeProject = item;
		}

}
