// See https://aka.ms/new-console-template for more information

int N, i, j, negativo=0;

Console.Write("Quantas linhas/colunas vai ter a Matriz? ");
N = int.Parse(Console.ReadLine());

int[,] mat = new int[N, N];

for (i = 0; i < N; i++)
{
    for (j = 0; j < N; j++)
    {
        Console.Write($"Elemento [{i},{j}]: ");
        mat[i, j] = int.Parse(Console.ReadLine());
    }
}

Console.WriteLine();
Console.Write("Diagonal Principal: ");

for (i = 0; i < N; i++)
{
    for (j = 0; j < N; j++)
    {
        if (i == j)
        {
            Console.Write(mat[i, j] + " ");
        }

        if(mat[i,j] < 0)
        {
            negativo++;
        }
    }
}

Console.WriteLine($"Total de dados negativos: {negativo}");
