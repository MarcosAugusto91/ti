// See https://aka.ms/new-console-template for more information

int M, N, i, j;

Console.Write("Quantas linhas vai ter a Matriz? ");
M= int.Parse(Console.ReadLine());

Console.Write("Quantas Colunas vai ter a Matriz? ");
N= int.Parse(Console.ReadLine());

int[,] mat = new int[M,N];

for (i = 0; i < M; i++)
{
    for(j = 0; j < N; j++)
    {
        Console.Write($"Elemento [{i},{j}]: ");
        mat[i,j] = int.Parse(Console.ReadLine());
    }
}

Console.WriteLine();
Console.WriteLine("Matriz Digitada: ");

for (i = 0; i < M; i++)
{
    for (j = 0; j < N; j++)
    {
        Console.Write(mat[i, j] + " ");
    }
    Console.WriteLine();
}