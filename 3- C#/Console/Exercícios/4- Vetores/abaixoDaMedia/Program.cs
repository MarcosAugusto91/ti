// See https://aka.ms/new-console-template for more information

int n;
double media, total=0;
double[] abaixoMedia;

Console.Write("Quantos números deseja digitar: ");
n= int.Parse(Console.ReadLine());

double[] numeros = new double[n];

for (int i = 0; i < n; i++)
{
    Console.Write("Digite um número: ");
    numeros[i] = double.Parse(Console.ReadLine());
    total = (total + numeros[i]);
}

media = (total / n);
Console.WriteLine("Média: " + media);
Console.WriteLine();
Console.WriteLine("Números abaixo da média: ");

for (int i = 0;i < n; i++)
{
    if (numeros[i] < media) {

        Console.Write(numeros[i] + " ");
    }
}
Console.WriteLine();
