/******************************************************
 * PROJET PRINT IT - Slider (Étape 2 + Étape 3)
 * Étape 2 : écouteurs de clic sur les flèches
 * Étape 3 : génération des bullet points (dots)
 ******************************************************/

/* -------- 1) Tableau des slides (données) -------- */
const slides = [
	{
		image: "slide1.jpg",
		tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
	},
	{
		image: "slide2.jpg",
		tagLine: 'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
	},
	{
		image: "slide3.jpg",
		tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
	},
	{
		image: "slide4.png",
		tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
	},
];

/* -------- 2) Sélection des éléments du DOM -------- */
// Je récupère la flèche gauche
const leftArrow = document.querySelector(".arrow_left");

// Je récupère la flèche droite
const rightArrow = document.querySelector(".arrow_right");

// Je récupère le conteneur des bullet points (déjà présent dans le HTML)
const dotsContainer = document.querySelector(".dots");

/* -------- 3) Génération des bullet points -------- */
// Fonction qui crée 1 dot par slide
function createDots() {
	// Je vide le conteneur au cas où (évite les doublons si je relance)
	dotsContainer.innerHTML = "";

	// Je boucle sur le tableau slides
	slides.forEach((slide, index) => {
		// Je crée un élément span pour représenter un dot
		const dot = document.createElement("span");

		// J'ajoute la classe dot (style de base)
		dot.classList.add("dot");

		// Je stocke l’index dans un data-attribute (utile pour l’étape 4/bonus clic sur dot)
		dot.dataset.index = String(index);

		// Si c'est le premier slide, je le marque comme sélectionné
		if (index === 0) {
			dot.classList.add("dot_selected");
		}

		// J’ajoute le dot dans le conteneur
		dotsContainer.appendChild(dot);
	});
}

// Je lance la création des dots au chargement
createDots();

/* -------- 4) Event listeners sur les flèches (Étape 2) -------- */
// Au clic sur la flèche gauche, je vérifie que l’événement fonctionne
leftArrow.addEventListener("click", () => {
	console.log("clic gauche");
});

// Au clic sur la flèche droite, je vérifie que l’événement fonctionne
rightArrow.addEventListener("click", () => {
	console.log("clic droit");
});