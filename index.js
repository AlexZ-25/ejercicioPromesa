let paises = [
    { id: 1, nombre: 'México' },
    { id: 2, nombre: 'Peru' },
    { id: 3, nombre: 'Colombia' },
]

let estados = [
    { id: 1, nombre: 'Aguascalientes', idPais: 1 },
    { id: 2, nombre: 'Baja california', idPais: 1 },
    { id: 3, nombre: 'Baja california sur', idPais: 1 },
    { id: 4, nombre: 'Campeche', idPais: 1 },
    { id: 5, nombre: 'Guainía', idPais: 3 },
    { id: 5, nombre: 'Huila', idPais: 3 },
]

let mostrar = async (promisePaises, promiseEstados) => {
    promisePaises = new Promise((resolve) => {
        resolve(paises);
    });
    // console.log(promisePaises);
    promiseEstados = new Promise((resolve) => {
        resolve(estados);
    });
    // console.log(promiseEstados);
}

// // No logro hacer el callback :((()))
// mostrar(
//     (mensaje) => {console.log(mensaje);},
//     (value) => console.log(value)
//     );

const resultado = estados.filter(value => value.idPais == 1)
    .map(value => {
        return value.nombre.toUpperCase();
    });

console.log('Arreglo con los estados de México en mayúsculas:');
console.log(resultado);