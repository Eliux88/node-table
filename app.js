
const { truncate } = require('fs');
const { options } = require('yargs');
const { crearArchivo }=require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

//console.log(process.argv);
console.log(argv);
/*
const base = 7;
*/
crearArchivo(argv.b,argv.b,argv.h)
.then (nombreArchivo =>console.log(nombreArchivo,'creado'))
.catch(err=>console.log(err));
