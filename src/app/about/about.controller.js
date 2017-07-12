export default class AboutController{
  constructor(){
    this.skills = [
      {
        name: 'Html',
        level: '90',
        icon: './../../../assets/loghi-skills/html-logo.svg'
      },
      {
        name: 'Css',
        level: '90',
        icon: './../../../assets/loghi-skills/css-logo.png'
      },
      {
        name: 'Sass',
        level: '90',
        icon: './../../../assets/loghi-skills/sass-logo.png'
      },
      {
        name: 'AngularJs',
        level: '50',
        icon: './../../../assets/loghi-skills/angular-logo.png'
      },
      {
        name: 'Javascript',
        level: '60',
        icon: './../../../assets/loghi-skills/js-logo.png'
      },
      {
        name: 'SketchApp',
        level: '100',
        icon: './../../../assets/loghi-skills/sketch-logo.jpg'
      },
      {
        name: 'Photoshop',
        level: '80',
        icon: './../../../assets/loghi-skills/photoshop-logo.png'
      },
      {
        name: 'Illustrator',
        level: '80',
        icon: './../../../assets/loghi-skills/illustrator-logo.png'
      },
      {
        name: 'A. Effects',
        level: '70',
        icon: './../../../assets/loghi-skills/after-logo.png'
      },
    ]

  }

  $onInit(){
    setTimeout(function(){
      document.querySelector('#about__container').classList.add('go-up');
    }, 1000);

    setTimeout(this.setSkillsLevel.bind(this, this.skills), 0)
  }

  setSkillsLevel(skills){
      const progressValue = document.querySelectorAll('.progress__value');

      const RADIUS = 54;
      const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

      function progress(value) {
        const progress = value / 100;
        const dashoffset = CIRCUMFERENCE * (1 - progress);

        // console.log('progress:', value + '%', '|', 'offset:', dashoffset)
        return dashoffset;

          // progressValue.forEach(p=> {
          //   p.style.strokeDashoffset = dashoffset;
          // } )

      }

      progressValue.forEach((p, index)=>{
        p.style.strokeDasharray = CIRCUMFERENCE;
        p.style.strokeDashoffset = progress(skills[index].level);
        //progress(40);
      })

        progressValue[0].style.strokeDasharray = CIRCUMFERENCE;
        progressValue[0].style.strokeDashoffset = progress(90);
        // //progress(40);
        // console.log(skills[index].level);
      // })


    }
}
