using System.Diagnostics.Eventing.Reader;

namespace CalculadoraDeIdade
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            lblResultado2.Visible = false;
        }

        private void btncalcular_Click(object sender, EventArgs e)
        {

            string nome = txtnome.Text;
            int idade = int.Parse(txtidade.Text);

            if (idade < 13)
            {
                lblPontos.BackColor = Color.Green;
                lblResultado2.Text = nome + " você é uma criança!";
                lblResultado2.Visible = true;
            }
            else if (idade < 18)
            {
                lblPontos.BackColor = Color.Yellow;
                lblResultado2.Text = nome + " você é jovem!";
                lblResultado2.Visible = true;
            }
            else if (idade < 60)
            {
                lblPontos.BackColor = Color.Black;
                lblResultado2.Text = nome + " você é Adulto!";
                lblResultado2.Visible = true;
            }
            else
            {
                lblPontos.BackColor = Color.White;
                lblResultado2.Text = nome + " você é Idoso!";
                lblResultado2.Visible = true;
            }

        }

        private void btnsair_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
    }
}