
    var open = document.getElementById('open');
    window.addEventListener('click',outside);
function goto() {
//document.getElementById('open').style.display='block';
//document.getElementById('open').style.transition='0.5s';

open.style.display='block';
document.getElementById('import').style.marginTop='180px';


}

function to() {
//document.getElementById('open').style.display='none';

open.style.display='none';
document.getElementById('import').style.marginTop='0';

}

function outside(e) {
    if(e.target == open){
open.style.display='none';
    }
}
$(function(){
$('.counter').counterUp({
delay: 10,
time: 2000,
});

});
$(function() {
new WOW().init();
});

$(document).ready(function(){
    $("#ok").click(function(){
        $("#run").slideToggle("slow");
        
    });
});
$(document).ready(function(){
    $("#ok1").click(function(){
        $("p").slideToggle("slow");
        
    });
});
//$(document).ready(function(){
  // $(".svg").click(function(){
       //$(".menu").slideToggle("slow");
        
 //  });
//});
$(function(){
$("a.smooth-scroll").click(function(event){
    event.preventDefault();
var section = $(this).attr("href");
$('html, body').animate({
scrollTop: $(section).offset().top
}, 1250);
});


});