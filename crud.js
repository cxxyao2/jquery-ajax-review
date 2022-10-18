$(document).ready(function () {
  const API_ENDPOINT = 'http://localhost:5000/books'

  const API_ENDPOINT_ERROR = 'http://localhost:5000/error'
  $('#btnGet').click(function () {
    $('#errorFromServer').empty()
    $('#dataList').empty()
    let ajaxHandle = $.getJSON(API_ENDPOINT, function (data) {
      let items = []
      let results = data.data

      results.map((item, index) => {
        items.push(
          "<div id='" + index + "'>" + (index + 1) + item.name + '</div>'
        )
      })
      $('#dataList').append(items)
    })
      .done(function (data2) {
        console.log('done is, data2', data2)
      })
      .fail(function (error) {
        console.log('error is', error)
      })
      .always(function () {
        console.log('complete')
      })
    ajaxHandle.always(function () {
      console.log('second complete')
    })
  })

  $('#btnGetError').click(function () {
    let ajaxHandle = $.getJSON(API_ENDPOINT_ERROR, function (data) {
      console.log('data is', data)
    })
      .done(function (data2) {
        console.log('done is, data2', data2)
      })
      .fail(function (error) {
        let message = 'Error From Server'
        const props = Object.getOwnPropertyNames(error)
        for (let pp of props) {
          console.log('pr is', pp, ' value ', error[pp])
        }
        if (error.hasOwnProperty('responseText')) {
          message = JSON.stringify(error['responseText'])
        }

        $('#errorFromServer').html(message)
      })
      .always(function () {
        console.log('complete')
      })
  })

  $('#btnAdd').click(function () {
    let ajaxHandle = $.post(API_ENDPOINT, {
      id: 4,
      name: 'Harry Potter and the Goblet of Fire'
    })
      .done(function (data) {
        let items = []
        let results = data.data
        results.map((item, index) => {
          items.push(
            "<div id='" +
              index +
              "'>" +
              (index + 1) +
              ' ' +
              item.name +
              '</div>'
          )
        })
        $('#dataList').empty()
        $('#dataList').append(items)
      })
      .fail(function (error) {
        console.log('error is', error)
      })
      .always(function () {
        console.log('complete')
      })
  })
})
