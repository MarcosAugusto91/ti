// See https://aka.ms/new-console-template for more information

int n;

Console.Write("Quantos números você vai digitar? ");
n = int.Parse(Console.ReadLine());

double[] vetor = new double[n];

for(int i = 0; i < n; i++)
{
    Console.Write("Digite um número: ");
    vetor[i] = double.Parse(Console.ReadLine());
}

for(int i = 0; i < n; i++)
{
    if (vetor[i] < 0) {
        Console.WriteLine("Posição " + i + ": " + vetor[i]);
    }
}