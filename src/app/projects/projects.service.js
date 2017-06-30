export default class ProjectsService {
		/* @ngInject */
		constructor($http){
			this.http = $http;
		}

		getProjects() {
			return this.http.get('/src/app/projects/projects.data.json').then(res => res.data);
		}

		setActiveProject(item) {
			this.activeProject = item; //salvo in un item l'elemento cliccato che proviene dal controller della lista
		}
}
