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
            imgarea.Image = Image.FromFile(@"C:\Users\marcos.aazevedo3\source\repos\Ex4- CalculadoraDeAreas\Calculadora de Áreas\Resources\quadrado.png");
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
            lbldescricaoformula.ForeColor = Color.White;
            lbltitulo.ForeColor = Color.White;
            label4.ForeColor = Color.White;
            label5.ForeColor = Color.White;
            lblformula.ForeColor = Color.White;
            lbl1.ForeColor = Color.White;
            lbl2.ForeColor = Color.White;
            lbl3.ForeColor = Color.White;
            lblresultado.ForeColor = Color.White;
            lblexpressao.ForeColor = Color.White;
            btncalcular.BackColor = Color.DarkSeaGreen;
            btncalcular.ForeColor = Color.DarkGreen;
            rdbquadrado.ForeColor = Color.White;
            rdbcirculo.ForeColor = Color.White;
            rdbretangulo.ForeColor = Color.White;
            rdbtrapezio.ForeColor = Color.White;
            rdbtriangulo.ForeColor = Color.White;
            txt1.Text = "";
            txt2.Text = "";
            txt3.Text = "";
            lbl2.Text = "Lado (L):";
            txt2.Location = new Point(145, 274);
            lbl2.Location = new Point(172, 256);
            txt2.Focus();
        }

        private void rdbretangulo_CheckedChanged(object sender, EventArgs e)
        {
            imgarea.Image = Image.FromFile(@"C:\Users\marcos.aazevedo3\source\repos\Ex4- CalculadoraDeAreas\Calculadora de Áreas\Resources\retangulo.png");
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
            lbldescricaoformula.ForeColor = Color.Black;
            lbltitulo.ForeColor = Color.Black;
            label4.ForeColor = Color.Black;
            label5.ForeColor = Color.Black;
            lblformula.ForeColor = Color.Black;
            lbl1.ForeColor = Color.Black;
            lbl2.ForeColor = Color.Black;
            lbl3.ForeColor = Color.Black;
            lblresultado.ForeColor = Color.Black;
            lblexpressao.ForeColor = Color.Black;
            btncalcular.BackColor = Color.DarkGray;
            btncalcular.ForeColor = Color.Black;
            rdbquadrado.ForeColor = Color.Black;
            rdbcirculo.ForeColor = Color.Black;
            rdbretangulo.ForeColor = Color.Black;
            rdbtrapezio.ForeColor = Color.Black;
            rdbtriangulo.ForeColor = Color.Black;
            txt1.Text = "";
            txt2.Text = "";
            txt3.Text = "";
            lbl1.Text = "Lado (a):";
            lbl2.Text = "Lado (b):";
            txt1.Location = new Point(67, 274);
            txt2.Location = new Point(219, 274);
            lbl1.Location = new Point(94, 256);
            lbl2.Location = new Point(246, 256);
            txt1.Focus();
        }

        private void rdbtriangulo_CheckedChanged(object sender, EventArgs e)
        {
            imgarea.Image = Image.FromFile(@"C:\Users\marcos.aazevedo3\source\repos\Ex4- CalculadoraDeAreas\Calculadora de Áreas\Resources\triangulo.png");
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
            lbldescricaoformula.ForeColor = Color.White;
            lbltitulo.ForeColor = Color.White;
            label4.ForeColor = Color.White;
            label5.ForeColor = Color.White;
            lblformula.ForeColor = Color.White;
            lbl1.ForeColor = Color.White;
            lbl2.ForeColor = Color.White;
            lbl3.ForeColor = Color.White;
            lblresultado.ForeColor = Color.White;
            lblexpressao.ForeColor = Color.White;
            btncalcular.BackColor = Color.DarkSeaGreen;
            btncalcular.ForeColor = Color.DarkGreen;
            rdbquadrado.ForeColor = Color.White;
            rdbcirculo.ForeColor = Color.White;
            rdbretangulo.ForeColor = Color.White;
            rdbtrapezio.ForeColor = Color.White;
            rdbtriangulo.ForeColor = Color.White;
            txt1.Text = "";
            txt2.Text = "";
            txt3.Text = "";
            lbl1.Text = "Base (b):";
            lbl2.Text = "Altura (h):";
            txt1.Location = new Point(67, 274);
            txt2.Location = new Point(219, 274);
            lbl1.Location = new Point(94, 256);
            lbl2.Location = new Point(246, 256);
            txt1.Focus();
        }

        private void radioButton4_CheckedChanged(object sender, EventArgs e)
        {
            imgarea.Image = Image.FromFile(@"C:\Users\marcos.aazevedo3\source\repos\Ex4- CalculadoraDeAreas\Calculadora de Áreas\Resources\circulo.png");
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
            lbldescricaoformula.ForeColor = Color.Black;
            lbltitulo.ForeColor = Color.Black;
            label4.ForeColor = Color.Black;
            label5.ForeColor = Color.Black;
            lblformula.ForeColor = Color.Black;
            lbl1.ForeColor = Color.Black;
            lbl2.ForeColor = Color.Black;
            lbl3.ForeColor = Color.Black;
            lblresultado.ForeColor = Color.Black;
            lblexpressao.ForeColor = Color.Black;
            btncalcular.BackColor = Color.DarkGray;
            btncalcular.ForeColor = Color.Black;
            rdbquadrado.ForeColor = Color.Black;
            rdbcirculo.ForeColor = Color.Black;
            rdbretangulo.ForeColor = Color.Black;
            rdbtrapezio.ForeColor = Color.Black;
            rdbtriangulo.ForeColor = Color.Black;
            txt1.Text = "";
            txt2.Text = "";
            txt3.Text = "";
            lbl2.Text = "Raio (r):";
            txt2.Location = new Point(145, 274);
            lbl2.Location = new Point(172, 256);
            txt2.Focus();
        }

        private void rdbtrapezio_CheckedChanged(object sender, EventArgs e)
        {
            imgarea.Image = Image.FromFile(@"C:\Users\marcos.aazevedo3\source\repos\Ex4- CalculadoraDeAreas\Calculadora de Áreas\Resources\trapezio.png");
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
            lbldescricaoformula.ForeColor = Color.Black;
            lbltitulo.ForeColor = Color.Black;
            label4.ForeColor = Color.Black;
            label5.ForeColor = Color.Black;
            lblformula.ForeColor = Color.Black;
            lbl1.ForeColor = Color.Black;
            lbl2.ForeColor = Color.Black;
            lbl3.ForeColor = Color.Black;
            lblresultado.ForeColor = Color.Black;
            lblexpressao.ForeColor = Color.Black;
            btncalcular.BackColor = Color.DarkGray;
            btncalcular.ForeColor = Color.Black;
            rdbquadrado.ForeColor = Color.Black;
            rdbcirculo.ForeColor = Color.Black;
            rdbretangulo.ForeColor = Color.Black;
            rdbtrapezio.ForeColor = Color.Black;
            rdbtriangulo.ForeColor = Color.Black;
            txt1.Text = "";
            txt2.Text = "";
            txt3.Text = "";
            lbl1.Text = "Base (B):";
            lbl2.Text = "Base (b):";
            lbl3.Text = "Altura (h):";
            txt1.Location = new Point(16, 274);
            txt2.Location = new Point(145, 274);
            txt3.Location = new Point(272, 274);
            lbl1.Location = new Point(43, 256);
            lbl2.Location = new Point(172, 256);
            lbl3.Location = new Point(298, 256);
            txt1.Focus();
        }
    }
}