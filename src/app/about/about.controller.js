export default class AboutController{
  constructor(){
    this.skills = [
      {
        name: 'html',
        level: '90',
        icon: './../../../assets/loghi-skills/html-logo.svg'
      },
      {
        name: 'css',
        level: '90',
        icon: './../../../assets/loghi-skills/css-logo.png'
      },
      {
        name: 'sass',
        level: '50',
        icon: './../../../assets/loghi-skills/sass-logo.png'
      },
      {
        name: 'angularJs',
        level: '50',
        icon: './../../../assets/loghi-skills/angular-logo.png'
      },
      {
        name: 'js',
        level: '50',
        icon: './../../../assets/loghi-skills/js-logo.png'
      },
      {
        name: 'sketchApp',
        level: '50',
        icon: './../../../assets/loghi-skills/sketch-logo.jpg'
      },
      {
        name: 'Ps',
        level: '50',
        icon: './../../../assets/loghi-skills/photoshop-logo.png'
      },
      {
        name: 'Ai',
        level: '50',
        icon: './../../../assets/loghi-skills/illustrator-logo.png'
      },
      {
        name: 'Ae',
        level: '50',
        icon: './../../../assets/loghi-skills/after-logo.png'
      },
    ]

  }

  $onInit(){

    setTimeout(function(){
      document.querySelector('article.about-container').classList.add('go-up');
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
        console.log(dashoffset);
        return dashoffset;

          // progressValue.forEach(p=> {
          //   p.style.strokeDashoffset = dashoffset;
          // } )

      }

      progressValue.forEach((p, index)=>{
        p.style.strokeDasharray = CIRCUMFERENCE;
        p.style.strokeDashoffset = progress(skills[index].level);
        //progress(40);
        console.log(skills[index].level);
      })

        progressValue[0].style.strokeDasharray = CIRCUMFERENCE;
        progressValue[0].style.strokeDashoffset = progress(90);
        // //progress(40);
        // console.log(skills[index].level);
      // })


    }
}
