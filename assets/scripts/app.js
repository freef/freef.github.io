'use strict'
const lozad = require('lozad')
const disp = require('./events.js')
const observer = lozad() // lazy loads elements with default selector as '.lozad'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  observer.observe()
  disp.hideBackSplash()
  disp.hideAll()
  disp.flavorTextChange()
  $('.skills-link').on('click', disp.showSection)
  $('.about-me-link').on('click', disp.showSection)
  $('.work-link').on('click', disp.showSection)
  $('.art-link').on('click', disp.showSection)
  $('.resume-link').on('click', disp.showSection)
  $('header').on('click', disp.resetPage)
  $('.nav-link').on('mouseenter', (event) => disp.linkMouseIn(event))

  // $('.nav-link').on('mouseleave', (event) => disp.linkMouseLeave(event))
})
