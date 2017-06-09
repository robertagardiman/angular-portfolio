/* @ngInject */
export default class ProjectsService{
		constructor($http, ProjectsModel){
			this.http = $http;
			this.ProjectsModel = ProjectsModel;
			console.log(this.ProjectsModel);
		}

		getProjects() {
			return this.http.get('/src/app/projects/projects.data.json').then(function(response){
				return response.data;
			});
		}
}
