// See https://aka.ms/new-console-template for more information

string[,] campo = new string[10, 10]; //matriz com posições dos elementos do campo
string[,] jogo = new string[10, 10];  //matriz que registra ações do jogador
int qtdLinhas = campo.GetLength(0);
int qtdColunas = campo.GetLength(1);

for (int l = 0; l < qtdLinhas; l++)
{
    for (int c = 0; c < qtdColunas; c++)
    {
        campo[l, c] = "0";
        jogo[l, c] = "-1";
    }
}
//Posicionamento aleatório da bandeira
Random gerador = new Random();
int linha = gerador.Next(qtdLinhas);
int coluna = gerador.Next(qtdColunas);
campo[linha, coluna] = "ß";

//Posicionamento aleatório das bombas
int bombasPosicionadas = 0;
do
{
    linha = gerador.Next(qtdLinhas);
    coluna = gerador.Next(qtdColunas);
    if (campo[linha, coluna] == "0")
    {
        campo[linha, coluna] = "*";
        bombasPosicionadas++;
    }
} while (bombasPosicionadas < 5);


bool fimJogo = false;
do
{
    for (int l = 0; l < qtdLinhas; l++)
    {
        for (int c = 0; c < qtdColunas; c++)
        {
            Console.Write(string.Format("{0} ", jogo[l, c]));
        }
        Console.Write(Environment.NewLine + Environment.NewLine);
    }
    Console.Write("Selecione uma linha [1-10]: ");
    linha = Convert.ToInt32(Console.ReadLine()) - 1;
    Console.Write("Selecione uma coluna [1-10]: ");
    coluna = Convert.ToInt32(Console.ReadLine()) - 1;
    switch (campo[linha, coluna])
    {
        case "0":
            jogo[linha, coluna] = " 0";
            Console.Write("Continue tentando.\n\n");
            break;
        case "*":
            jogo[linha, coluna] = "1";
            Console.Write("BOOOM. Você perdeu.\n\n");
            fimJogo = true;
            break;
        default:
            jogo[linha, coluna] = "ß";
            Console.Write("Parabéns. Você ganhou!\n\n");
            fimJogo = true;
            break;
    }
} while (!fimJogo);