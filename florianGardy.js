/*
Réaliser un programme déclarant une variable de chaque type suivant :

    un entier représentant ton âge
    une chaîne de caractères, représentant ton nom et ton prénom
    un booléen représentant si tu es en formation à la Wild Code School, initialisée à false
    une chaîne de caractères représentant le nom de l’école
    Afficher le type de chaque variable (typeof)
    Afficher la valeur de chaque variable Continuer le programme avec les instructions suivantes:
    modifier l’âge en ajoutant 1
    modifier le booléen représentant si tu es en formation à la Wild Code School pour qu’elle soit true
    Afficher à nouveau les valeurs des variables modifiées
*/


let age = 35;
const name = "Gardy Florian";
let inTrainingWCS = false;
const schoolName = "Wild Code School";

console.log(typeof age);
console.log(typeof name);
console.log(typeof inTrainingWCS);
console.log(typeof schoolName);

console.log("Age : " + age);
console.log("My name : " + name);
console.log("Is WCS ? " + inTrainingWCS);
console.log("School name : " + schoolName);

age++;
inTrainingWCS = true;

console.log("Age : " + age);
console.log("Is WCS ? " + inTrainingWCS);
