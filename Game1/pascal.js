// += signifie concaténer


//Je récupère la valeur saisie par l'internaute via l'évènement click
document.getElementById("valider").addEventListener("click", function () {
    // Je récupère la value de l'élément qui a pour id info
    var taille = document.getElementById("infos").value;
    afficherTriangle(trianglePascale(taille));
});


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


//Création de la fonction de création du triangle de pascale
function trianglePascale(taille) {

    //Création d'un nouveau tableau
    var tab = new Array(); //tab = [];

    // Parcour du nombre de ligne
    for (var n = 0;n < taille; n++) {
        //Création d'un tableau bidimensionnel
        //1_création d'un nouveau tableau (tableau 1)
        tab[n] = new Array();

        //2_je créer un tableau qui viendra se glisser dans le premier tableau
        for (var p = 0; p <n + 1; p++) {
            if (p == 0 || p == n) {
                tab[n][p] = 1;
            } else {
                tab[n][p] = tab[n - 1][p] + tab[n - 1][p - 1];
            };
        };
    };

    return tab;
};

console.log(trianglePascale(3));


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


function afficherTriangle(tab) {
    // Je balais le premier tableau
    for (var i = 0; i < tab.length; i++) {
        // Je rentre dans le deuxième tableau présent dans chaque ligne du premier tableau
        for (var j = 0; j < tab[i].length; j++) {
            document.getElementById("res").innerHTML += tab[i][j]+ " ";
        };
        // J'ai afficher le contenue du tableau 2 je revient dans le prenier tableau et passe à la ligne suivant
        document.getElementById("res").innerHTML += "<br>";

    };
};