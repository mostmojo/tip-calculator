const joe = {
    fullName: "Joe Reed",
    bills: [125, 49, 269, 181, 43],
    calculateTip: function() { // have to use ES5 syntax here to use this 🤷‍♂️
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
            this.finalValues[i] = bill + (bill * percentage);
        }
    }
}

const mat = {
    fullName: "Mat Jeez",
    bills: [77, 375, 110, 45],
    calculateTip: function() {
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
            this.finalValues[i] = bill + (bill * percentage);
        }
    }
}

calcAvg = (tipz0rz) => {
    let sum = 0;
    for(let i = 0; i < tipz0rz.length; i++) {
        sum += tipz0rz[i];
    }
    return sum / tipz0rz.length;
}

/* We need to call calculateTip first as it contains the this.tip arrays,
 which we later use when we declare name.average and set it equal to calcAvg with the name.tips args that hold the values of all the tips🤓
 */

joe.calculateTip();
mat.calculateTip();

joe.average = calcAvg(joe.tips);
mat.average = calcAvg(mat.tips);
console.log(joe, mat);

if(joe.average > mat.average) {
    console.log(joe.fullName + "'s family paid more tips with an average of $" + joe.average);
} else if (mat.average > joe.average) {
    console.log(mat.fullName + "'s family paid more tips with an average of $" + mat.average);
}