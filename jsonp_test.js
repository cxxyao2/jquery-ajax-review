$(document).ready(function () {
  $('#btnJsonp').click(function () {
    const API_ENDPOINT = 'http://localhost:5000/ajax?jsoncallback=?'
    $.getJSON(API_ENDPOINT, function (data) {
      $('#divJsonp').empty()
      $('#divJsonp').append('<div>' + JSON.stringify(data) + '</div>')
    })
  })
})
