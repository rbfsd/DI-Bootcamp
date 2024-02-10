const fs = require("fs");

const fileManager = {};

fileManager.readFile = (filePath, callback) => {
  fs.readFile(filePath, "utf8", (error, content) => {
    if (error) {
      console.error(`Erreur lors de la lecture du fichier : ${error.message}`);
      callback(null);
    } else {
      callback(content);
    }
  });
};

fileManager.writeFile = (filePath, content) => {
  try {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Fichier "${filePath}" écrit avec succès.`);
  } catch (error) {
    console.error(
      `Erreur lors de l'écriture dans le fichier : ${error.message}`
    );
  }
};

module.exports = fileManager;
