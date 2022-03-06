/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'cars.json';
window.onloadv = onLoad;

window.addEventListener("load", onLoad);

function onLoad() {
    fetch("cars.json")
    .then((response) => response.json())
    .then((data) => {   
        console.log(data);
      let newHTML = " ";
      data.forEach((property) => {
        newHTML += `<div class="property">
          <h2 class="prop-text1">${property.brand} </h2>
          <hr>
          <h3
                <li
                <ul class="prop-text">${property.models}</ul>
                </li>
            </h3>
        </div>`;
      });
      document.getElementById("output").innerHTML = newHTML;
    });
}