namespace Calculadora_de_Áreas
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        string expressao;
        int selecao = 0;
        double resultado, op1, op2, op3 = 0;

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void label1_Click_1(object sender, EventArgs e)
        {

        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            lblexpressao.Text = "";
            expressao = "";

            switch (selecao)
            {
                case 0: //quadrado
                    expressao = expressao + txt2.Text + " * " + txt2.Text;
                    op1 = double.Parse(txt2.Text);
                    resultado = op1 * op1;
                    lblresultado.Text = resultado.ToString();
                    resultado = Math.Round(resultado, 2);
                    lblresultado.Visible = true;
                    lblexpressao.Text = expressao;
                    lblexpressao.Visible = true;
                    txt2.Focus();
                    break;

                case 1: //retangulo
                    expressao = expressao + txt1.Text + " * " + txt2.Text;
                    op1 = double.Parse(txt1.Text);
                    op2 = double.Parse(txt2.Text);
                    resultado = op1 * op2;
                    resultado = Math.Round(resultado, 2);
                    lblresultado.Text = resultado.ToString();
                    lblresultado.Visible = true;
                    lblexpressao.Text = expressao;
                    lblexpressao.Visible = true;
                    txt1.Focus();
                    break;

                case 2: //triangulo
                    expressao = "(" + txt1.Text + " * " + txt2.Text + ") / 2";
                    op1 = double.Parse(txt1.Text);
                    op2 = double.Parse(txt2.Text);
                    resultado = (op1 * op2) / 2;
                    resultado = Math.Round(resultado, 2);
                    lblresultado.Text = resultado.ToString();
                    lblresultado.Visible = true;
                    lblexpressao.Text = expressao;
                    lblexpressao.Visible = true;
                    txt1.Focus();
                    break;

                case 3: //circulo
                    expressao = "PI * (" + txt2.Text + " * " + txt2.Text + ")";
                    op1 = double.Parse(txt2.Text);
                    resultado = 3.1416 * (op1 * op1);
                    resultado = Math.Round(resultado, 2);
                    lblresultado.Text = resultado.ToString();
                    lblresultado.Visible = true;
                    lblexpressao.Text = expressao;
                    lblexpressao.Visible = true;
                    txt2.Focus();
                    break;

                case 4: //trapezio
                    expressao = "((" + txt1.Text + " + " + txt2.Text + ") * " + txt3.Text + ") / 2";
                    op1 = double.Parse(txt1.Text);
                    op2 = double.Parse(txt2.Text);
                    op3 = double.Parse(txt3.Text);
                    resultado = ((op1 + op2) * op3) / 2;
                    resultado = Math.Round(resultado, 2);
                    lblresultado.Text = resultado.ToString();
                    lblresultado.Visible = true;
                    lblexpressao.Text = expressao;
                    lblexpressao.Visible = true;
                    txt1.Focus();
                    break;
            }

            txt1.Text = "";
            txt2.Text = "";
            txt3.Text = "";

        }

        private void rdbquadrado_CheckedChanged(object sender, EventArgs e)
        {
            imgarea.Image = Image.FromFile(@"C:\Users\marcos.aazevedo3\Documents\GitHub\Logica-e-Linguagens\4- C#\Forms\Ex4- CalculadoraDeAreas\quadrado.png");
            imgarea.BackgroundImageLayout = ImageLayout.Zoom;
            BackColor = Color.SeaGreen;
            lblformula.Text = "L x L";
            lblformula.Visible = true;
            selecao = 0;
            lbl1.Visible = false;
            lbl3.Visible = false;
            txt1.Visible = false;
            txt3.Visible = false;
            lblresultado.Visible = false;
            lblexpressao.Visible = false;
            txt1.Text = "";
            txt2.Text = "";
            txt3.Text = "";
            lbl2.Text = "Lado (L):";
            txt2.Focus();
        }

        private void rdbretangulo_CheckedChanged(object sender, EventArgs e)
        {
            imgarea.Image = Image.FromFile(@"C:\Users\marcos.aazevedo3\Documents\GitHub\Logica-e-Linguagens\4- C#\Forms\Ex4- CalculadoraDeAreas\retangulo.png");
            BackColor = Color.LightGray;
            lblformula.Text = "A x L";
            lblformula.Visible = true;
            selecao = 1;
            lbl1.Visible = true;
            lbl3.Visible = false;
            txt1.Visible = true;
            txt3.Visible = false;
            lblresultado.Visible = false;
            lblexpressao.Visible = false;
            txt1.Text = "";
            txt2.Text = "";
            txt3.Text = "";
            lbl1.Text = "Lado (a):";
            lbl2.Text = "Lado (b):";
            txt1.Focus();
        }

        private void rdbtriangulo_CheckedChanged(object sender, EventArgs e)
        {
            imgarea.Image = Image.FromFile(@"C:\Users\marcos.aazevedo3\Documents\GitHub\Logica-e-Linguagens\4- C#\Forms\Ex4- CalculadoraDeAreas\triangulo.png");
            BackColor = Color.SeaGreen;
            lblformula.Text = "(B x h) / 2";
            lblformula.Visible = true;
            selecao = 2;
            lbl1.Visible = true;
            lbl3.Visible = false;
            txt1.Visible = true;
            txt3.Visible = false;
            lblresultado.Visible = false;
            lblexpressao.Visible = false;
            txt1.Text = "";
            txt2.Text = "";
            txt3.Text = "";
            lbl1.Text = "Base (b):";
            lbl2.Text = "Altura (h):";
            txt1.Focus();
        }

        private void radioButton4_CheckedChanged(object sender, EventArgs e)
        {
            imgarea.Image = Image.FromFile(@"C:\Users\marcos.aazevedo3\Documents\GitHub\Logica-e-Linguagens\4- C#\Forms\Ex4- CalculadoraDeAreas\circulo.png");
            BackColor = Color.LightYellow;
            lblformula.Text = "Pi * r²";
            lblformula.Visible = true;
            selecao = 3;
            lbl1.Visible = false;
            lbl3.Visible = false;
            txt1.Visible = false;
            txt3.Visible = false;
            lblresultado.Visible = false;
            lblexpressao.Visible = false;
            txt1.Text = "";
            txt2.Text = "";
            txt3.Text = "";
            lbl2.Text = "Raio (r):";
            txt2.Focus();
        }

        private void rdbtrapezio_CheckedChanged(object sender, EventArgs e)
        {
            imgarea.Image = Image.FromFile(@"C:\Users\marcos.aazevedo3\Documents\GitHub\Logica-e-Linguagens\4- C#\Forms\Ex4- CalculadoraDeAreas\trapezio.png");
            BackColor = Color.LightGray;
            lblformula.Text = "((B * b) * h) / 2";
            lblformula.Visible = true;
            selecao = 4;
            lbl1.Visible = true;
            lbl3.Visible = true;
            txt1.Visible = true;
            txt3.Visible = true;
            lblresultado.Visible = false;
            lblexpressao.Visible = false;
            txt1.Text = "";
            txt2.Text = "";
            txt3.Text = "";
            lbl1.Text = "Base (B):";
            lbl2.Text = "Base (b):";
            lbl3.Text = "Altura (h):";
            txt1.Focus();
        }
    }
}