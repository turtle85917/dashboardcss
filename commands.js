$('.categories li').on('click', setCategory)

function setCategory() {
  blank();
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

function blank() {
  $('.categories li').removeClass('active');
  $('.commands li').hide();
  $(".dropdown-toggle").hide();
}

$('#search+button').on('click', () => {
  const query = $("#search input").val();
  if (!query) return $('.commands li').show();
  const results = new Fuse(commands, {
    isCaseSensitive: false,
    keys: [
      { name: 'name', weight: 1 },
      { name: 'aliases', weight: 1 },
      { name: 'category', weight: 0.5 }
    ]
  })
  .search(query)
  .map(r => r.item);
  
  blank();
  
  for (const command of results) {
    $(`#${command.name}Command`).show();
    $(`.${command.name}`).show();
  }
  
  updateResultsText(results);
})

function updateResultsText(arr) {  
  $('#commandError').text((arr.length <= 0) ? 'There is nothing to see here.' : '');
}

setCategory.bind($('.categories li')[0])();
