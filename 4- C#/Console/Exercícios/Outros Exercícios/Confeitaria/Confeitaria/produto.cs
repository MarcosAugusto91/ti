using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Confeitaria
{
    public class Produto
    {
        public String[] nome = new string[1];
        public String[] sabor = new string[1];
        public String[] validade = new string[1];
        public Double[] preco = new double[1];
        public Double[] custo = new double[1];
        public Double[] estoque = new double[1];
        public int remover { set; get; }
        public int codigoSelecionado { set; get; }
        public double acrescimo { set; get; }
        public double decrescimo { set; get; }

        public string ReceberNome()
        {
            Console.Write("Digite o nome do produto: ");
            nome[nome.Length - 1] = Console.ReadLine();
            return nome[nome.Length - 1];
        }
        public string ReceberSabor()
        {
            Console.Write("Digite o sabor do produto: ");
            sabor[sabor.Length - 1] = Console.ReadLine();
            return sabor[sabor.Length - 1];
        }

        public string ReceberValidade()
        {
            Console.Write("Digite a validade do produto: ");
            validade[validade.Length - 1] = Console.ReadLine();
            return validade[validade.Length - 1];
        }

        public Double ReceberPreco()
        {
            Console.Write("Digite o preço do produto: ");
            preco[preco.Length - 1] = Convert.ToDouble(Console.ReadLine());
            return preco[preco.Length - 1];
        }

        public Double ReceberCusto()
        {
            Console.Write("Digite o custo do produto: ");
            custo[custo.Length - 1] = Convert.ToDouble(Console.ReadLine());
            return custo[custo.Length - 1];
        }

        public Double ReceberEstoque()
        {
            Console.Write("Digite a quantidade em estoque do produto: ");
            estoque[estoque.Length - 1] = Convert.ToDouble(Console.ReadLine());
            return estoque[estoque.Length - 1];
        }

        public void AdicionarProduto(Produto produto)
        {
            //Criando um array com tamanho maior
            string[] nomenovo = new string[nome.Length + 1];
            string[] sabornovo = new string[nome.Length + 1];
            string[] validadenovo = new string[nome.Length + 1];
            double[] preconovo = new double[nome.Length + 1];
            double[] custonovo = new double[nome.Length + 1];
            double[] estoquenovo = new double[nome.Length + 1];

            //Copiando os valores para o novo array
            for (int i = 0; i < nome.Length; i++)
            {
                nomenovo[i] = (nome[i]);
                sabornovo[i] = (sabor[i]);
                validadenovo[i] = (validade[i]);
                preconovo[i] = (preco[i]);
                custonovo[i] = (custo[i]);
                estoquenovo[i] = (estoque[i]);
            }

            //adicionando novo produto no final do novo array
            nomenovo[nomenovo.Length - 1] = nome[nome.Length - 1];
            sabornovo[sabornovo.Length - 1] = sabor[sabor.Length - 1];
            validadenovo[validadenovo.Length - 1] = validade[validade.Length - 1];
            preconovo[preconovo.Length - 1] = preco[preco.Length - 1];
            custonovo[custonovo.Length - 1] = custo[custo.Length - 1];
            estoquenovo[estoquenovo.Length - 1] = estoque[estoque.Length - 1];

            //substituindo o array antigo pelo novo
            nome = nomenovo;
            sabor = sabornovo;
            validade = validadenovo;
            preco = preconovo;
            custo = custonovo;
            estoque = estoquenovo;

            /* for(int i = 0;i < nome.Length-1; i++)
             {
                 Console.WriteLine(nome[i]);
                 Console.WriteLine(sabor[i]);
                 Console.WriteLine(validade[i]);
                 Console.WriteLine(preco[i]);
                 Console.WriteLine(custo[i]);
                 Console.WriteLine(estoque[i]);
             }*/
        }
        public void RemoverProduto(Produto produto)
        {
            nome[remover] = "Produto Excluído";
            sabor[remover] = "Produto Excluído";
            validade[remover] = "Produto Excluído";
            preco[remover] = 0.00;
            custo[remover] = 0.00;
            estoque[remover] = 0.00;

            Console.WriteLine("Deseja confirmar a exclusão? (S/N)");
            string confirmacao = Console.ReadLine();

            if (confirmacao == "S" || confirmacao == "s")
            {
                Console.WriteLine("Produto removido com sucesso!");
                Console.WriteLine();
            }
            else
            {
                Console.WriteLine();
            }
        }

        public void AdicionarEstoque(Produto produto)
        {
            estoque[codigoSelecionado] = estoque[codigoSelecionado] + acrescimo;
            Console.WriteLine("Estoque adicionado com Sucesso!");
        }
        public void RemoverEstoque(Produto produto)
        {
            estoque[codigoSelecionado] = estoque[codigoSelecionado] - decrescimo;
            Console.WriteLine("Estoque removido com Sucesso!");
        }
    }
}