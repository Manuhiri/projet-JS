
//Je récupère la valeur saisie par l'internaute via l'évènement click 
document.getElementById("valider").addEventListener("click", function () {
    // Je récupère la value de l'élément qui a pour id info
    var taille = document.getElementById("info").value;
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
        //1_création d'un nouveau tableau
        tab[n] = new Array();

        //2_je remplis le tableau
        for (var p = 0; p <n + 1; p++) {
            if (p == 0 || p == n) {
                tab[n][p] = 1;
            } else {
                tab[n][p] = tab[n - 1][p] + tab[n - 1][p - 1];
            };
        };
    };
};