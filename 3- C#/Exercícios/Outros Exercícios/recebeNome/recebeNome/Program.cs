// See https://aka.ms/new-console-template for more information
using System.ComponentModel.Design;

string nome = "";
string reposta = "";

Console.Write("Digite seu nome: ");
nome = Console.ReadLine();

Console.WriteLine("Olá " + nome + ", tudo bem?");
reposta = Console.ReadLine();

if (reposta == "sim" || reposta == "s")
    {
        Console.WriteLine("Que bom! Nós do sistema ficamos felizes!");
    }
    else 
    {
        Console.WriteLine("Que pena! Esperamos que melhore...");
    }
