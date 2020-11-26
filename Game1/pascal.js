// += signifie concat�ner


//Je r�cup�re la valeur saisie par l'internaute via l'�v�nement click
document.getElementById("valider").addEventListener("click", function () {
    // Je r�cup�re la value de l'�l�ment qui a pour id info
    var taille = document.getElementById("infos").value;
    afficherTriangle(trianglePascale(taille));
});


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


//Cr�ation de la fonction de cr�ation du triangle de pascale
function trianglePascale(taille) {

    //Cr�ation d'un nouveau tableau
    var tab = new Array(); //tab = [];

    // Parcour du nombre de ligne
    for (var n = 0;n < taille; n++) {
        //Cr�ation d'un tableau bidimensionnel
        //1_cr�ation d'un nouveau tableau (tableau 1)
        tab[n] = new Array();

        //2_je cr�er un tableau qui viendra se glisser dans le premier tableau
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
        // Je rentre dans le deuxi�me tableau pr�sent dans chaque ligne du premier tableau
        for (var j = 0; j < tab[i].length; j++) {
            document.getElementById("res").innerHTML += tab[i][j]+ " ";
        };
        // J'ai afficher le contenue du tableau 2 je revient dans le prenier tableau et passe � la ligne suivant
        document.getElementById("res").innerHTML += "<br>";

    };
};