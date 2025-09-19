// === Jeu éducatif en console ===

// Base de données : autoformations et compétences
let competences = {
    "HTML et CSS": "C1",
    "JavaScript de base": "C2",
    "Programmation orientée objet": "C3",
    "Git et GitHub": "C4",
    "Bases de données SQL": "C5",
    "Node.js et API": "C6",
    "Frameworks JS": "C7",
    "Projet fil rouge": "C8"
};

let score = 0;
let totalQuestions = 0;

// Fonction pour obtenir une autoformation au hasard
function getRandomFormation() {
    let keys = Object.keys(competences);
    let randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
}

// Boucle de jeu
while (true) {
    let formation = getRandomFormation();
    let reponse = prompt(`Quelle est la compétence associée à : ${formation} ? (ex: C1, C2...)`);

    if (reponse === null) { 
        console.log("🎮 Jeu terminé.");
        console.log(`✅ Score final : ${score}/${totalQuestions}`);
        break; 
    }

    totalQuestions++;

    if (reponse.toUpperCase() === competences[formation]) {
        console.log("✅ Bonne réponse !");
        score++;
    } else {
        console.log(`❌ Mauvaise réponse. La bonne compétence est : ${competences[formation]}`);
    }

    console.log(`📊 Score actuel : ${score}/${totalQuestions}`);
    console.log("------------------------------------");
}
