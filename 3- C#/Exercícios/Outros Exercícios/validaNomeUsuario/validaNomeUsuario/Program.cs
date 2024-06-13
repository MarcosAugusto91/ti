// See https://aka.ms/new-console-template for more information

using System.Security.Cryptography.X509Certificates;

string nome;
string senha;

Console.Write("Digite seu nome: ");
nome = Console.ReadLine();

Console.Write("Digite sua senha: ");
senha = Console.ReadLine();

if (nome == "Marcos" && senha == "123456"){
    Console.WriteLine("Usuário autenticado com Sucesso!"); }
else
{    Console.WriteLine("Dados inválidos!"); }

//Console.WriteLine("Olá " + nome);