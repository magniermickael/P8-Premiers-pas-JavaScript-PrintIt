/******************************************************
 * PROJET PRINT IT - Slider
 * Étape 2 : écouteurs de clic sur les flèches
 * Étape 3 : génération des bullet points (dots)
 * Étape 4 : Changer image + texte + bullet au clic
 ******************************************************/

/* -------- 1) Tableau des slides (données) -------- */
const slides = [
	{
		image: "slide1.jpg",
		tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
	},
	{
		image: "slide2.jpg",
		tagLine:
			'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
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
// Je récupère l'image affichée dans le banner
const bannerImg = document.querySelector(".banner-img");

// Je récupère le texte affiché dans le banner (le <p> dans #banner)
const bannerText = document.querySelector("#banner p");

// Je récupère la flèche gauche
const leftArrow = document.querySelector(".arrow_left");

// Je récupère la flèche droite
const rightArrow = document.querySelector(".arrow_right");

// Je récupère le conteneur des bullet points (déjà présent dans le HTML)
const dotsContainer = document.querySelector(".dots");

/* -------- 3) Index courant (slide affichée) -------- */
// Je commence sur la première slide (index 0)
let currentIndex = 0;

/* -------- 4) Génération des bullet points (Étape 3) -------- */
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

		// Je stocke l’index dans un data-attribute (utile pour l’étape 4 et bonus clic sur dot)
		dot.dataset.index = String(index);

		// Si c'est le premier slide, je le marque comme sélectionné
		if (index === 0) {
			dot.classList.add("dot_selected");
		}

		// J’ajoute le dot dans le conteneur
		dotsContainer.appendChild(dot);
	});
}

/* -------- 5) Mise à jour du bullet actif -------- */
// Fonction qui met à jour la classe dot_selected selon l’index courant
function updateDots(index) {
	// Je récupère tous les dots
	const dots = document.querySelectorAll(".dot");

	// Je retire la classe dot_selected à tous
	dots.forEach((dot) => dot.classList.remove("dot_selected"));

	// J'ajoute la classe dot_selected au dot correspondant à l'index courant
	dots[index].classList.add("dot_selected");
}

/* -------- 6) Affichage d’une slide (image + texte + bullet) -------- */
// Fonction centrale : affiche la slide correspondant à l’index donné
function setSlide(index) {
	// Je mets à jour l’image en construisant le chemin demandé (dossier slideshow)
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;

	// Je mets à jour le texte (innerHTML pour garder les <span>)
	bannerText.innerHTML = slides[index].tagLine;

	// Je mets à jour le bullet actif
	updateDots(index);
}

/* -------- 7) Initialisation -------- */
// Je crée les dots au chargement
createDots();

// J’affiche la première slide au chargement (synchronisation image/texte/dot)
setSlide(currentIndex);

/* -------- 8) Event listeners sur les flèches (Étape 4) -------- */
// Au clic sur la flèche gauche, je vais à la slide précédente (boucle infinie)
leftArrow.addEventListener("click", () => {
	// Si je suis sur la première slide, je passe à la dernière
	if (currentIndex === 0) {
		currentIndex = slides.length - 1;
	} else {
		// Sinon je recule normalement
		currentIndex -= 1;
	}

	// J'affiche la slide correspondante
	setSlide(currentIndex);
});

// Au clic sur la flèche droite, je vais à la slide suivante (boucle infinie)
rightArrow.addEventListener("click", () => {
	// Si je suis sur la dernière slide, je reviens à la première
	if (currentIndex === slides.length - 1) {
		currentIndex = 0;
	} else {
		// Sinon j'avance normalement
		currentIndex += 1;
	}

	// J'affiche la slide correspondante
	setSlide(currentIndex);
});