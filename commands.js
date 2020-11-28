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
  const query = $("#search input").val();
  const commands = new Fuse(commands, {
    isCaseSensitive: false,
    keys: [
      { name: 'name', weight: 1 },
      { name: 'category', weight: 0.5 }
    ]
  })
  .search(query)
  .map(r => r.item);
  
  $('.categories li').removeClass('active');
  $('.commands li').hide();
  $(".dropdown-toggle").hide()
  
  for (const command of commands) {
    $(`${command.name}Command`).show();
    $(`${command.name}`).show();
  }
  
  updateResultsText(commands);
})

function updateResultsText(arr) {  
  $('#commandError').text((arr.length <= 0) ? 'There is nothing to see here.' : '');
}

setCategory.bind($('.categories li')[0])();
