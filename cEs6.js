/*

EXTRA: Mat's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.

Mat likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than Joe).
5. Implement the same functionality as before, this time using Mat's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

*/

const joe = {
    fullName: "Joe Reed",
    bills: [124, 48, 268, 180, 42],
    calcTip: function() { // have to use ES5 syntax here to use this 🤷‍♂️
        this.tips = [];
        this.finalValues = [];
        for(let i = 0; i < this.bills.length; i++){

            let percentage;
            let bill = this.bills[i]; // to resemble the value of a bill in the array when looping, we use the i counter variable

            if (bill < 50) {
                percentage = 0.2;
            } else if (bill >= 50 && bill < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }
            this.tips[i] = bill * percentage;
            this.finalValues = bill + (bill * percentage);
        }

    }
}

joe.calcTip();
console.log(joe);

const mat = {
    fullName: "Mat Jeez",
    bills: [77, 375, 110, 45],
    calcTip: function() {
        this.tips = [];
        this.finalValues = [];
        for(let i = 0; i < this.bills.length; i++){

            let percentage;
            let bill = this.bills[i];

            if (bill < 100) {
                percentage = 0.2;
            } else if (bill >= 100 && bill < 300) {
                percentage = 0.1;
            } else {
                percentage = 0.25;
            }
            this.tips[i] = bill * percentage;
            this.finalValues = bill + (bill * percentage);
        }

    }
}

mat.calcTip();
console.log(mat);