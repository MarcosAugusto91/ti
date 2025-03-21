
//EX TABUADA

let n = prompt('Digite o número que deseja a tabuada:');

for (x = 1; x <= 100; x++) {

    let resultado = x * n;
    console.log(`${n} * ${x} = ${resultado};`);
}