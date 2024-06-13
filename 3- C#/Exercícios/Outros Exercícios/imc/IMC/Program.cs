// See https://aka.ms/new-console-template for more information
using System.Xml.Serialization;

double peso;
double altura;
double imc;
string nome;

Console.Write("Digite seu Nome: ");
nome = Console.ReadLine();

Console.Write("Olá " + nome + ", digite seu peso: ");
peso = double.Parse(Console.ReadLine());
Console.Write("Digite sua altura: ");
altura = double.Parse(Console.ReadLine());

imc = peso / (altura * altura);

if (imc < 18) {
    Console.WriteLine("Seu imc é: " + imc);
    Console.WriteLine("Cuidado, você está abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9) {
    Console.WriteLine("Seu imc é: " + imc);
    Console.WriteLine("Parabéns, você está no peso Normal");
} else if (imc >= 25 && imc <= 29.99){
    Console.WriteLine("Seu imc é: " + imc);
    Console.WriteLine("Cuidado, você está com sobrepeso");
} else if (imc >= 30 && imc <= 39.99){
    Console.WriteLine("Seu imc é: " + imc);
    Console.WriteLine("Você está com obesidade, procure um Médico!");
} else {
    Console.WriteLine("Seu imc é: " + imc);
    Console.WriteLine("Você está com obesidade grave, procure um médico urgente!");
}
