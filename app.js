const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];
switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('📄ARCHIVO CREADO:'.yellow, `✔️  ${archivo}`.green))
            .catch(err => console.log(err));
        break;
    default:
        console.log('❌ COMANDO NO RECONOCIDO'.red);
}

// console.log(argv.base);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);

