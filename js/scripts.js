$(document).ready(function() {
    var pingpong = prompt("What number would you like me to ping-pong up to?");
  for (i = 1; i <= number; i++) {

	if (i % 3 == 0 && i % 5 == 0) {
    	document.write("Ping-Pong");
	} else if (i % 3 == 0) {
   	 	document.write("Ping");
	} else if (i % 5 == 0) {
    	document.write("Pong");
	} else {
    	document.write(i);
    }
	document.write("<br>");
	}
});


// for (var pingpong = 99; pingpong >= 1; pingpong -= 1) //
