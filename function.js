function add(numb1, numb2){
    return numb1 + numb2
}

function multiply (numb1, numb2){
    return numb1 * numb2
}

function divide(numb1, numb2){
    return numb1 / numb2
}

function subs (numb1, numb2){
    return numb1 - numb2
}

function calculator(numb1, numb2, operator){
    return operator(numb1, numb2)
}

console.log(calculator(5, 5, add))

