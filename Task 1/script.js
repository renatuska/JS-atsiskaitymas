/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.getElementsByTagName("form")[0].addEventListener("submit", onSubmit);
    let svorisKG;
     function onSubmit(event){
        event.preventDefault();
        svorisKG = document.getElementById("search").value;
        document.getElementById("output").innerHTML = result(svorisKG);
    }   

    function result(kg) {
      return "Weight (lb): "+(kg / 2.2046).toFixed(2) + 
      "<br>"+
      "Weight (g): "+(kg * 1000).toFixed(2) + 
      "<br>"+
      "Weight (oz): "+(kg / 35.274).toFixed(2)
    }



