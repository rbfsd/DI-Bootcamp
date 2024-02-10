const fileManager = require("./fileManager");

fileManager.readFile("Hello World.txt", (helloContent) => {
  console.log(`Contenu de "Hello World.txt" : ${helloContent}`);
});

fileManager.writeFile("Bye World.txt", "Écriture dans le fichier");
