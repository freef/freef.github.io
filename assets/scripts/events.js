'use strict'

const disp = {
  hideAll: () => {
    $('section').hide()
    $('body').removeClass('black-bg')
  },
  fadeAll: () => {
    $('section').fadeOut('medium')
    $('body').removeClass('black-bg')
  },
  showSection: (event) => {
    console.log('beep')
    disp.fadeAll()
    console.log(event.target)
    if ($(event.target).hasClass('on')) {
      $('a').removeClass('on')
    } else {
      const turnOn = $(event.target).attr('href')
      $(turnOn).fadeIn('medium')
      $('a').removeClass('on')
      $(event.target).addClass('on')
      $('body').addClass('black-bg')
    }
  }
  // showArt: (event) => {
  //   hideAll()
  // },
  // showSkills: (event) => {
  //   hideAll()
  // },
  // showAboutMe: (event) => {
  //   hideAll()
  // },
  // showResume: (event) => {
  //   hideAll()
  // }
}

module.exports = disp
