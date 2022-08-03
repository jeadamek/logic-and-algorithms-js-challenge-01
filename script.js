const numberOne = Number(prompt("Digite o primeiro número:"))
const numberTwo = Number(prompt("Digite o segundo número:"))


const sumResult = numberOne + numberTwo
const subResult = numberOne - numberTwo
const multResult = numberOne * numberTwo
const divResult = numberOne / numberTwo
const restDivResult = numberOne % numberTwo

alert(`A soma dos dois números é: ${sumResult}`)
alert(`A subtração dos dois números é: ${subResult}`)
alert(`A multiplicação dos dois números é: ${multResult}`)
alert(`A divisão dos dois números é: ${divResult}`)
alert(`O resto da divisão dos dois números é: ${restDivResult}`)


if(sumResult % 2 == 0){
  alert(`A soma dos dois números é par: ${sumResult}`)
} else {
  alert(`A soma dos dois números é ímpar: ${sumResult}`)
}

if(numberOne == numberTwo){
  alert("Os dois números inseridos são iguais.")
} else{
  alert("Os dois números inseridos são diferentes.")
}