/**
 * 
 */
var x = document.getElementsByClassName('colors');

function feuxRouges(){

// status RED
x[0].style.background = 'red';
x[1].style.background = 'grey';
x[2].style.background = 'grey';

// status GREEN
function runGr() {
	x[0].style.background = 'grey';
	x[1].style.background = 'grey';
	x[2].style.background = 'green';
}

// status YELLOW
function runY() {
	x[0].style.background = 'grey';
	x[1].style.background = 'yellow';
	x[2].style.background = 'grey';
}

var rx = setTimeout(runGr, 2000);
var ry = setTimeout(runY, 5000);
var start = setInterval(feuxRouges, 8000);
}

feuxRouges();
