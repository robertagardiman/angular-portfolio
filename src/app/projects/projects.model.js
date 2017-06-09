export default class ProjectsModel {
  constructor(data = {}) {
    console.log('sono il modello');
    this.title = data.title;
    this.subject = data.subject;
    this.subtitle = data.subtitle;
    this.conceptDescription = data.conceptDescription;
    this.description = data.description;
    this.description_1 = data.description_1;
    this.description_2 = data.description_2;
    this.description_3 = data.description_3;

  }
}
