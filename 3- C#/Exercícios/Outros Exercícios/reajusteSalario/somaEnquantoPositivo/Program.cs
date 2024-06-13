// See https://aka.ms/new-console-template for more information

using System.Runtime.Serialization;

double salario = 0;
double reajuste = 17.5;

Console.Write("Digite seu Salário:");
salario = double.Parse(Console.ReadLine());
Console.WriteLine("Será aplicado o reajuste de 17,5%");
Console.WriteLine("Carregando....................");

salario = salario + (salario * (reajuste / 100));

Console.Write("Salário Reajustado: R${0:N2}", salario);