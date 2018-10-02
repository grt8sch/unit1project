$(function(){
  var display = function(){
    $("nav").removeAnimateCSS("fadeOutLeft fadeInLeft");
    $("nav").show();
    $("nav").useAnimateCSS("fadeInLeft");
  };
  var hide = function(){
    $("nav").removeAnimateCSS("fadeOutLeft fadeInLeft");
    $("nav").useAnimateCSS("fadeOutLeft");
    setTimeout(function(){
      $("nav").hide();
    }, 800);
  };
  $("#headerfiller").height($("header").height());
  $("nav").css("top",$("header").height());
  $(".section").animateOnScroll({offset:150});
  $("nav a").each(function(){
    $(this).click(function(){
      $('html,body').animate({scrollTop: $($(this).data("target")).offset().top-$("header").height()},500);
    });
  });
  $("#nav-button").click(function(){
    $("nav").css("display")=="block"?hide():display();
  });
  $("body").click(function(e){
    if($(e.target).closest("nav, #nav-button").length)return;
    hide();
  });
});
