
// un entier représentant ton âge
// une chaîne de caractères, représentant ton nom et ton prénom
// un booléen représentant si tu es en formation à la Wild Code School, initialisée à false
// une chaîne de caractères représentant le nom de l’école
// Afficher le type de chaque variable (typeof)
// Afficher la valeur de chaque variable Continuer le programme avec les instructions suivantes:
// modifier l’âge en ajoutant 1
// modifier le booléen représentant si tu es en formation à la Wild Code School pour qu’elle soit true
// Afficher à nouveau les valeurs des variables modifiées

let myAge = 23;
const myName = 'Gagnant Nicolas';
let isInWCS = false;
const mySchool = 'Wild Code School';

console.log(typeof myAge, typeof myName, typeof isInWCS, typeof mySchool);
console.log(myAge, myName, isInWCS, mySchool);

myAge++;

console.log(myAge);

isInWCS = true;
console.log(myAge, myName, isInWCS, mySchool);
