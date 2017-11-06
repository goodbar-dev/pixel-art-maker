function toggleBackground() {
  const color = $(this).css('background-color');

  if (color == 'transparent' || color == 'rgb(0, 0, 0)') {
    $(this).css('background-color', $('#btnColor').val());
  }
  else {
    $(this).css('background-color', 'transparent');
  }
}

function makeGrid() {
  event.preventDefault();

  const height = $('#grid-height').val();
  const width = $('#grid-width').val();
  const boxWidth = width * 17;  //box width + left/right border
  let h;
  let w;

  $('.grid').css('max-width', boxWidth);
  $('.grid').css('min-width', boxWidth);
  $('.grid').empty();

  for (h = 1; h <= height; h++) {
    for (w = 1; w <= width; w++) {
      $('.grid').append('<div class=\"box\"></div>');
    }
  }

  $('.box').on('click', toggleBackground);
}

$(document).ready(function() {
  $('#btnSubmit').on('click', makeGrid);
});
