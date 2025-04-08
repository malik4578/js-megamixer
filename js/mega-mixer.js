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


for (let option of options) {
    console.log(option.textContent)
}


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
    // console.log(card)
    placeForImg.appendChild(card)
    }

}


function nbLignes(){
    const placeForImg = document.getElementById("sizer");
    const selectNumber = document.getElementById("numberSelect");
    const options = Array.from(selectNumber.options)
    options.forEach( (option) => {
        // console.log(nbLigne.value)
        console.log(option.textContent)
        switch (option.textContent){
            case "2" : 
            placeForImg.style.display = "flex"
            placeForImg.style.flexWrap = "wrap"
            placeForImg.style.width = "70%"
            placeForImg.style.height = "440px";
            break;
        
            case "3" :
            placeForImg.style.display = "flex"
            placeForImg.style.flexWrap = "wrap"
            placeForImg.style.width = "70%"
            placeForImg.style.height = "660px";
            break          
            case "4" :
            placeForImg.style.display = "flex"
            placeForImg.style.flexWrap = "wrap"
            placeForImg.style.width = "70%"
            placeForImg.style.height = "880px";
            break          
            case "5" :
            placeForImg.style.display = "flex"
            placeForImg.style.flexWrap = "wrap"
            placeForImg.style.width = "70%"
            placeForImg.style.height = "1100px";
            break          
            case "6" :
            placeForImg.style.display = "flex"
            placeForImg.style.flexWrap = "wrap"
            placeForImg.style.width = "70%"
            placeForImg.style.height = "1320px";
            break          

        }
        
    })

}


// addCard()
// function selectedNbImg