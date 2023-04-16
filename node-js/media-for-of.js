const notas = [10, 6.5, 8, 5];
let somaNotas=0;
for (let nota of notas){
    somaNotas += nota;
}

media = somaNotas/notas.length;

console.log(media);