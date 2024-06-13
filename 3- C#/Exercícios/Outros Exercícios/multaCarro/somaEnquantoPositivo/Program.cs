// See https://aka.ms/new-console-template for more information

using System.Runtime.Serialization;
string continua = "s";


while (continua == "s") {
    Console.Write("Digite a velocidade do veículo: ");
    double velocidade = double.Parse(Console.ReadLine());

    if (velocidade > 70)
    {
        Console.WriteLine("Multar Carro: Excesso de velocidade!");
        Console.Write("Deseja verificar outro veículo?");
        continua = Console.ReadLine();
        Console.WriteLine();
    }
    else {
        Console.WriteLine("Carro dentro da velocidade da via!");
        Console.Write("Deseja verificar outro veículo?");
        continua = Console.ReadLine();
        Console.WriteLine();
    }
}