var nav = $(".topspace");
var navheight = $("header").height();

$(window).scroll(function(){
  if($(this).scrollTop()>30){
    nav.addClass("Sticky");
  } else {
    nav.removeClass("Sticky");
  }
});
