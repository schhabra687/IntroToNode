console.log("Hello");

//const fs = require("fs");
//fs.copyFileSync("file1.txt","file2.txt");

var superheroes = require("superheroes");
var mySuperHero = superheroes.random();

var supervillains = require("supervillains");
var mySuperVillain = supervillains.random();

console.log(mySuperHero);
console.log(mySuperVillain);
