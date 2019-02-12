var hello123 = function() {

	var timeLeft = moment.duration(moment('2019-04-04').diff(moment()));
	var vals = ['months', 'days', 'hours', 'months', 'minutes', 'seconds'].map(
		function(x){return timeLeft.get(x)}).filter(function(x){return x >= 0});

	console.log(vals);
	var timerDiv = document.getElementById('countdown-timer');
	vals.forEach(function(c) {
		var sp = document.createElement('span');
		sp.id = "countdown-time-span"
		sp.innerHTML = c;
		timerDiv.appendChild(sp);
	})
}
