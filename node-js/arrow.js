

//arrow 

// const apresentarArrow = nome => `meu npme é ${nome}`;
// const soma = (x1, x2) => x1 + x2;

// console.log(apresentarArrow("Guilherme"));
// console.log(soma(1,2));


//arrow com mais de 1 linha

const somaNum = (x1,x2) => {
    if (x1 >= 10 || x2 >= 10){
        return "somente nums de 1 a 9"
    }
    else {
        return x1 + x2;
    }
}

console.log(somaNum(1,2));