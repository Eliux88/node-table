const argv = require('yargs').option('b',{
    alias: 'base',
    type:'number',
    demandOption: true,
    describe: 'base de tabla'

}).option('l',{
    alias: 'listar',
    type:'boolean',
    demandOption: true,
    default: false,
    describe: 'lista la tabla'

}).option('h',{
    alias: 'hasta',
    type:'boolean',   
    default: 10,
    describe: 'fin de ciclo'

}).check((argv,options)=>{
    if(isNaN(argv.b)){
        throw 'la base tiene que ser un numero'
    }
    return true;
}).argv;
module.exports = argv;