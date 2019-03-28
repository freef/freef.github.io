'use strict'

const disp = {
  hideAll: () => {
    $('section').hide()
    $('body').removeClass('black-bg')
  },
  fadeAll: () => {
    $('.resume').hide()
    $('section').fadeOut('medium')
    $('body').removeClass('black-bg')
  },
  showSection: (event) => {
    disp.fadeAll()
    if ($(event.target).hasClass('on')) {
      $('a').removeClass('on')
    } else {
      const turnOn = $(event.target).attr('href')
      $(turnOn).fadeIn('medium')
      $('a').removeClass('on')
      $(event.target).addClass('on')
      $('body').addClass('black-bg')
    }
  },
  hideBackSplash: () => {
    $('.top-content').removeClass('art-backsplash')
    $('.top-content').removeClass('work-backsplash')
    $('.top-content').removeClass('skills-backsplash')
    $('.top-content').removeClass('about-me-backsplash')
    $('.top-content').removeClass('resume-backsplash')
  },
  resetPage: () => {
    disp.fadeAll()
    $('a').removeClass('on')
    disp.hideBackSplash()
    $('.top-content').removeClass('whiteText').fadeIn('slow')
    $('.top-content a').removeClass('whiteText').fadeIn('slow')
    $('.top-content').removeClass('clearBG').fadeIn('slow')
  },
  linkMouseIn: (event) => {
    const inData = event.target.getAttribute('data-id')
    disp.hideBackSplash()
    $('.top-content').addClass(`${inData}-backsplash`)
    $('.top-content').addClass('whiteText').fadeIn('slow')
    $('.top-content a').addClass('whiteText').fadeIn('slow')
    $('.top-content').addClass('clearBG')
  },
  flavorTextChange: () => {
    setTimeout(() => {
      const textOptions = ['Cat Person.', 'Pokemon Master.', 'Dungeon Master.', 'Coffee Drinker.', 'Cookie Devourer.', 'Rock Climber.', 'Bike Commuter.', 'Backpacker.']
      const randNum = Math.floor(Math.random() * Math.floor((textOptions.length - 1)))
      const nextText = textOptions[randNum]
      $('.flavor-text').fadeOut('fast', () => { $('.flavor-text').text(nextText).fadeIn('slow') })
      console.log(nextText)
      disp.flavorTextChange()
    }, 5000)
  }
  // linkMouseLeave: (data) => {
  //   const outData = event.target.getAttribute('data-id')
  // //   $('.top-content').removeClass(`${outData}-backsplash`).fadeIn('slow')
  //   $('.top-content').removeClass('whiteText').fadeIn('slow')
  //   $('.top-content a').removeClass('whiteText').fadeIn('slow')
  //   $('.top-content').removeClass('clearBG').fadeIn('slow')
  // // }
}

module.exports = disp
