const objimp = require('./information');
console.log(objimp);

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm " + objimp.nom +" Du campus " + objimp.Campus
}));
