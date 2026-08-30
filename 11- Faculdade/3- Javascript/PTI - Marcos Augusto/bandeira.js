window.onload = function() {
    // 1. Apresenta o elemento Canvas do HTML pelo ID
    const canvas = document.getElementById("myCanvas");
    
    // Verifica se o browser suporta a API de desenho 2D
    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext("2d");

        // Definição das posições e tamanho do retângulo da bandeira
        const x = 10;
        const y = 10;
        const largura = 320;
        const altura = 200;

        // 2. Desenha o fundo branco da bandeira
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(x, y, largura, altura);

        // 3. Desenha o contorno do retângulo da bandeira
        ctx.strokeStyle = "#333333";
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, largura, altura);

        // 4. Calcula o centro do retângulo para posicionar a bolinha vermelha
        const centroX = x + (largura / 2);
        const centroY = y + (altura / 2);
        const raio = 50;

        // 5. Desenha o círculo vermelho (Hinomaru)
        ctx.beginPath();
        ctx.arc(centroX, centroY, raio, 0, 2 * Math.PI, false);
        ctx.fillStyle = "#BC002D"; // Cor vermelha oficial do Japão
        ctx.fill();
    }
};