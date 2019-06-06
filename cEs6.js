/*

7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

*/

const joe = {
    fullName: "Joe Reed",
    bills: [125, 49, 269, 181, 43],
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

const mat = {
    fullName: "Mat Jeez",
    bills: [78, 376, 111, 46],
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

calcAvg = (tipz0rz) => {
    sum = 0;
    for(i = 0; i < tipz0rz.length; i++) {
        sum =+ tipz0rz[i];
    }
    return sum / tipz0rz.length;
}

// We need to call calcTip first as it contains the this.tip arrays, which we use when we declare name.average and invoke calcAvg🤓
joe.calcTip();
mat.calcTip();

joe.average = calcAvg(joe.tips);
mat.average = calcAvg(mat.tips);
console.log(joe, mat);