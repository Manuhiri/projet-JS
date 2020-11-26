
//Je r�cup�re la valeur saisie par l'internaute via l'�v�nement click 
document.getElementById("valider").addEventListener("click", function () {
    // Je r�cup�re la value de l'�l�ment qui a pour id info
    var taille = document.getElementById("info").value;
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
        //1_cr�ation d'un nouveau tableau
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