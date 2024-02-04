let N1 = document.getElementById("N1").value;
let Operation = document.getElementById("Operation").value;
let N2 = document.getElementById("N2").value;

N1 = parseInt(N1);
N2 = parseInt(N2);



function calcPlus(N1, N2){
    return N1 + N2
}

function calcMinus(N1, N2){
    return N1 - N2
}

function calcMultiply(N1, N2){
    return N1 * N2
}

function calcDiv(N1, N2){
    return N1 / N2
}



function mainFunction(Operation, N1, N2){
    if (Operation == "+"){
        result = calcPlus(N1, N2);
        console.log(result)
    }else if(Operation == "-"){
        result = calcMinus;
        console.log(result)
    }else if (Operation == "*"){
        result = calcMultiply;
        console.log(result)
    }else if(Operation == "/"){
        result = calcDiv;
        console.log(result)
    }
}
