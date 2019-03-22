'use strict'

const disp = require('./events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  disp.hideAll()
  $('.skills-link').on('click', disp.showSection)
  $('.about-me-link').on('click', disp.showSection)
  $('.work-link').on('click', disp.showSection)
  $('.art-link').on('click', disp.showSection)
  $('.resume-link').on('click', disp.showSection)
  // $('header').click(() => {
  //   $('.about-me').hide()
  //   $('.art').hide()
  //   $('.work').hide()
  //   $('.skills').hide()
  //   $('.resume').hide()
  //   $('body').removeClass('black-bg')
  // })
  //
  // $('.about-me-link').click(() => {
  //   $('.about-me').fadeToggle('medium')
  //   $('.art').hide()
  //   $('.work').hide()
  //   $('.skills').hide()
  //   $('.resume').hide()
  //   $('body').addClass('black-bg')
  // })
  //
  // $('.art-link').click(() => {
  //   $('.art').fadeToggle('medium')
  //   $('.about-me').hide()
  //   $('.work').hide()
  //   $('.skills').hide()
  //   $('.resume').hide()
  //   $('body').addClass('black-bg')
  // })

  // $('.work-link').click(() => {
  //   $('.work').fadeToggle('medium')
  //   $('.about-me').hide()
  //   $('.art').hide()
  //   $('.skills').hide()
  //   $('.resume').hide()
  //   $('body').addClass('black-bg')
  // })
  //
  // $('.skills-link').click(() => {
  //   $('.skills').fadeToggle('medium')
  //   $('.about-me').hide()
  //   $('.art').hide()
  //   $('.work').hide()
  //   $('.resume').hide()
  //   $('body').addClass('black-bg')
  // })
  //
  // $('.resume-link').click(() => {
  //   $('.resume').fadeToggle('medium')
  //   $('.about-me').hide()
  //   $('.art').hide()
  //   $('.work').hide()
  //   $('.skills').hide()
  //   $('body').addClass('black-bg')
  // })
})
