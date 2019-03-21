'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.about-me').hide()
  $('.art').hide()
  $('.work').hide()
  $('.skills').hide()
  $('.resume').hide()

  $('.about-me-link').click(() => {
    $('.about-me').fadeToggle('fast')
  })

  $('.art-link').click(() => {
    $('.art').fadeToggle('fast')
  })

  $('.work-link').click(() => {
    $('.work').fadeToggle('fast')
  })

  $('.skills-link').click(() => {
    $('.skills').fadeToggle('fast')
  })

  $('.resume-link').click(() => {
    $('.resume').fadeToggle('fast')
  })
})
