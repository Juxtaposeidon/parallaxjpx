// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
addOverlay = function(image){
  $("#overlay").width(image.css("width"));
  $("#overlay").height(image.css("height"));
  $("#overlay").css("top", image.offset().top + "px");
  $("#overlay").css("left", image.offset().left + "px");
  $("#overlay").html('<div class = "imagelabel">' + image.attr('id') + '</div>');
}

removeOverlay = function(){
  $("#overlay").width(0);
  $("#overlay").height(0);
  $("#overlay").html('');
}

$(document).ready(function(){
  $('.project').mouseenter(function(){
    addOverlay($(this));
  });

  $('#overlay').mouseleave(function(){
    removeOverlay();
  });

  $('#overlay').click(function(){
    $.ajax({
      data: {key: $(this).text()},
      url: '/projects/show'
    })
    .done(function(result){
      $('#projecttext').html(result['partial'])
    })
  })
})