var setupTimer = function() {
	insertTimer();
}

var resetTimer = function() {
	
	var timerDiv = document.getElementById('countdown-timer');
	timerDiv.innerHTML = "";
	insertTimer();
}

var insertTimer = function() {

	var timeLeft = moment.duration(moment('2019-04-04').diff(moment()));

	var timeUnits = ['months', 'days', 'hours', 'minutes', 'seconds']
	var vals = timeUnits
				.map(function(x){return { unit: x, val: timeLeft.get(x) }})
				.filter(function(x){return x.val >= 0 });

	var timerDiv = document.getElementById('countdown-timer');
	vals.forEach(function(c) {
		var sp = document.createElement('p');
		sp.id = "countdown-timer-val"
		sp.innerHTML = c.val;

		var spUnit = document.createElement('p');
		spUnit.id = 'countdown-timer-unit';
		spUnit.innerHTML = c.unit;
		
		var cpBlk = document.createElement('div');
		cpBlk.id = 'countdown-timer-block';
		cpBlk.appendChild(sp);
		cpBlk.appendChild(spUnit);

		timerDiv.appendChild(cpBlk);
	})

	setTimeout(resetTimer, 1 * 1000);
}
