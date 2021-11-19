// Task 1
let salary = +prompt("Введіть суму вашої з/п числом:");
let prize = 0.15;
let taxes = 0.1;
let earnings = salary * (1 + prize);
console.log(earnings);
let withtaxes = earnings * (1 - taxes);
console.log(withtaxes);
let spendings = 190;
let withspendings = withtaxes - spendings;
console.log(withspendings);
let wife = 2;
let balance = withspendings / wife;
// let balance = (salary * (1 + prize) * (1 - taxes) - spendings) / wife;
console.log(balance);
alert("З цих грошей ваші лише: " + balance);

// Task 2
let sharp = '#';

for (let i = 0; i < 7; i++) {
    if (i === 6) {
        sharp += '#\\'
        console.log(sharp);
        console.log('');
    } else {
        console.log(sharp);
        console.log('');
        sharp += '#';
    }
}