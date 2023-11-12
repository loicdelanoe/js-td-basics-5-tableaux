/*
TABLEAUX - PRÉPA 4 : Date valide - version 3
- Déclarez deux fonctions :
    - La première fonction 'isBissextile' retourne true ou false selon que l'année est bissextile ou pas.
    - La deuxième fonction 'isValid' retourne true ou false selon que la date est valide ou pas.
    Stockez cette fois le nombre maximum de jours autorisé par mois dans un tableau (utilisez 'isBissextile' pour gérer le cas du mois de février).
- Utilisez 'isValid' pour décider si votre date est valide avant d'afficher votre message dans la console.
*/

// Fonction pour vérifier si une année est bissextile
function isBissextile(annee) {
    // Code pour déterminer si 'annee' est bissextile
    return (annee % 4 === 0 && !(annee % 100 === 0)) || annee % 400 === 0;
}

// Fonction pour vérifier si une date est valide
function isValid(jour, mois, annee) {
    // Code pour vérifier si la date (jour, mois, annee) est valide
    if (annee < 0) {
        return false;
    }
    if (mois > 12 || mois < 0) {
        return false;
    }
    if (jour < 0 || jour > 31) {
        return false;
    }

    const joursParMois = [0, 31, isBissextile(annee) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return jour <= joursParMois[mois];
}

console.log(isValid(25))
// Utilisez 'isValid' pour vérifier si une date est valide avant d'afficher un message dans la console
