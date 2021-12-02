const URL = '';

const mainCard = document.querySelector('#card');

/*traer todos los elementos del template*/
const templateCard =document.querySelector('#template-card').content;

/*Un fragment funciona como un arreglo */
const fragment = document.createDocumentFragment();

const btnGenerate = document.getElementById('#btn-generate');

btnGenerate.addEventListener('click', FetchApi);

function createCard(simpson){
    let clone_template = document.importNode(templateCard, true);
    clone_template.querySelector(".image-card").setAttibute('src'. simpson[0].image);
    clone_template.querySelector(".name-card").textContent = simpson[0].character;
    clone_template.querySelector(".quote-card").textContent = `Quote: ${simpson[0].quote}`;
    fragment.appendChild(clone_template);
    mainCard.appendChild(fragment);
}
