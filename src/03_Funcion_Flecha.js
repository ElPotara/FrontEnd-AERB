const obtenerInfo = (name = 'Angel', apellido = 'Rosales') => `${name} ${apellido}`;       
const sum = (a = 0, b = 0) => a + b;
const info = obtenerInfo('Eduardo', 'Banda');

console.log(info)
console.log(sum())
console.log(sum(20,30))

