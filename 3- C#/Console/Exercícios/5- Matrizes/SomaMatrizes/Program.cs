Console.Write("Digite a quantidade de linhas das Matrizes: ");
int M = int.Parse(Console.ReadLine());

Console.Write("Digite a quantidade de colunas das Matrizes: ");
int N = int.Parse(Console.ReadLine());

// Declaração das matrizes A, B e C
int[,] matrizA = new int[M, N];
int[,] matrizB = new int[M, N];
int[,] matrizC = new int[M, N];

// Lê os valores da matriz A
Console.WriteLine("Digite os valores da matriz A:");
for (int i = 0; i < M; i++)
{
    for (int j = 0; j < N; j++)
    {
        Console.Write($"Elemento [{i},{j}]: ");
        matrizA[i, j] = int.Parse(Console.ReadLine());
    }
}

// Lê os valores da matriz B
Console.WriteLine("Digite os valores da matriz B:");
for (int i = 0; i < M; i++)
{
    for (int j = 0; j < N; j++)
    {
        Console.Write($"Elemento [{i},{j}]: ");
        matrizB[i, j] = int.Parse(Console.ReadLine());
    }
}

// Calcula a matriz C (soma dos elementos correspondentes)
for (int i = 0; i < M; i++)
{
    for (int j = 0; j < N; j++)
    {
        matrizC[i, j] = matrizA[i, j] + matrizB[i, j];
    }
}


// Imprime a matriz C
Console.WriteLine("MATRIZ SOMA:");
for (int i = 0; i < M; i++)
{
    for (int j = 0; j < N; j++)
    {
        Console.WriteLine(matrizC[i, j]);
    }
}
