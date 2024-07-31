namespace calculadoraTradicional
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        string operacao;
        double a = 0, b = 0, resultado = 0;


        public void button10_Click(object sender, EventArgs e)
        {
            txtResultado.Text = txtResultado.Text + "1";
        }

        public void button16_Click(object sender, EventArgs e)
        {
            txtResultado.Text = "";
            a = 0;
            b = 0;
            resultado = 0;
        }

        public void button4_Click(object sender, EventArgs e)
        {
            a = int.Parse(txtResultado.Text);
            txtResultado.Text = "";
            operacao = "soma";
        }

        public void button11_Click(object sender, EventArgs e)
        {
            txtResultado.Text = txtResultado.Text + "2";
        }

        public void Form1_Load(object sender, EventArgs e)
        {

        }

        public void btn3_Click(object sender, EventArgs e)
        {
            txtResultado.Text = txtResultado.Text + "3";
        }

        public void btn4_Click(object sender, EventArgs e)
        {
            txtResultado.Text = txtResultado.Text + "4";
        }

        public void btn5_Click(object sender, EventArgs e)
        {
            txtResultado.Text = txtResultado.Text + "5";
        }

        public void btn6_Click(object sender, EventArgs e)
        {
            txtResultado.Text = txtResultado.Text + "6";
        }

        public void btn7_Click(object sender, EventArgs e)
        {
            txtResultado.Text = txtResultado.Text + "7";
        }

        public void btn8_Click(object sender, EventArgs e)
        {
            txtResultado.Text = txtResultado.Text + "8";
        }

        public void btn9_Click(object sender, EventArgs e)
        {
            txtResultado.Text = txtResultado.Text + "9";
        }

        public void btn0_Click(object sender, EventArgs e)
        {
            txtResultado.Text = txtResultado.Text + "0";
        }

        public void btnSub_Click(object sender, EventArgs e)
        {
            a = int.Parse(txtResultado.Text);
            txtResultado.Text = "";
            operacao = "sub";
        }

        public void btnIgual_Click(object sender, EventArgs e)
        {
            if (txtResultado.Text == "")
            {
                txtResultado.Text = "0";
            }

            b = int.Parse(txtResultado.Text);
                if (operacao == "soma")
                {
                    resultado = a + b;
                    txtResultado.Text = resultado.ToString();
                }
                else if (operacao == "sub")
                {
                    resultado = a - b;
                    txtResultado.Text = resultado.ToString();
                }
                else if (operacao == "multi")
                {
                    resultado = a * b;
                    txtResultado.Text = resultado.ToString();
                }
                else if (operacao == "div")
                {
                    resultado = a / b;
                    txtResultado.Text = resultado.ToString();
                }
        }

        private void btnMulti_Click(object sender, EventArgs e)
        {
            a = int.Parse(txtResultado.Text);
            txtResultado.Text = "";
            operacao = "multi";
        }

        private void btnDiv_Click(object sender, EventArgs e)
        {
            a = int.Parse(txtResultado.Text);
            txtResultado.Text = "";
            operacao = "div";
        }
    }
}