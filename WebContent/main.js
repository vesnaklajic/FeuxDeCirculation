/**
 * 
 */
var x = document.getElementsByClassName('colors');
var y = document.getElementsByClassName('pi');
var z = document.getElementById('droit');

function feuxRouges() {

	// status RED
	x[0].style.background = 'red';
	x[1].style.background = 'grey';
	x[2].style.background = 'grey';
	z.style.background = 'grey';
	y[0].style.background = 'grey';
	y[1].style.background = 'green';

	// change to GREEN
	function runGr() {
		x[0].style.background = 'grey';
		x[1].style.background = 'grey';
		x[2].style.background = 'green';
		z.style.background = 'grey';
	}

	// change to YELLOW
	function runY() {
		x[0].style.background = 'grey';
		x[1].style.background = 'yellow';
		x[2].style.background = 'grey';
	}
	// change to right direction
	function goRight() {
		z.style.background = 'green';
	}
	//change to don't walk
	function dontWalk() {
		y[0].style.background = 'red';
		y[1].style.background = 'grey';

	}
	//change to walk
	function walk() {
		y[0].style.background = 'grey';
		y[1].style.background = 'green';

	}
	var gox= setTimeout(goRight,2500);
	var piwalk= setTimeout(walk,3500);
	var pidontw=setTimeout(dontWalk,7500);
	var rx = setTimeout(runGr, 8000);
	var ry = setTimeout(runY, 10000);
	var start = setInterval(feuxRouges, 12000);
}

feuxRouges();
