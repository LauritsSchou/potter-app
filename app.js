"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

function initApp() {
  // Harry Potter
  const potterName = "Harry Potter";
  const potterGender = "male";
  const potterHouse = "Gryffindor";
  const potterDateOfBirth = "31-07-1980";
  const potterAncestry = "half-blood";
  const potterEyeColour = "green";
  const potterHairColour = "black";
  const potterActor = "Daniel Radcliffe";
  const potterImage = "http://hp-api.herokuapp.com/images/harry.jpg";

  showCharacter(potterImage, potterName, potterHouse, potterDateOfBirth, potterActor);
  //   showCharacter(hermioneImage, hermioneName, hermioneHouse, hermioneDateOfBirth, hermioneActor);
  showCharacter("http://hp-api.herokuapp.com/images/ron.jpg", "Ron Weasley", "Gryffindor", "01-03-1980", "Rupert Grint");
  console.log(potterName, potterGender, potterHouse, potterDateOfBirth, potterAncestry, potterEyeColour, potterHairColour, potterActor, potterImage);
}
function showCharacter(image, name, house, dateOfBirth, actor) {
  const articleElement = document.createElement("article");
  const nameElement = document.createElement("h2");
  const imageElement = document.createElement("img");
  const actorElement = document.createElement("p");
  const houseElement = document.createElement("p");
  const dateOfBirthElement = document.createElement("p");
  nameElement.textContent = name;
  imageElement.src = image;
  actorElement.textContent = actor;
  houseElement.textContent = house;
  dateOfBirthElement.textContent = dateOfBirth;
  articleElement.appendChild(imageElement);
  articleElement.appendChild(nameElement);
  articleElement.appendChild(actorElement);
  articleElement.appendChild(dateOfBirthElement);
  articleElement.appendChild(houseElement);
  document.querySelector("#characters").appendChild(articleElement);
}
// function showCharacter() {
//   const myHtml = /*html*/ <article> </article>;
// }
