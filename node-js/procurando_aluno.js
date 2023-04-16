const alunos = ["Joao", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

const readlineSync = require('readline-sync'); //comando para ler entrada do usuario
let nome = readlineSync.question("INFORME O NOME DO ALUNO QUE DESEJA:\n");
nome = nome.toLowerCase(); //transforma em minusculo a string recebida para futura comparação

function exibeNomeNota(aluno){

    const [alunos, medias] = listaDeAlunosEMedias; // desestruturar array

    const indice = alunos.findIndex(aluno => aluno.toLowerCase() === nome); //busca o indice no array e atribui à variavel aluno
    //após comparação em minusculo com o recebido em nome

    if(indice > -1){
        const mediaAluno = listaDeAlunosEMedias[1][indice];
        console.log(`O aluno ${aluno} tem a média ${mediaAluno}.`);

    }
    else{
        console.log("ALUNO NÃO ENCONTRADO");
    }
}

exibeNomeNota(nome);

//O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.