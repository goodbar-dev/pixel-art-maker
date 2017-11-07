/*
The primary javascript file for the Pixel Art Maker.
*/

//Upon clicking a box in the grid, the color will toggle between
//transparent and the selected color.
function toggleBackground() {
  const color = $(this).css('background-color');

  //Some browsers return different values for background-color, so checking both.
  if (color == 'transparent' || color == 'rgba(0, 0, 0, 0)') {
    $(this).css('background-color', $('#btnColor').val());
  }
  else {
    $(this).css('background-color', 'transparent');
  }
}

//Dyncamilly creates a grid based on the heigh and width values entered
//by the user.
function makeGrid(event) {
  //prevents the page from reloading upon button click.
  event.preventDefault();

  const height = $('#grid-height').val();
  const width = $('#grid-width').val();
  const boxWidth = width * 17;  //box width + left/right border

  //initializes the grid, clears it out and sets the max/min width
  //so that grid boxes wrap appropriately and scroll bars appear
  //appropriately.
  $('.grid').css('max-width', boxWidth);
  $('.grid').css('min-width', boxWidth);
  $('.grid').empty();

  for (let h = 1; h <= height; h++) {
    for (let w = 1; w <= width; w++) {
      $('.grid').append('<div class=\"box\"></div>');
    }
  }

  //Adds toggle background event on click after dynamically adding the
  //boxes to the DOM.
  $('.box').on('click', toggleBackground);
}

$(document).ready(function() {
  $('#sizePicker').submit(makeGrid);
});
