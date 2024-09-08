var typed = new Typed('.typed-words', {
    strings: ["Web Apps","HTML CSS JS JQuery AJAX BOOTSTRAP", "PHP(Laravel) VUE.JS API INTEGRATION",".NET C# WPF","MYSQL MS SQL","GIT LINUX HOMESTEAD VM BOX"],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 4000,
    startDelay: 1000,
    loop: true,
    showCursor: true
  });

// Causes progress
$('.causes-progress').waypoint(function () {
  $('.progress .progress-bar').each(function () {
    $(this).css("width", $(this).attr("aria-valuenow") + '%');
  });
}, {offset: '100%'});

//education list 
$(document).ready(function() {
$('#education-list').on('click',function(){
  
  //document.getElementsByClassName("progress-bar").innerHTML = "";
  //document.getElementsByClassName("progress-bar").innerHTML = "";
});
});