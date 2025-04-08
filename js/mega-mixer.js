const listeApprenants = [
    "Sophie FONFEK",
    "Guy TARE",
    "Jessica SEROLLE",
    "Beth TIOLE",
    "Maude ZARELLA",
    "Debby SCOTT",
    "Lara LEUZE",
    "Oussama LAIRBON",
    "Elie COPTAIRE",
    "Alonso BISTRAU",
    "Aude JAVELLE",
    "Gérard MENSOIF"
];

const tabImg = [
    "url('assets/smilley/smiley-1.png')",
    "url('assets/smilley/smiley-2.png')",
    "url('assets/smilley/smiley-3.png')",
    "url('assets/smilley/smiley-4.png')",
    "url('assets/smilley/smiley-5.png')",
    "url('assets/smilley/smiley-6.png')",
    "url('assets/smilley/smiley-7.png')",
    "url('assets/smilley/smiley-8.png')",
    "url('assets/smilley/smiley-9.png')",
    "url('assets/smilley/smiley-10.png')",
    "url('assets/smilley/smiley-11.png')",
    "url('assets/smilley/smiley-12.png')",
    "url('assets/smilley/smiley-13.png')",
    "url('assets/smilley/smiley-14.png')",
    "url('assets/smilley/smiley-15.png')"
];

const card = document.getElementById("card");
const placeForImg = document.getElementById("sizer");
const emplacementImg = document.getElementById("card");
const backImg = document.querySelector(".back");
const boutonAEffacer = document.getElementById("ButtonToDelete");
const bouttonInit = document.getElementById("BoutonInitialiser");
const boutonPlacer = document.getElementById("BoutonPlacer");
const prenom = document.querySelector(".prenom");
const nom = document.querySelector(".nom");
const selectNumber = document.getElementById("numberSelect");
const options = selectNumber.options;
const selectLignes = document.querySelectorAll("option")

console.log(selectLignes)

selectLignes.forEach( () => {
    console.log(selectLignes.value)
    // console.log(options.values)

})

// console.log(placeForImg)
// console.log(selectNumber)
// console.log(optionSelect.attributes)
// console.log(prenom)
// console.log(nom)
// console.log(emplacementImg)
// console.log(backImg)
// console.log(bouttonInit.attributes)
// console.log(boutonPlacer)



boutonAEffacer.remove()
addCard()

// boutonAEffacer.addEventListener("click", function( event ) {
//     card.classList.toggle('flip');
// });

function addCard () {
    for (let i = 0; i < 11; i++){
    let placeForImg = document.getElementById("sizer")
    let card = document.createElement("div")
    card.setAttribute("class", "flipcard h")
    card.setAttribute("id", "card")
    let backImg = document.createElement("div")
    backImg.setAttribute("class", "front interrogation")
    backImg.textContent = "?"
    card.appendChild(backImg)
    let backgroundImg = document.createElement("div")
    backgroundImg.setAttribute("class", "back smiley")
    backgroundImg.style.backgroundImage = `url("images/smiley/smiley-10.png")`
    card.appendChild(backgroundImg)
    let nom = document.createElement("div")
    nom.setAttribute("class", "nom")
    backgroundImg.appendChild(nom)
    let prenom = document.createElement("div")
    prenom.setAttribute("class", "prenom")
    backgroundImg.appendChild(prenom)
    placeForImg.appendChild(card)
    }

}

function dimensionSizer () {

}