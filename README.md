# **Jeu du Pendu**

## **Description et règles du jeu**

Le jeu consiste à trouver un mot en devinant les lettres qui le composent avec un nombre limité de tentatives.
A chaque fois que le joueur trouve une lettre, celle-ci est affichée, dans le cas contraire, le joueur perd 1 essai.

## **Cahier des charges**

Votre direction vous confier a un second projet, elle souhaiterait commercialiser un jeu du pendu en navigateur.
Elle vous a donc de produire un MVP (minimum viable product) de l’application. Pour l’instant du JavaScript suffira,
il n’y a pas encore besoin d’interface graphique.

### ***Spécifications fonctionnelles:***

- Quand l’utilisateur arrive sur la page index.html le jeu démarre
- Par défaut l’ordinateur choisit un mot au hasard dans une liste et affiche au joueur le mot à deviner sous forme de underscores.
- Le joueur peut rentrer une lettre
- L’ordinateur vérifie qu’une seule lettre a été rentrée et si cette lettre est présente dans le mot, remplace tous les underscores
correspondant par la lettre avant de d’afficher à nouveau le mot. Si la lettre n’était pas présente le joueur perd un point
- Le joueur démarre à 7 point, s’il arrive à zéro, il a perdu, s’il trouve toutes les lettres du mot avant,il a gagné

### ***Spécifications techniques:***
- Le projet est codé dans une base boilerplate qui respecte les standards de l’industrie
- Le JavaScript est dans un fichier séparé
- Le code est commenté, indenté, lisible et maintenable
- Le code fait usage au maximum des fonctions et des nouvelles normes JS
- Le jeu est accessible via un fichier index.html
- Le code du projet est disponible sur un repository GitHub
- Le repository contient un fichier README, une description, des mots clef et des commits


