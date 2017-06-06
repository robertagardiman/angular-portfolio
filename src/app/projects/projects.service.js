export default class ProjectsService{
		constructor($http){
			this.http = $http;
		}

		getProjects() {
			return this.http.get('/src/app/projects/projects.data.json').then(function(response){
				return response.data;
			});
		}
}
