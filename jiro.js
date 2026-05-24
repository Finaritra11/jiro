const clc = document.getElementById("clc");

clc.addEventListener('click', () => {
    const show = document.getElementById('resul');
    const choix = document.getElementById('choix').value;
    const quantite = document.getElementById('quantite').value;
    
    let total = 0;
    let prim = 0;
    
show.style.display="block";
    if (choix === "Sociale") {
        prim = 1000
        if (quantite <= 50) {
            total = quantite * 130
            
        }
        else {
            total = 50 * 130 + ((quantite - 50) * 764)
        }
    }

    else if (choix === "Economique") {
        prim = 8000
        if (quantite <= 130) {
            total = quantite * 340
            
        }
        else {
            total = quantite * 340 + ((quantite - 130) * 560)
        }

    }

    else if (choix === "Confort") {
        prim = 10000
        if (quantite <= 130) {
            total = quantite * 370
            
        }
        else {
            total = quantite * 370 + ((quantite - 130) * 570)
        }

    }


    let apayer = prim + total;
    const resultat = document.getElementById('resultat').innerHTML = "Le prix est: "+ total + "Ar";
    let prime =document.getElementById("prime").innerHTML ="+" + prim + " Ar" + " location de compteur";
    let totalpayer =document.getElementById("totalpayer").innerHTML = "Total a payer: " + apayer + "Ar";

}
);

