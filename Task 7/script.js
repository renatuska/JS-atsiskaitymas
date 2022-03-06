/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

let arr = new Array();
function showObjectKeys(obj) {
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    arr.push(keys[i] + ": " + obj[keys[i]]);
  }
}
showObjectKeys(audi);
console.log(arr);
