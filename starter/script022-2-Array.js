/*****************************
 * 022 - Les tableaux indicés (Arrays)
 */


// 8. Tableau à deux dimensions

/* 
Chaque élément d'un tableau peut lui-même être un tableau.
On parle alors de tableau à deux dimensions.
Voici un exemple de tableau à deux dimensions (un tableau de tableaux),
qui pourrait être utilisé comme tableau de positionnement des mines d'un jeu du démineur.
*/
const mines = [[0, 1, 0, 1],
    [1, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 0, 0, 0]];
/* 
EXERCICE :
- évaluez chacune des expressions qui suivent
- vérifiez votre réponse en affichant la valeur de l'expression dans la console
*/
mines		// ………………………………………………………………… mines: Affiche l'ensemble du tableau, qui est une matrice 4x4 dans ce cas.
mines[1]	// ………………………………………………………………… mines[1]: Affiche le deuxième élément du tableau externe, ce qui correspond à la deuxième ligne de la matrice.
mines[0][3] // ………………………………………………………………… mines[0][3]: Affiche le quatrième élément du premier tableau interne, correspondant à la valeur à l'intersection de la première ligne et de la quatrième colonne de la matrice.


// EXERCICE 7 :
// Etape 1 :
// Pour récupérer la valeur à la deuxième ligne troisième colonne du tableau,
// utilisez les indices corrects (n'oubliez pas que les indices commencent à zéro).
// console.log(mines[1][2]);


// Testez de la même manière l'emplacement situé en première ligne quatrième colonne
// console.log(mines[0][3]);

// Etape 2 :
// Pour indiquer combien de mines contient la première ligne de ce tableau,
// vous devez parcourir les éléments de cette ligne et compter combien d'entre eux sont égaux à 1.

function checkNumberOne(rowToCheck) {
    let number = 0;

    for (let row = 0; row < rowToCheck; row++) {
        console.log(mines[row]);
        for (let col = 0; col < mines.length; col++) {
            if (mines[row][col] === 1) {
                number = number + 1;
            }
        }
        console.log(`Il y a ${number} chiffre 1 dans la ligne ${row}`)
        number = 0;
    }
}

checkNumberOne(1);