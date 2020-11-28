// += signifie concaténer


//Je créer un booléen pour éviter d'afficher plusieurs fois le résultat lorsque l'on clique sur valider
var bool = true;


//Je récupère la valeur saisie par l'internaute via l'évènement click
document.getElementById("valider").addEventListener("click", function () {

    //Le if nous permet de ne pas réaffciher le résultat plusieru fois
    if (bool == true) {
        // Je récupère la value de l'élément qui a pour id info
        var taille = document.getElementById("infos").value;
        afficherTriangle(trianglePascale(taille));
        bool = false;
    };
    
});

//Je récupère la valeur saisie par l'internaute via l'évènement click
document.getElementById("valider-1").addEventListener("click", function () {

    //Le if nous permet de ne pas réaffciher le résultat plusieru fois
    if (bool == true) {
        // Je récupère la value de l'élément qui a pour id info
        var numero = document.getElementById("stern").value;
        afficherStern(stern(numero));
    };
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


//afficher le triangle de pascale
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


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


// Je créer la fonction de stern
function stern(numero) {
    //On génère un triangle de pascale qui nous servira pour créer la suite de stern
    var tab1 = trianglePascale(numero+100)
    var tab2 = [];
    //Je renseigne les 4 premier élément de la suite de stern
    tab2.push(1);
    tab2.push(1);
    tab2.push(2);
    tab2.push(1);
    //création de la boucle
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
    //fonction reload pour recharger la page prend un boolean en paramètre
    document.location.reload(true);
});

document.getElementById("retry-1").addEventListener("click", function () {
    //fonction reload pour recharger la page prend un boolean en paramètre
    document.location.reload(true);
});
