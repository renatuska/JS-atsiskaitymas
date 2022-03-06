/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator() {
    this.sum = function(a, b){
        return a + b;
    }
    this.subtraction = function (a, b){
        return a - b;
    }
    this.multiplication = function (a, b){
          return a * b;
    }
    this.division = function (a, b){
        return a / b;

    }
}

// Prašo 3 metodų, bet išvardina keturis, tai visus 4 ir panaudojam
const cal = new Calculator();

let sum = cal.sum(10, 5);
console.log(`Sum = ${sum}`);

let subtraction = cal.subtraction(10, 5);
console.log(`Subtraction = ${subtraction}`);

let multiplication = cal.multiplication(10, 5);
console.log(`Multiplicationm = ${multiplication}`);

let division = cal.division(10, 5);
console.log(`Division = ${division}`);