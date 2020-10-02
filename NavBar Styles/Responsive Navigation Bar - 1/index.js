var navLists = ['home-link', 'about-link', 'contact-link','4-link', '5-link'];
var currentNav = 0;
var mid_span = document.getElementById("mid-span");

$('.link-div').click(function(elem) {
  var clickId = $(this).attr('id');
  
  $("#"+navLists[currentNav]+" > span").removeClass("activate");
  
  currentNav = navLists.indexOf(clickId);
  
  $("#"+navLists[currentNav]+" > span").addClass("activate");
});

$("#nav-icon").click(function(){
  
  if(!$('#first-span').hasClass("sp-1-click-in")){
    
    $("#first-span").removeClass("sp-1-click-out");
    $("#mid-span").removeClass("sp-2-click-out");
    $("#third-span").removeClass("sp-3-click-out");
    
    $("#first-span").width();
    $("#mid-span").width();
    $("#third-span").width();
    
    $("#first-span").addClass("sp-1-click-in");
    $("#mid-span").addClass("sp-2-click-in");
    $("#third-span").addClass("sp-3-click-in");
    
    $('#link-container-div').removeClass('screen-small');
    $('#nav-bar').addClass('small-screen-nav');
    
    mid_span.addEventListener("animationend", endFunction);
  } else {
    $("#first-span").removeClass("sp-1-click-in");
    $("#mid-span").removeClass("sp-2-click-in");
    $("#mid-span").removeClass("invisible");
    $("#third-span").removeClass("sp-3-click-in");
    
    $("#first-span").width();
    $("#mid-span").width();
    $("#third-span").width();
    
    $("#first-span").addClass("sp-1-click-out");
    $("#mid-span").addClass("sp-2-click-out");
    $("#third-span").addClass("sp-3-click-out");
    
    $('#link-container-div').addClass('screen-small');
    $('#nav-bar').removeClass('small-screen-nav');
    mid_span.removeEventListener("animationend", endFunction);
  }
});

function endFunction() {
  $("#mid-span").addClass("invisible");
}