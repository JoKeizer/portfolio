$( document ).ready(function() {
  $(".menu-toggle").on("click", function() {
    $(this).toggleClass("on");
    $(".menu-section").toggleClass("on");
    $("nav ul").toggleClass("hidden");
  });


  var movementStrength = 30;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $("#top-image").mousemove(function(e){
    var pageX = e.pageX - ($(window).width() / 2);
    var pageY = e.pageY - ($(window).height() / 2);
    var newvalueX = width * pageX * -4 - 25;
    var newvalueY = height * pageY * -4 - 50;
    $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
  });

});


//Facebook
let rotateFB = document.getElementById( 'rotateFB' );

rotateFB.addEventListener( 'mouseover', function () {
  this.className = 'over';
}, false );

rotateFB.addEventListener( 'mouseout', function () {
  let rotateFB = this;
  rotateFB.className = 'out';
  window.setTimeout( function () { rotateFB.className = '' }, 550 );

}, false );


//Twitter
let rotateTw = document.getElementById( 'rotateTw' );

rotateTw.addEventListener( 'mouseover', function () {
  this.className = 'over';
}, false );

rotateTw.addEventListener( 'mouseout', function () {
  let rotateTw = this;
  rotateTw.className = 'out';
  window.setTimeout( function () { rotateTw.className = '' }, 550 );

}, false );

//Instagram

let rotateIg = document.getElementById( 'rotateIg' );

rotateIg.addEventListener( 'mouseover', function () {
  this.className = 'over';
}, false );

rotateIg.addEventListener( 'mouseout', function () {
  let rotateIg = this;
  rotateIg.className = 'out';
  window.setTimeout( function () { rotateIg.className = '' }, 550 );

}, false );

