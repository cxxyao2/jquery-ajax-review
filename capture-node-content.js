$(document).ready(function () {
  $('#btn1').click(function () {
    alert('html ' + $('#article').html())
  })
  $('#btnRemove').click(function () {
    $('#div1').empty()
  })
  $('#toggle').click(function () {
    $('#imp1, #div1,[data-id]').toggleClass('important')
    let parentTagnames = $('span')
      .parents('div')
      .map(function () {
        return this.id
      })
      .get()

    $('#parents').append('<strong>' + parentTagnames + '<strong>')
  })
  $('#btnLoad').click(function () {
    $('#result').load('domo_test.txt', function () {
      alert('loaded')
    })
  })
})
