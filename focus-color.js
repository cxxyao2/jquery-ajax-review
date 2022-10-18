$(document).ready(function () {
  $('input')
    .focus(function () {
      $(this).css('background-color', '#ff0000')
    })
    .focusout(function () {
      $(this).css('background-color', '#0000ff')
    })
})
