export default [
  {
    state: 'Home',
    config: {
      url: '/home',
      template: '<home></home>'
    }
  },
  {
    state: 'Projects',
    config: {
      url: '/projects',
      template: '<projects></projects>'
    }
  },
  {
    state: 'About',
    config: {
      url: '/about',
      template: '<about></about>'
    }
  },
  {
    state: 'Detail',
    config: {
      url: '/detail/:id',
      template: '<detail></detail>'
    }
  },
]
