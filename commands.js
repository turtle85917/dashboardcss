$('.categories li').on('click', setCategory)

function setCategory() {
  $('.categories li').removeClass('active');
  const selected = $(this)
  selected.addClass('active');
  
  $('.commands li').hide();
  $(".dropdown-toggle").hide()
  const categoryCommands = $(`.commands .${selected[0].id}`);
  const dropdownCommands = $(`.dropdown #${selected[0].id}`);
  categoryCommands.show();
  dropdownCommands.show();
  updateResultsText(categoryCommands)
}

$('#search+button').on('click', () => {
  alert("test")
})

function updateResultsText(arr) {  
  $('#commandError').text((arr.length <= 0) ? 'There is nothing to see here.' : '');
}

setCategory.bind($('.categories li')[0])();
