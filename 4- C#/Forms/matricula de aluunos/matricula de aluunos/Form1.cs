namespace matricula_de_aluunos
{
    public partial class Form1 : Form
    {
        // Vari�vel para controlar se o ComboBox est� sendo limpo
        private bool isClearing = false;

        public Form1()
        {
            InitializeComponent();
        }

        private void btnSalv_Click(object sender, EventArgs e)
        {           

            // Verifica se o ComboBox de curso foi selecionado
            if (comboBox1.SelectedIndex == -1)
            {
                MessageBox.Show("Selecione um curso.", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            // Verifica se todos os campos de texto est�o preenchidos
            if (string.IsNullOrWhiteSpace(textBox1.Text) ||
                string.IsNullOrWhiteSpace(textBox2.Text) ||
                string.IsNullOrWhiteSpace(textBox3.Text))
            {
                MessageBox.Show("Preencha todos os campos de texto.", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            // Verifica se algum bot�o de r�dio para sexo est� selecionado
            if (!rdbsexo1.Checked && !rdbsexo2.Checked && !rdbsexo3.Checked)
            {
                MessageBox.Show("Selecione o sexo.", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            // Verifica se pelo menos um hobby foi selecionado
            if (!ckbfut.Checked && !ckbSeries.Checked && !ckbsharp.Checked && !ckbVolei.Checked && !ckbXadrez.Checked)
            {
                MessageBox.Show("Selecione pelo menos um hobby.", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            // Verifica se algum hor�rio foi selecionado
            if (!rdbmanha.Checked && !rdbtarde.Checked && !rdbnoite.Checked)
            {
                MessageBox.Show("Selecione um hor�rio.", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            // Se todas as verifica��es passaram, mostra a mensagem de sucesso
            MessageBox.Show("Matr�cula Feita!", "Sucesso", MessageBoxButtons.OK, MessageBoxIcon.Information);
        }

        private void btnSair_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            // S� executa o c�digo se n�o estiver em processo de limpeza
            if (!isClearing)
            {
                if (comboBox1.SelectedItem != null)
                {
                    string selectedItem = comboBox1.SelectedItem.ToString();
                    lstmesinicio.Items.Clear();

                    switch (selectedItem)
                    {
                        case "T�cnico em Desenvolvimento de Sistemas":
                            lstmesinicio.Items.Add("Agosto");
                            lstmesinicio.Items.Add("Novembro");
                            rdbmanha.Visible = true;
                            rdbnoite.Visible = false;
                            rdbtarde.Visible = true;
                            break;

                        case "T�cnico em Inform�tica para Internet":
                            lstmesinicio.Items.Add("Setembro");
                            lstmesinicio.Items.Add("Outubro");
                            rdbmanha.Visible = false;
                            rdbnoite.Visible = true;
                            rdbtarde.Visible = true;
                            break;

                        case "T�cnico em Design Gr�fico":
                            lstmesinicio.Items.Add("Setembro");
                            lstmesinicio.Items.Add("Outubro");
                            lstmesinicio.Items.Add("Novembro");
                            rdbmanha.Visible = true;
                            rdbnoite.Visible = true;
                            rdbtarde.Visible = true;
                            break;

                        default:
                            MessageBox.Show("Curso n�o reconhecido: " + selectedItem, "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                            break;
                    }
                }
                else
                {
                    MessageBox.Show("Nenhum curso selecionado.", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                }
            }
        }

        private void btnlimp_Click(object sender, EventArgs e)
        {
            // Indica que estamos limpando o formul�rio
            isClearing = true;

            // Limpar os campos de texto
            textBox1.Clear();
            textBox2.Clear();
            textBox3.Clear();

            // Limpar o comboBox
            comboBox1.SelectedIndex = -1;

            // Limpar o ListBox
            lstmesinicio.Items.Clear();

            // Definir o foco em textBox1
            textBox1.Focus();

            // Indica que a limpeza foi conclu�da
            isClearing = false;

            //limpa a goup box de sexo
            rdbsexo1.Checked = false;
            rdbsexo2.Checked = false;
            rdbsexo3.Checked = false;

            //limpando hobbies
            ckbfut.Checked = false;
            ckbSeries.Checked = false;
            ckbsharp.Checked = false;
            ckbVolei.Checked = false;
            ckbXadrez.Checked = false;

            //limpando hor�rios
            rdbnoite.Checked = false;
            rdbtarde.Checked = false;
            rdbmanha.Checked = false;
        }
    }
}
