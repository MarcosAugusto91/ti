// See https://aka.ms/new-console-template for more information

int M, N, i, j;

Console.Write("Digite a quantidade de linhas que deseja: ");
M = int.Parse(Console.ReadLine());

Console.Write("Digite a quantidade de colunas que deseja: ");
N = int.Parse(Console.ReadLine());

int[,] matriz = new int[M, N];
int[] totais = new int[M];

for (i = 0; i < M; i++)
{
    for (j = 0; j < N; j++)
    {
        Console.Write($"Elemento [{i},{j}]");
        matriz[i,j] = int.Parse(Console.ReadLine());
        totais[i] = totais[i] + matriz[i,j];
    }

}

Console.WriteLine();

for (i = 0; i < M; i++)
{
    Console.Write($"Total linha {i}: " + totais[i]);
    Console.WriteLine();
}