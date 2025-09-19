// Tableau de compétences
const competences = ["C1", "C3", "C2", "C1", "C8", "C1", "C2", "C5", "C1"];

// Code choisi
const codeRecherche = "C1";

// Calcul du nombre d’occurrences
let compteur = 0;

for (let i = 0; i < competences.length; i++) {
  if (competences[i] === codeRecherche) {
    compteur++;
  }
}

console.log(`Le code ${codeRecherche} apparaît ${compteur} fois.`);
