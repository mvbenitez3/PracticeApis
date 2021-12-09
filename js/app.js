const URL = "https://rickandmortyapi.com/api/character/";
let characters;

const selectElement = document.querySelector("#sel-character");
selectElement.addEventListener("change", selectController);

fetchApi();

const mainCard = document.querySelector("#main-card");
/*traer todos los elementos del template*/
const templateCard = document.querySelector("#template-card").content;

/*Un fragment funciona como un arreglo */
const fragment = document.createDocumentFragment();

function addOptions() {
  for (const iterator in characters) {
    let option = document.createElement("option");
    option.setAttribute("value", iterator);
    option.textContent = characters[iterator].name;
    selectElement.add(option);
  }
}

function selectController(event) {
  if (!(event.target.value === "anyone")) {
    mainCard.innerHTML = "";
    if (event.target.value === "everybody") {
      createAllCards();
    } else {
      createCard(characters[event.target.value]);
    }
  }
}

function createAllCards() {
  for (const iterator of characters) {
    createCard(iterator);
  }
}

function createCard(element) {
  let clone_template = document.importNode(templateCard, true);
  clone_template.querySelector(".img-card").setAttribute("src", element.image);
  clone_template.querySelector(".img-card").setAttribute("alt", element.name);
  clone_template.querySelector(".name-card").textContent = element.name;
  clone_template.querySelector(".button-card").textContent = element.gender;
  fragment.appendChild(clone_template);
  mainCard.appendChild(fragment);
}

function fetchApi() {
  fetch(URL)
    .then((response) => response.json())
    .then((card) => {
      characters = card.results;
      addOptions();
    });
}
