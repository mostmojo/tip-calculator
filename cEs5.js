var john = {
	fullName: 'John Wick',
	bills: [124, 48, 268, 180, 42],
	calcTips: function() {
		this.tips = [];
		this.finalValues = [];

		for(var i = 0; i < this.bills.length; i++) {
			var percentage;
			var bill = this.bills[i]; // inside the counter, the index value of each bill is determined by the [i]. So, this.bills[i] can be 0, 1, 2, 3, 4 of the bills array at any given time while the for loop is running. Let's store that in a var called bill.

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
			var bill = this.bills[i]; // inside the counter, the index value of each bill is determined by the [i]. So, this.bills[i] can be 0, 1, 2, 3, 4 of the bills array at any given time while the for loop is running. Let's store that in a var called bill.

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

function calcAverage(tipzorz) {
    var sum = 0;
    for(var i = 0; i < tipzorz.length; i++) {
        sum += tipzorz[i];
    }
    return sum / tipzorz.length;
}

john.calcTips();
mark.calcTips();

/*
CRUD: "Update" - just like any object mutation, we can assign calcAverage(john.tips),
which will run through the calcTips key:value to fetch the value of this.tips array and assign it to "average".
*/

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
	console.log(john.fullName + "'s family paid a higher tip on average with $" + john.average);
} else if (mark.average > john.average) {
	console.log(mark.fullName + "'s family paid a higher tip on average with $" + mark.average);
}

// Mark Miller's family paid a higher tip on average with $32.2875


/*

EXPLANATION

*** calcTip() function of John & Mark objects ***

* `function()` has no parameters as not needed.
* Keyword: `this` - `this.tips` & `this.finalValues` - refers to those specific values of those specific arrays, and not anything else (within the scope of the john/mark object, NOT the global .window object).
* `this.bills.length` - determines this.bills' values first (L to R), then the length, in our case length == 5;
* `this.bills[i]` - used to determine the value of the specific counter variable in that specific bills array
* Since we use `this.bills[i]` for every condition and we want to stay DRY, we store it in a `var bill = this.bills[i]` and reuse it
* `this.tips[i]` (line 41) simply means the tip at the current position of the array, using the counter variable equals `bill * percentage` to give us the amount of tip owed
* `this.finalValues[i]` at that current position will equal the bill + the tip. JS precedence operators work like basic math ones, so `bill * percentage` will be calculated first and then the original bill, from the array will be added to it.
* Finally, we call calcTips() on the john variable and log it to the console to get the results.

*** calcAverage() function explained ***

Declare a function with a parameter tips, which will be an array of tips. We create a functio here and not a method to prevent repeating ourselves and writing out code again.
The function can be reused when called with an argument (john.tips and mark.tip in this case).
Assign sum = 0 outside the loop so it holds a value and stays/doesn't restart everytime the loop runs.
Start the loop and run it until i < tips.length and at the tip[i] of that current position, add it to sum. So the sum = 0 will take it's new value.
Then the loop will run again, and add the new tip value at that current position to the sum.
To calc. the average we return the total sum / length of the tips.

*/