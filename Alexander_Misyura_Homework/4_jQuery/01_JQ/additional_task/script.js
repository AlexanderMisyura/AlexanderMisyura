$(document).ready(function () {
  $('caption').css('textAlign', 'center')

  $('table').addClass("table table-striped table-hover table-bordered table-sm border border-dark").css({
    'width': '650px',
    'borderStyle': 'dashed'
  })

  $('tr:first-child').css({
    'background-color': '#777',
    'color': '#fff'
  })

  $('tr:not(tr:first-child').css('cursor', 'pointer')

  $('body').append('<button type="button" class="btn btn-outline-dark show_table" >do nothing</button>')

  counter = 0;
  click_show_table = false
  $('tr:not(tr:first-child').click(function() {
    $(this).hide()
    counter++
    
    if (counter == 5)
    {      
      $('.show_table').text('show table')
      $('.show_table').click(function() {
        $('table tr').show('slow')
      counter = 0
      click_show_table = true
      if (click_show_table == true) {$('.show_table').text('do nothing')}
      })
    } else {
      $('.show_table').text('do nothing')
      $('.show_table').off( "click" )
    }    
  })
})
