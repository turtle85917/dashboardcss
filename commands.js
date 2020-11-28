$('.categories li').on('click', setCategory)

function setCategory() {
  $('.categories li').removeClass('active');
  const selected = $(this)
  selected.addClass('active');
  
  $('.commands li').hide();
  const categoryCommands = $(`.commands .${selected[0].id}`)
  categoryCommands.show();
  updateResultsText(categoryCommands)
}

function updateResultsText(arr) {  
  $('#commandError').text((arr.length <= 0) ? 'There is nothing to see here.' : '');
}

setCategory.bind($('.categories li')[0])();
