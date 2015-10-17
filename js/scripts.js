$(document).ready(function() {

var userNumber = prompt("Please enter any positive integer to get you ping pong on");

  for (var i = 1; i <= userNumber; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      $('#list').append('<li>'+"ping-pong"+'</li>');}
    else if (i % 5 === 0) {
      $('#list').append('<li>'+"pong"+'</li>');}
    else if (i % 3 === 0) {
      $('#list').append('<li>'+"ping"+'</li>');}
    else{
      $('#list').append('<li>'+i+'</li>');};
  };

});
