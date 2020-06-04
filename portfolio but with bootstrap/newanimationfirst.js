
//header background display on scroll
$(document).scroll(function(){
  var height = $(".navbar").height();
  if( $(this).scrollTop() > height){
    $(".navbar").css("background","rgba(0, 0, 0, 0.3)!important");
}
});

// Wrap every letter in a span
