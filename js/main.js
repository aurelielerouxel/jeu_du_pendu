//Afficher une alerte de bienvenue
alert("Bienvenue sur le jeu du pendu spécial jeux vidéo");

//Créer une liste de mots
const wordList = ["minecraft", "tetris", "grand theft auto", "world of warcraft", " super mario bros",
                "the legend of zelda", "mario kart", "pokemon", "red dead redemption", "diablo", "fallout"];
console.log(wordList);

//Générer un choix aléatoire d'un mot dans la liste 
function randomChoiceInArray() {
    let wordRandom = Math.floor(Math.random() * Math.floor(wordList.length));
    return wordList[wordRandom];
}
var wordRandom = randomChoiceInArray(wordRandom);
console.log(wordRandom);
