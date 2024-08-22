namespace Mercado
{
    public partial class Form1 : Form
    {
        int[] codigoProduto = { 1, 2, 3, 4, 5, 6 };
        string[] produtos = { "Brownie", "Bites", "Brownieflix", "Brigabrownies", "Bombom de Brownie", "Casquinhas de Brownie" };
        double[] precos = { 6.50, 15.99, 13.50, 3.99, 7.99, 4.99 };
        double precoItem = 0, quantidadeItem = 0, totalItem = 0, total = 0;
        string[] linhas = new string[3];
        string senha = "123456";

        public Form1()
        {
            InitializeComponent();
            BackColor = Color.DimGray;

            for (int i = 0; i < codigoProduto.Length; i++)
            {
                cmbCodigo.Items.Add(codigoProduto[i]);
            }

            groupBox2.Enabled = false;
            groupBox3.Enabled = false;
            groupBox4.Enabled = false;
            groupBox5.Enabled = false;
            mktNotaFiscal.Enabled = false;

        }

        private void cmbCodigo_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (cmbCodigo.SelectedIndex != -1)
            {
                txtDescricao.Text = produtos[cmbCodigo.SelectedIndex];
                txtPreco.Text = Convert.ToString(precos[cmbCodigo.SelectedIndex]);
                txtQtd.Focus();
            }
        }

        private void btnAdicionar_Click(object sender, EventArgs e)
        {
            if ((cmbCodigo.Text == "") || (txtDescricao.Text == "") || (txtQtd.Text == "") || (txtPreco.Text == ""))
            {
                MessageBox.Show("Dados incompletos");
                txtQtd.Focus();
            }
            else
            {
                groupBox3.Enabled = true;
                groupBox4.Enabled = true;
                lstPedido.Items.Add(cmbCodigo.SelectedItem + "|" + txtDescricao.Text + "|" + txtPreco.Text + "|" + txtQtd.Text);
                quantidadeItem = Double.Parse(txtQtd.Text);
                precoItem = Convert.ToDouble(txtPreco.Text);
                totalItem = precoItem * quantidadeItem;
                total += totalItem;
                Math.Round(total, 2);
                lblTotal.Text = Convert.ToString(total);

                cmbCodigo.SelectedIndex = -1;
                txtDescricao.Text = "";
                txtPreco.Text = "";
                txtQtd.Clear();
                cmbCodigo.Focus();
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            groupBox1.Enabled = false;
            groupBox2.Enabled = true;
            cmbCodigo.Focus();
        }

        private void btnPagamento_Click(object sender, EventArgs e)
        {
            groupBox5.Enabled = true;
            txtRecebido.Enabled = false;
        }

        private void btnFinalizar_Click(object sender, EventArgs e)
        {
            if ((rdbDebito.Checked) || (rdbCredito.Checked) || (rdbPix.Checked))
            {
                MessageBox.Show("Pagamento efetuado com Sucesso, compra Finalizada!", "Fechar Venda");
            }
            else
            {
                if (txtRecebido.Text != "")
                {
                    double recebido = Convert.ToDouble(txtRecebido.Text);
                    if (recebido < total)
                    {
                        MessageBox.Show("Valor Insuficiente!");
                        txtRecebido.Text = "";
                        txtRecebido.Focus();

                    }
                    else if (recebido == total)
                    {
                        MessageBox.Show("Pagamento efetuado com Sucesso, compra Finalizada!", "Fechar Venda");
                       
                        groupBox1.Enabled = true;
                        groupBox2.Enabled = false;
                        groupBox3.Enabled = false;
                        groupBox4.Enabled = false;
                        groupBox5.Enabled = false;
                        chbNotaFiscal.Checked = false;
                        mktNotaFiscal.Enabled = false;
                        lblTotal.Text = "0,00";
                        lstPedido.Items.Clear();
                        mktNotaFiscal.Clear();
                        lblTroco.Text = "";
                        txtRecebido.Text = string.Empty;
                        txtRecebido.Enabled = false;
                    }
                    else
                    {
                        double troco = recebido - total;
                        Math.Round(troco, 2);
                        lblTroco.Text = troco.ToString();
                        MessageBox.Show("Entregue o troco!", "Venda Finalizada!");

                        groupBox1.Enabled = true;
                        groupBox2.Enabled = false;
                        groupBox3.Enabled = false;
                        groupBox4.Enabled = false;
                        groupBox5.Enabled = false;
                        chbNotaFiscal.Checked = false;
                        mktNotaFiscal.Enabled = false;
                        lblTotal.Text = "0,00";
                        lstPedido.Items.Clear();
                        mktNotaFiscal.Clear();
                        lblTroco.Text = "";
                        txtRecebido.Text = string.Empty;
                        txtRecebido.Enabled = false;
                    }
                }
            }


        }

        private void chbNotaFiscal_CheckedChanged(object sender, EventArgs e)
        {
            if (chbNotaFiscal.Checked)
            {
                mktNotaFiscal.Enabled = true;
                mktNotaFiscal.Focus();
            }
        }

        private void btnExcluir_Click(object sender, EventArgs e)
        {
            btnConfExclusao.Enabled = true;
            txtSenha.Enabled = true;
            txtSenha.Focus();

        }

        private void btnConfExclusao_Click(object sender, EventArgs e)
        {
            if (lstPedido.SelectedIndex != -1)
            {
                if (txtSenha.Text == senha)
                {
                    txtSenha.Text = "";
                    linhas = lstPedido.Text.Split("|");
                    quantidadeItem = Convert.ToDouble(linhas[2]);
                    precoItem = Convert.ToDouble(linhas[3]);
                    totalItem = quantidadeItem * precoItem;
                    total -= totalItem;
                    lblTotal.Text = Convert.ToString(total);
                    lstPedido.Items.Remove(lstPedido.SelectedItem);
                    txtSenha.Enabled = false;
                    btnConfExclusao.Enabled = false;
                    cmbCodigo.Focus();
                }
            }
            else
            {
                MessageBox.Show("Escolha um item para excluir!", "Aviso");
                txtSenha.Text = "";
                lstPedido.Focus();
            }
        }

        private void txtRecebido_TextChanged(object sender, EventArgs e)
        {

        }

        private void rdbDinheiro_CheckedChanged(object sender, EventArgs e)
        {
            txtRecebido.Enabled = true;
            txtRecebido.Focus();
        }
    }
}
