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

function facto(valeur) {
    
    let entier = verif(valeur);
    let factorisationCalcule = " 1 * ";
    let resultat = 1 ;

    if (entier = 0) {
        return 1
    }
    
    for (let index = 2; index <= valeur; index++) {
        
        resultat *= index;

        if (index != valeur) {
            factorisation = " " + index + " * ";
        }
        else
        {
            factorisation = " " + index 
        }
    }

    return resultat;

}

function main(params) {
    
}