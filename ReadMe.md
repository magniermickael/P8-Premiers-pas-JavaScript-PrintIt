<img alt="Static Badge" src="https://img.shields.io/badge/Projet%20finalis%C3%A9-vert?style=flat&logoColor=vert">
# Print it — Projet 8 OpenClassrooms (Premiers pas sur le langage JavaScript)

Je développe un **slider/carousel en JavaScript** pour le site “Print it”, dans le cadre du **Projet 8** du parcours Développeur WordPress (OpenClassrooms).

## Liens utiles
- Je consulte le dépôt modèle OC : https://github.com/OpenClassrooms-Student-Center/Print-it-JS.git
- Je m’inspire (design/animation) : https://codepen.io/luxonauta/pen/QWEWvmB
- Mon dépôt GitHub : [git@github.com:magniermickael/P8-Premiers-pas-JavaScript-PrintIt.git](https://github.com/magniermickael/P8-Premiers-pas-JavaScript-PrintIt)
- Démo du projet (GitHub Pages) : https://magniermickael.github.io/P8-Premiers-pas-JavaScript-PrintIt/

## Objectifs du projet
Je dois implémenter un carousel qui :
- Je navigue avec des **flèches** gauche/droite
- Je génère des **bullet points** (1 par slide)
- Je mets à jour **image + texte** au clic
- Je mets en place un **défilement infini** (boucle première/dernière)

## Fonctionnalités livrées
- Je gère les clics sur les flèches (event listeners)
- Je génère automatiquement les bullets depuis le tableau `slides`
- Je synchronise l’affichage :
  - image (`.banner-img`)
  - texte (`#banner p` via `innerHTML`)
  - bullet actif (`.dot_selected`)
- Je boucle :
  - dernière → première (clic droite)
  - première → dernière (clic gauche)

## Démonstration
- Slider — slide 1 (dot 1 actif) : `./assets/screens/slide1.png`
- Slider — slide 2 (dot 2 actif) : `./assets/screens/slide2.png`
- Test boucle (dernière → première) : `./assets/screens/loop-right.png`
- Test boucle (première → dernière) : `./assets/screens/loop-left.png`

## Installation / Lancement
Je peux lancer le projet de deux façons :

### Option 1 — Ouverture simple
- Je lance `index.html` dans un navigateur

### Option 2 — Live Server (recommandé)
- J’ouvre le projet dans VS Code
- Je lance l’extension **Live Server**
- Je navigue sur l’URL locale générée

## Structure du projet
- `index.html` : structure du site + zone du banner
- `assets/style.css` : styles du site + styles des flèches/bullets
- `assets/script.js` : logique du slider (slides, index, events, boucle)

## Logique du slider (résumé)
- Je stocke les slides dans un tableau `slides` (image + tagline)
- Je garde un index courant `currentIndex`
- Je centralise l’affichage dans `setSlide(index)` :
  - je mets à jour l’image
  - je mets à jour le texte
  - je mets à jour le bullet actif
- Je gère la boucle infinie avec des conditions sur `currentIndex`

## Technologies utilisées
- HTML5
- CSS3
- JavaScript (DOM, événements, conditions, tableaux)

## Auteur
- Mickaël Magnier https://github.com/magniermickael

## Notes
- Je commente le code pour faciliter la compréhension et le suivi du projet.
- Je conserve un historique Git clair avec des branches `feature/*` et une branche `develop` pour l’intégration.
