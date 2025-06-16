let nome = prompt("digite o primeiro nome:");
let idade1 = Number.parseInt(prompt("digite a idade:"));
 
let nome2 = prompt("digite o segundo nome:");
let idade2 = Number.parseInt(prompt("digite a idade da segunda pessoa:"));

let media = (idade1 + idade2) / 2;
let result = document.getElementById('resultado')
 
result.innerHTML = "Olá " + nome;