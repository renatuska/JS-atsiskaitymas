/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'https://api.github.com/users';
document.getElementById("btn").addEventListener("click", onClick);
function onClick() {
  fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let newHTML = "";
      data.forEach((property) => {
        newHTML += `<div class="property">
          <img src="${property.avatar_url}"/>
          <h3 class="prop-text">${property.login}</h3>
        </div>`;
      });
      document.getElementById("output").innerHTML = newHTML;
    });
}