// += signifie concat�ner


//Je cr�er un bool�en pour �viter d'afficher plusieurs fois le r�sultat lorsque l'on clique sur valider
var bool = true;


//Je r�cup�re la valeur saisie par l'internaute via l'�v�nement click
document.getElementById("valider").addEventListener("click", function () {

    //Le if nous permet de ne pas r�affciher le r�sultat plusieru fois
    if (bool == true) {
        // Je r�cup�re la value de l'�l�ment qui a pour id info
        var taille = document.getElementById("infos").value;
        afficherTriangle(trianglePascale(taille));
        bool = false;
    };
    
});

//Je r�cup�re la valeur saisie par l'internaute via l'�v�nement click
document.getElementById("valider-1").addEventListener("click", function () {

    //Le if nous permet de ne pas r�affciher le r�sultat plusieru fois
    if (bool == true) {
        // Je r�cup�re la value de l'�l�ment qui a pour id info
        var numero = document.getElementById("stern").value;
        afficherStern(stern(numero));
    };
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


//afficher le triangle de pascale
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


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


// Je cr�er la fonction de stern
function stern(numero) {
    //On g�n�re un triangle de pascale qui nous servira pour cr�er la suite de stern
    var tab1 = trianglePascale(numero+100)
    var tab2 = [];
    //Je renseigne les 4 premier �l�ment de la suite de stern
    tab2.push(1);
    tab2.push(1);
    tab2.push(2);
    tab2.push(1);
    //cr�ation de la boucle
    for (var i = 4; i < numero; i++) {

        var sum = 0; 
        var newVal = Math.trunc(i/2);
        for (j = 0; j < newVal+1; j++) {
            sum += tab1[i-j][j]%2;
        };

        tab2.push(sum);
    };

    return tab2;
};

console.log(stern(7));


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


//Affcher le suite de stern
function afficherStern(tab) {
    for (var i = 0; i < tab.length; i++) {
        var u = i + 1;
        document.getElementById("stern-res").innerHTML += "s" + u + "=" + " " + tab[i] + " ";
    };
};


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


//Activer les boutons reset
document.getElementById("retry").addEventListener("click", function () {
    //fonction reload pour recharger la page prend un boolean en param�tre
    document.location.reload(true);
});

document.getElementById("retry-1").addEventListener("click", function () {
    //fonction reload pour recharger la page prend un boolean en param�tre
    document.location.reload(true);
});
