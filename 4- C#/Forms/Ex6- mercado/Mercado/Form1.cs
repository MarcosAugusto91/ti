namespace Mercado
{
    public partial class Form1 : Form
    {
        int[] codigoProduto = { 1, 2, 3, 4, 5, 6 };
        string[] produtos = { "Brownie", "Bites", "Brownieflix", "Brigabrownies", "Bombom de Brownie", "Casquinhas de Brownie" };
        double[] precos = { 6.00, 16.00, 13.50, 4.00, 8.00, 5.00 };

        public Form1()
        {
            InitializeComponent();
            BackColor = Color.DimGray;

            for (int i = 0; i < codigoProduto.Length; i++)
            {
                cmbCodigo.Items.Add(codigoProduto[i]);
            }
        }

        private void cmbCodigo_SelectedIndexChanged(object sender, EventArgs e)
        {
            txtDescricao.Text = produtos[cmbCodigo.SelectedIndex];
            txtPreco.Text = Convert.ToString(precos[cmbCodigo.SelectedIndex]);
        }
    }
}
  