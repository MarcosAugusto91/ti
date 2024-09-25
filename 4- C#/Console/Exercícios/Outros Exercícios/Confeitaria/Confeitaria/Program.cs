// See https://aka.ms/new-console-template for more information

using Confeitaria;
using System.ComponentModel.Design;
using System.Runtime.CompilerServices;

int opcao;
Produto Produto = new Produto();

Console.WriteLine("Bem vindo a Ei! Brownie - Siga-nos no Instagram: @ei.brownie");
Console.WriteLine();
Console.WriteLine("Escolha a opção abaixo");
Console.WriteLine("[1]Novo Produto");
Console.WriteLine("[2]Listar Produto");
Console.WriteLine("[3]Remover Produto");
Console.WriteLine("[4]Entrada do estoque");
Console.WriteLine("[5]Saída do estoque");
Console.WriteLine("[0]Sair");
Console.Write("--> ");
opcao = Convert.ToInt32(Console.ReadLine());
Console.WriteLine();

while (opcao != 0) {

    switch (opcao) {
        case 1:
            Produto.nome[Produto.nome.Length-1] = Produto.ReceberNome();
            Produto.sabor[Produto.sabor.Length-1] = Produto.ReceberSabor();
            Produto.validade[Produto.validade.Length-1] = Produto.ReceberValidade();
            Produto.preco[Produto.preco.Length-1] = Produto.ReceberPreco();
            Produto.custo[Produto.custo.Length-1] = Produto.ReceberCusto();
            Produto.estoque[Produto.estoque.Length-1] = Produto.ReceberEstoque();
            Produto.AdicionarProduto(Produto);
            break;

        case 2: // Listar Produtos
            Console.WriteLine("Digite o produto desejado: ");
            for (int i = 0; i < Produto.nome.Length - 1; i++)
            {
                Console.WriteLine("[Código " + i + "]" + ": " + Produto.nome[i]);
            }
            Console.Write("--> ");
            int exibir = Convert.ToInt32(Console.ReadLine());
            while (exibir > (Produto.nome.Length-1))
            {
                Console.WriteLine("Produto inexistente, código disponível até o código: " + (Produto.nome.Length-2));
                Console.Write("Digite o produto desejado: ");
                exibir = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine();
            }
                Console.WriteLine();
                Console.WriteLine("Nome: " + Produto.nome[exibir]);
                Console.WriteLine("Sabor: " + Produto.sabor[exibir]);
                Console.WriteLine("Validade: " + Produto.validade[exibir]);
                Console.WriteLine("Preço: " + Produto.preco[exibir]);
                Console.WriteLine("Custo: " + Produto.custo[exibir]);
                Console.WriteLine("Estoque: " + Produto.estoque[exibir]);
                Console.WriteLine();
            break;

        case 3:
            Console.Write("Digite o código do produto que desejada remover: ");
            Console.WriteLine();
            for(int i = 0;i < Produto.nome.Length-1; i++)
                 {
                    Console.WriteLine("[Código "+ i + "]" + ": " + Produto.nome[i]);
                }
            Console.Write("--> ") ;
            Produto.remover = Convert.ToInt32(Console.ReadLine());
            Produto.RemoverProduto(Produto);
            break;

        case 4:
            Console.WriteLine("Digite o código do produto que desejada acrescentar o estoque: ");
            for (int i = 0; i < Produto.nome.Length - 1; i++)
                {
                    Console.WriteLine("[Código: " + i + "]" + ": " + Produto.nome[i]);
                }
            Console.Write("Produto: ");
            Produto.codigoSelecionado = Convert.ToInt32(Console.ReadLine());

            Console.Write("Digite a quantidade do produto que desejada acrescentar o estoque(unds): ");
            Produto.acrescimo = Convert.ToInt32(Console.ReadLine());
            Produto.AdicionarEstoque(Produto);
            break;

        case 5:
            Console.WriteLine("Digite o código do produto que desejada acrescentar o estoque: ");
            for (int i = 0; i < Produto.nome.Length - 1; i++)
            {
                Console.WriteLine("[Código: " + i + "]" + ": " + Produto.nome[i]);
            }
            Console.Write("Produto: ");
            Produto.codigoSelecionado = Convert.ToInt32(Console.ReadLine());

            Console.Write("Digite a quantidade do produto que desejada acrescentar o estoque(unds): ");
            Produto.decrescimo = Convert.ToInt32(Console.ReadLine());
            Produto.RemoverEstoque(Produto);
            break;
    }
            Console.WriteLine();
            Console.WriteLine("Escolha a opção abaixo");
            Console.WriteLine("[1]Novo Produto");
            Console.WriteLine("[2]Listar Produto");
            Console.WriteLine("[3]Remover Produto");
            Console.WriteLine("[4]Entrada do estoque");
            Console.WriteLine("[5]Saída do estoque");
            Console.WriteLine("[0]Sair");
            Console.Write("--> ");
            opcao = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine();
}

Console.WriteLine("Obrigado por utilizar nosso sistema, até a próxima!");
