//help completed

function helpFunction(dirPath) {
    console.log(`
      List of commands:
      node main.js tree "directoryPath"
      node main.js organize "directoryPath"
      node main.js help
    `);
}
module.exports={
    helpKey:helpFunction
}