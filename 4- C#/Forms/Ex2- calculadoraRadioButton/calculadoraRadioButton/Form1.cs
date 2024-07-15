namespace calculadoraRadioButton
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void label4_Click(object sender, EventArgs e)
        {

        }



        private void btnSair_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            double opA = double.Parse(txtOpA.Text);
            double opB = double.Parse(txtOpB.Text);
            double resultado = 0;

            if (rdbAdicao.Checked)
            {
                resultado = opA + opB;
                txtExpressao.Text = opA + " + " + opB;
                txtResultado.Text = resultado.ToString();
            }
            else if (rdbSubtracao.Checked)
            {
                resultado = opA - opB;
                txtExpressao.Text = opA + " - " + opB;
                txtResultado.Text = resultado.ToString();
            }
            else if (rdbMultiplicacao.Checked)
            {
                resultado = opA * opB;
                txtExpressao.Text = opA + " * " + opB;
                txtResultado.Text = resultado.ToString();
            }
            else if (rdbDivisao.Checked)
            {
                resultado = opA / opB;
                txtExpressao.Text = opA + " / " + opB;
                txtResultado.Text = resultado.ToString();
            }
            else if (rdbResto.Checked)
            {
                resultado = opA % opB;
                txtExpressao.Text = opA + " % " + opB;
                txtResultado.Text = resultado.ToString();
            }
        }
    }
}