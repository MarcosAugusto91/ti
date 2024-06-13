// See https://aka.ms/new-console-template for more information

using System.Runtime.Serialization;

int num = 0;
int total = 0;

while (num >= 0)
{
    total = total + num;
    Console.WriteLine("Digite um número: ");
    num = int.Parse(Console.ReadLine());
}

Console.Write("Total dos números positivos somados: " + total);