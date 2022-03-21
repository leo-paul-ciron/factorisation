//factorisation

function verif(valeur) {
    
    let exp = new RegExp("^[0-9]+$","g");

    if (exp.test(valeur)) {
        return valeur;
    }
    else
    {
        return null;
    }

}

function facto(entier) {
    
    
    let factorisationCalcule = " 1 ";
    let resultat = 1 ;


    if (entier == 0) {
        return 1
    }
    
    for (let index = 2; index <= entier; index++) {
        
        
        resultat *= index;

        console.log(resultat);

        
        factorisationCalcule += " * " + index ;
        
       

        
    }

    document.getElementById("affichageCalc").innerHTML = factorisationCalcule
    return resultat;

}

function main() {
    let valeur = document.getElementById("nombre").value; 
    let entier = verif(valeur);
    let resultat;

    if (entier != null) {
        resultat = facto(entier);
        document.getElementById("afficheResulat").innerHTML = resultat;
    }
}