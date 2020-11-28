$('.categories li').on('click', setCategory)

function setCategory() {
  $('.categories li').removeClass('active');
  const selected = $(this)
  selected.addClass('active');
  
  $('.commands li').hide();
  const categoryCommands = $(`.commands .${selected[0].id}`);
  const dropdownCommands = $(`.dropdown-toggle .${selected[0].id}`);
  categoryCommands.show();
  console.log(dropdownCommands, selected)
  updateResultsText(categoryCommands)
}

function updateResultsText(arr) {  
  $('#commandError').text((arr.length <= 0) ? 'There is nothing to see here.' : '');
}

setCategory.bind($('.categories li')[0])();
