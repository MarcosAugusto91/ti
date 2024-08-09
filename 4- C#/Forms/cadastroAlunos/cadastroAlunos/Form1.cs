namespace matricula_de_aluunos
{
    public partial class Form1 : Form
    {

        public Form1()
        {
            InitializeComponent();
        }


        private void btnSair_Click(object sender, EventArgs e)
        {
            if (MessageBox.Show("Deseja sair do sistema?", "Finalizar programa", MessageBoxButtons.YesNo, MessageBoxIcon.Question) == DialogResult.Yes)
            {
                Application.Exit();
            }
            else
            {
                txtMatricula.Focus();
            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            txtMatricula.Focus();
            rdbNoite.Enabled = false;
            rdbManha.Enabled = false;
            rdbTarde.Enabled = false;
            lstMeses.Enabled = false;
        }

        private void cmbCursos_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (cmbCursos.SelectedIndex == 0)
            {
                rdbNoite.Enabled = false;
                rdbManha.Enabled = true;
                rdbTarde.Enabled = true;
                lstMeses.Enabled = true;
                lstMeses.Items.Clear();
                lstMeses.Items.Add("Agosto");
                lstMeses.Items.Add("Novembro");
            }
            else if (cmbCursos.SelectedIndex == 1)
            {
                rdbNoite.Enabled = true;
                rdbManha.Enabled = false;
                rdbTarde.Enabled = true;
                lstMeses.Enabled = true;
                lstMeses.Items.Clear();
                lstMeses.Items.Add("Setembro");
                lstMeses.Items.Add("Outubro");
            }
            else if (cmbCursos.SelectedIndex == 2)
            {
                rdbNoite.Enabled = true;
                rdbManha.Enabled = true;
                rdbTarde.Enabled = true;
                lstMeses.Enabled = true;
                lstMeses.Items.Clear();
                lstMeses.Items.Add("Setembro");
                lstMeses.Items.Add("Outubro");
                lstMeses.Items.Add("Novembro");
            }
            else if (cmbCursos.SelectedIndex == -1)
            {
                rdbNoite.Enabled = false;
                rdbManha.Enabled = false;
                rdbTarde.Enabled = false;
                lstMeses.Enabled = false;
                lstMeses.Items.Clear();
            }
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txtMatricula.Clear();
            txtNome.Clear();
            txtEmail.Clear();
            txtCelular.Clear();
            rdbFeminino.Checked = false;
            rdbMasculino.Checked = false;
            rdbManha.Checked = false;
            rdbTarde.Checked = false;
            rdbNoite.Checked = false;
            rdbManha.Enabled = false;
            rdbTarde.Enabled = false;
            rdbNoite.Enabled = false;
            cmbCursos.SelectedIndex = -1;
            lstMeses.Enabled = false;
            chkEsportes.Checked = false;
            chkViagens.Checked = false;
            chkFilmes.Checked = false;
            chkDancar.Checked = false;
            chkMusica.Checked = false;
            chkLivros.Checked = false;
            chkCozinhar.Checked = false;
            chkOutros.Checked = false;
            txtMatricula.Focus();
        }

        private void btnSalvar_Click(object sender, EventArgs e)
        {
            if (txtMatricula.Text == "" || txtNome.Text == "" || txtEmail.Text == "" || txtCelular.Text == ""){
                MessageBox.Show("Campos dos dados pessoais obrigatórios, preencha para salvar!", "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                txtMatricula.Focus();
            }
            else if (rdbMasculino.Checked == false && rdbFeminino.Checked == false) {
                MessageBox.Show("Selecione seu sexo!", "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                grbSexo.Focus();
            } 
            else if (chkEsportes.Checked == false 
                && chkCozinhar.Checked == false 
                && chkDancar.Checked == false 
                && chkFilmes.Checked == false 
                && chkLivros.Checked == false 
                && chkMusica.Checked == false
                && chkViagens.Checked == false
                && chkOutros.Checked == false)
            {
                MessageBox.Show("Selecione ao menos 1 Hobbie!", "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                chkEsportes.Focus();
            }
            else if (cmbCursos.SelectedIndex == -1) {
                MessageBox.Show("Seleção do curso obrigatório!", "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                cmbCursos.Focus();
            }
            else if(lstMeses.SelectedIndex <= -1)
            {
                MessageBox.Show("Selecione o mês de ínicio do curso!", "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                lstMeses.Focus();
            }
            else if(rdbManha.Checked == false && rdbTarde.Checked == false && rdbNoite.Checked == false)
            {
                MessageBox.Show("Selecione o período do curso!", "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                grbPeriodos.Focus();
            }
            else
            {
                MessageBox.Show("Parabéns, cadastro salvo com sucesso!", "Salvamento", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
        }
    }
}
