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
  resetPage: () => {
    disp.fadeAll()
    $('a').removeClass('on')
  },
  linkMouseIn: (event) => {
    const inData = event.target.getAttribute('data-id')
    $('.top-content').addClass(`${inData}-backsplash`).fadeIn('slow')
    $('.top-content').addClass('whiteText').fadeIn('slow')
    $('.top-content a').addClass('whiteText').fadeIn('slow')
    $('.top-content').addClass('clearBG')
  },
  linkMouseLeave: (data) => {
    const outData = event.target.getAttribute('data-id')
    $('.top-content').removeClass(`${outData}-backsplash`).fadeIn('slow')
    $('.top-content').removeClass('whiteText').fadeIn('slow')
    $('.top-content a').removeClass('whiteText').fadeIn('slow')
    $('.top-content').removeClass('clearBG').fadeIn('slow')
  }
}

module.exports = disp
