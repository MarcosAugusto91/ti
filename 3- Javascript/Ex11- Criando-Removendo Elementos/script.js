let corpo = document.getElementById('corpo');

const p = document.createElement('p');
const text = document.createTextNode('Este é um parágrafo.');
p.appendChild(text);
corpo.appendChild(p);

const h1 = document.createElement('h1');
const h1Texto = document.createTextNode('Título Principal');
h1.appendChild(h1Texto);

// Formas de adicionar o h1 ao corpo
// corpo.appendChild(h1);
// p.insertBefore(h1, text);
corpo.insertAdjacentElement('beforebegin', h1);
//corpo.insertAdjacentElement('beforeend', h1);

corpo.removeChild(p);