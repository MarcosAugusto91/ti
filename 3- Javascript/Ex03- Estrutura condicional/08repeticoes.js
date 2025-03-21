
//EX CRESCENTE

let n1 = 0;
let n2 = 0;

do{
    n1 = Number(window.prompt('Digite o primeiro número'));
    n2 = Number(window.prompt('Digite o segundo número'));

    total = n1 - n2;
    if(total < 0){
        alert(`${n1} e ${n2} estão em Ordem Crescente!`);
    }
    else if(total > 0){
        alert(`${n1} e ${n2} estão em Ordem Decrescente!`);
    }
    else { 
        alert('Os valores são iguais');
    }

} while(n1 != n2);

