const qr = [
  { name: "HTML et CSS", code: "C1" },
  { name: "JavaScript de base", code: "C2" },
  { name: "Programmation orientée objet", code: "C3" },
  { name: "Git et GitHub", code: "C4" },
  { name: "Bases de données SQL", code: "C5" },
  { name: "Node.js et AP", code: "C6" },
  { name: "Frameworks JS", code: "C7" },
  { name: "Projet fil rouge", code: "C8" }
]
score = 0;
let counter = 0;

alert("Bienvenue ! Réponds avec le bon code (C1..C8). Clique Annuler pour quitter.");

for (let i = 0; i < qr.length; i++) {
  const q = qr[i];
  const reponse = prompt("Quel est le code pour : " + q.name + " ?");

  if (reponse === null) {
    console.log("Fin du jeu ! Score final : " + score + " / " + counter);
    break;
  }

  counter++;

  if (reponse.toUpperCase() === q.code.toUpperCase()) {
    score++;
    console.log("✅ Correct ! " + q.name + " → " + q.code);
  } else {
    console.log("❌ Faux ! La bonne réponse était : " + q.code);
  }
} 
console.log("📊 Score actuel : " + score + " / " + counter);