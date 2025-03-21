let n1 = -1;
let n2 = -1;

while (n1 < 0 || n1 > 10){
   n1 = Number.parseFloat(prompt('Digite a primeira nota!'));
}

while (n2 < 0 || n2 > 10){
    n2 = Number.parseFloat(prompt('Digite a segunda nota!'));
 }

 let media = (n1 + n2) / 2;
 alert(`A média de ${n1} e ${n2} é ${media}`);