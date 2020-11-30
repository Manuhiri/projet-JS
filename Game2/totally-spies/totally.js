//Création de variable

var scoreTmp = 0;
var scoreActuel = [0, 0];
var indexPlayer = 1;
var boolPlay = true;
// var numberTmp = 0;

//On génére une chiffre alléatoire entre 1 et 6
var randomNumber = Math.floor(Math.random() * 6) + 1;


//On récupère les élément via le DOM, et on veille à ce que tous les core soit = à 0 au départ du jeu
document.getElementsByClassName("score-1").textContent = "0";
document.getElementsByClassName("score-2").textContent = "0";
document.getElementsByClassName("current-score-1").textContent = "0";
document.getElementsByClassName("current-score-2").textContent = "0";


//Affichage aléatoire des images
document.querySelector(".btn-roll").addEventListener("click", function () {
    if (boolPlay == true) {// Autre écriture if(boolplay) = true if(!boolPlay) = false

        //On génére une chiffre alléatoire entre 1 et 6
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        //Je modifie l'affichage via le DOM, pour 
        document.querySelector(".image-roll").src = "pics/" + randomNumber + ".png";


        if (randomNumber == 1 && numberTmp == 6) {
            scoreTmp += 200;
            //On change le score, "indexPlayer" nous permet de passer d'un joueur à l'autre
            document.querySelector(".current-score-" + indexPlayer).textContent = scoreTmp;

        } else if (randomNumber == 4) {
            scoreTmp += 30;
            //On change le score, "indexPlayer" nous permet de passer d'un joueur à l'autre
            document.querySelector(".current-score-" + indexPlayer).textContent = scoreTmp;

        } else if (randomNumber != 5) {
            scoreTmp += randomNumber;
            //On change le score, "indexPlayer" nous permet de passer d'un joueur à l'autre
            document.querySelector(".current-score-" + indexPlayer).textContent = scoreTmp

        } else {
            //L'image burns nous ramène notre score à 0 et passe la main au joueur suivant
            //concaténation d'un if else
            indexPlayer == 1 ? indexPlayer = 2 : indexPlayer = 1;
            //On remet les compte à 0
            scoreTmp = 0;
            document.querySelector(".current-score-1").textContent = "0";
            document.querySelector(".current-score-2").textContent = "0";

            //On récupère les élément pour identifier les joueurs
            var elem1 = document.querySelector(".part1").firstChild;
            var elem2 = document.querySelector(".part2").firstChild;

            //Le toggle permet de passer d'un joueur à l'autre
            elem1.classList.toggle("active");
            elem2.classList.toggle("active");
        };
            numberTmp = randomNumber;
    }
});


document.querySelector(".btn-hold").addEventListener("click", function () {
    if (boolPlay == true) {

    
        //
        scoreActuel[indexPlayer-1] += scoreTmp;
        //Je met le score à jour
        document.querySelector(".score-" + indexPlayer).textContent = scoreActuel[indexPlayer - 1];

        //test qui premet de continuer ou finir le jeux
        if (scoreActuel[indexPlayer - 1] >= 200) {

            document.querySelector(".name-" + indexPlayer).textContent = "Winner!";

            var elem1 = document.querySelector(".part1").firstChild;
            var elem2 = document.querySelector(".part2").firstChild;

            elem1.classList.remove("active");
            elem1.classList.remove("active");

            boolPlay = false;

        } else {
            //concaténation d'un if else
            indexPlayer == 1 ? indexPlayer = 2 : indexPlayer = 1;
            //On remet les compte à 0
            scoreTmp = 0;
            document.querySelector(".current-score-1").textContent = "0";
            document.querySelector(".current-score-2").textContent = "0";

            //On récupère les élément pour identifier les joueurs
            var elem1 = document.querySelector(".part1").firstChild;
            var elem2 = document.querySelector(".part2").firstChild;

            //Le toggle permet de passer d'un joueur à l'autre
            elem1.classList.toggle("active");
            elem2.classList.toggle("active");
        }
    };
});