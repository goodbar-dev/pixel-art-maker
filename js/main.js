function makeGrid() {
  event.preventDefault();

  const height = $('#grid-height').val();
  const width = $('#grid-width').val();
  let h;
  let w;
  let content = "";

  $('.grid').attr('width', width * 15);

  for (h = 1; h <= height; h++) {
    for (w = 1; w <= width; w++) {
        content = content + "<div class=\"box " + h + "-" + w + "\"></div>";
    }
    $('.grid').append(content);
    content = "";
  }
};

$(document).ready(function() {
  $('#btnSubmit').on('click', makeGrid);
});
