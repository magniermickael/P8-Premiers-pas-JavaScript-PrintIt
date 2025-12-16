/* ==============================
   0) Données : définition des slides du carrousel
   ============================== */
const slides = [ /* Tableau d'objets représentant les slides du carrousel */
	{ /* Début de la première slide */
		image: "slide1.jpg",/* Nom de l'image de la slide */
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>" /* Texte de la slide avec balises HTML */
	},/* Fin de la première slide */

	{/* Début de la deuxième slide */
		image: "slide2.jpg", /* Nom de l'image de la slide */
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>" /* Texte de la slide avec balises HTML */
	},/* Fin de la deuxième slide */

	{	/* Début de la troisième slide */
		image: "slide3.jpg", /* Nom de l'image de la slide */
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>" /* Texte de la slide avec balises HTML */
	},/* Fin de la troisième slide */

	{ /* Début de la quatrième slide */
		image: "slide4.png", /* Nom de l'image de la slide */
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>" /* Texte de la slide avec balises HTML */
	} /* Fin de la quatrième slide */
];

/* ==============================
   1) Sélection des éléments du DOM
   ============================== */

// Récupération des deux flèches de navigation du carrousel
const leftArrow = document.querySelector(".arrow_left"); // Sélection de la flèche gauche
const rightArrow = document.querySelector(".arrow_right"); // Sélection de la flèche droite

/* ==============================
   2) Événements : écoute des clics (phase de test)
   ============================== */

// Pour l’instant, on vérifie juste que le clic est détecté via la console.
// Ensuite, on remplacera ça par la logique de changement de slide.
leftArrow.addEventListener("click", () => {
	console.log("clic gauche");
});// Écouteur d'événement pour la flèche gauche

rightArrow.addEventListener("click", () => {
	console.log("clic droit");
});// Écouteur d'événement pour la flèche droite
