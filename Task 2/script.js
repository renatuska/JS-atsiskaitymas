/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
document.getElementById("btn__element").addEventListener("click", myFunction);

function myFunction() {
document.getElementById("btn__state").innerHTML = result(count);
}

let count = 0
function result(){
    return count++;
}
