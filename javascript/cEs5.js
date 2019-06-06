var john = {
	fullName: 'John Wick',
	bills: [124, 48, 268, 180, 42],
	calcTips: function() {
		this.tips = [];
		this.finalValues = [];
		for(var i = 0; i < this.bills.length; i++) {
			var percentage;
			var bill = this.bills[i];
			if (bill < 50) {
				percentage = 0.2;
			} else if (bill >= 50 && bill < 200) {
				percentage = 0.10;
			} else {
				percentage = 0.25;
			}
			this.tips[i] = bill * percentage; // get the tip at any given point in the loop during the counter, then store it in tips[i]
			this.finalValues[i] = bill + bill * percentage;
		}
	}
}

var mark = {
	fullName: 'Mark Miller',
	bills: [77, 375, 110, 45],
	calcTips: function() {
		this.tips = [];
		this.finalValues = [];
		for(var i = 0; i < this.bills.length; i++) {
			var percentage;
			var bill = this.bills[i];
			if (bill < 100) {
				percentage = 0.2;
			} else if (bill >= 100 && bill < 300) {
				percentage = 0.10;
			} else {
				percentage = 0.25;
			}
			this.tips[i] = bill * percentage; // get the tip at any given point in the loop during the counter, then store it in tips[i]
			this.finalValues[i] = bill + bill * percentage;
		}
	}
}

// Scope of this function is global .window object as it doesn't have a class or object declaration
function calcAverage(tipzorz) {
    var sum = 0;
    for(var i = 0; i < tipzorz.length; i++) {
        sum += tipzorz[i];
    }
    return sum / tipzorz.length;
}

john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
	console.log(john.fullName + "'s family paid a higher tip on average with $" + john.average);
} else if (mark.average > john.average) {
	console.log(mark.fullName + "'s family paid a higher tip on average with $" + mark.average);
}