//Récupérer la valeur du tableau(fichier lier a proba html)

//Déclaration de variable
var i = 0;
var tableau = [];


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


// Avec l'évènement click de l'élément ayant pour id envoyer-1, je déclenche une fonction
document.getElementById("envoyer-1").addEventListener("click", function(){

    //Je veux récupérer la valeur saisie dans l'élément ayant pour id taille, je récupère sa "value"
    var taille = document.getElementById("taille").value;
    console.log (taille);


    //Je remplis le tableau que je viens de créer
    document.getElementById("envoyer-2").addEventListener("click", function(){
        //Je vérifie que je n'ai pas plus de valeur que de case dans le tableau
        if(i<taille){
            //Je récupère la valeur du chiffre avec son id
            var chiffre = document.getElementById("tab").value;

            //j'intègre la valeur au tableau
            tableau.push(chiffre);
            i++;
        }else{
            console.log(tableau);
            //i>taille on a donc toute nos valeur

            //Je récupère les valeur saisie dans l'élément qui a pour id envoyer-2
            document.getElementById("envoyer-2").value = "Generate!";

            //Je créer un évènement lors du passade la sourie qui déclenche une fonction
            document.getElementById("envoyer-2").addEventListener("mouseover", function(){

                //La fonction change le texte de l'élément dont l'id est moyenne
                document.getElementById("moyenne").textContent = moyenne(tableau);

                //La fonction change le texte de l'élément dont l'id est variance
                document.getElementById("variance").textContent = variance(tableau);

                //La fonction change le texte de l'élément dont l'id est ecart-type
                document.getElementById("ecart-type").textContent = ecartType(tableau);
            });
        }
    });
});


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


//Recharger la page avec le bouton reset
document.getElementById("reset-1").addEventListener("click", function(){
    //fonction reload pour recharger la page prend un boolean en paramètre
    document.location.reload(true);
});

document.getElementById("reset-2").addEventListener("click", function(){
    //fonction reload pour recharger la page prend un boolean en paramètre
    document.location.reload(true);
});



/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


function moyenne(tableau){
    var sum = 0;
    var calcul = 0;
    for(var i=0; i<tableau.length; i++){

        //Attention dans notre console log on constate que nos chiffres sont des string et non des nombre, on passe par parseInt pour les définir comme des nombres
        sum+=parseInt(tableau[i]);
    };
    calcul = sum / tableau.length;
    return calcul;
};


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


function variance(tableau){
    var moy = moyenne(tableau);
    var sum = 0;
    for(var i=0;i<tableau.length;i++){
        sum+=(parseInt(tableau[i]) - moy)*(parseInt(tableau[i]) - moy);
    };
    sum = sum / tableau.length;
    return sum;
};


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


function ecartType(tableau){
    var a = variance(tableau);
    return Math.sqrt(a);
};