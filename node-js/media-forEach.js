const notas = [10, 6.5, 8, 5];
let somaNotas=0;
notas.forEach(function(nota){
    somaNotas += nota;
});

media = somaNotas/notas.length;
console.log(`A média das notas foi: ${media}.`);