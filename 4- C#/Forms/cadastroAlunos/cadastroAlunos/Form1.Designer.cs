namespace matricula_de_aluunos
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            pctLogo = new PictureBox();
            lblTitulo = new Label();
            grbDadosPessoais = new GroupBox();
            grbHobbies = new GroupBox();
            chkOutros = new CheckBox();
            chkCozinhar = new CheckBox();
            chkLivros = new CheckBox();
            chkMusica = new CheckBox();
            chkDancar = new CheckBox();
            chkFilmes = new CheckBox();
            chkViagens = new CheckBox();
            chkEsportes = new CheckBox();
            grbSexo = new GroupBox();
            rdbFeminino = new RadioButton();
            rdbMasculino = new RadioButton();
            txtCelular = new TextBox();
            lblCelular = new Label();
            txtEmail = new TextBox();
            lblEmail = new Label();
            txtNome = new TextBox();
            txtMatricula = new TextBox();
            label1 = new Label();
            lblMatricula = new Label();
            grbCursos = new GroupBox();
            cmbCursos = new ComboBox();
            grbPeriodos = new GroupBox();
            rdbNoite = new RadioButton();
            rdbTarde = new RadioButton();
            rdbManha = new RadioButton();
            lblMesesInicio = new Label();
            lstMeses = new ListBox();
            btnSalvar = new Button();
            btnLimpar = new Button();
            btnSair = new Button();
            tol1 = new ToolTip(components);
            ((System.ComponentModel.ISupportInitialize)pctLogo).BeginInit();
            grbDadosPessoais.SuspendLayout();
            grbHobbies.SuspendLayout();
            grbSexo.SuspendLayout();
            grbCursos.SuspendLayout();
            grbPeriodos.SuspendLayout();
            SuspendLayout();
            // 
            // pctLogo
            // 
            pctLogo.Image = Properties.Resources.images;
            pctLogo.Location = new Point(103, 12);
            pctLogo.Name = "pctLogo";
            pctLogo.Size = new Size(96, 68);
            pctLogo.TabIndex = 0;
            pctLogo.TabStop = false;
            // 
            // lblTitulo
            // 
            lblTitulo.AutoSize = true;
            lblTitulo.Font = new Font("Segoe UI", 20.25F, FontStyle.Bold, GraphicsUnit.Point);
            lblTitulo.Location = new Point(218, 31);
            lblTitulo.Name = "lblTitulo";
            lblTitulo.Size = new Size(266, 37);
            lblTitulo.TabIndex = 1;
            lblTitulo.Text = "Cadastro de Alunos";
            // 
            // grbDadosPessoais
            // 
            grbDadosPessoais.Controls.Add(grbHobbies);
            grbDadosPessoais.Controls.Add(grbSexo);
            grbDadosPessoais.Controls.Add(txtCelular);
            grbDadosPessoais.Controls.Add(lblCelular);
            grbDadosPessoais.Controls.Add(txtEmail);
            grbDadosPessoais.Controls.Add(lblEmail);
            grbDadosPessoais.Controls.Add(txtNome);
            grbDadosPessoais.Controls.Add(txtMatricula);
            grbDadosPessoais.Controls.Add(label1);
            grbDadosPessoais.Controls.Add(lblMatricula);
            grbDadosPessoais.Location = new Point(12, 97);
            grbDadosPessoais.Name = "grbDadosPessoais";
            grbDadosPessoais.Size = new Size(549, 171);
            grbDadosPessoais.TabIndex = 2;
            grbDadosPessoais.TabStop = false;
            grbDadosPessoais.Text = "Dados Pessoais:";
            // 
            // grbHobbies
            // 
            grbHobbies.Controls.Add(chkOutros);
            grbHobbies.Controls.Add(chkCozinhar);
            grbHobbies.Controls.Add(chkLivros);
            grbHobbies.Controls.Add(chkMusica);
            grbHobbies.Controls.Add(chkDancar);
            grbHobbies.Controls.Add(chkFilmes);
            grbHobbies.Controls.Add(chkViagens);
            grbHobbies.Controls.Add(chkEsportes);
            grbHobbies.Location = new Point(166, 89);
            grbHobbies.Name = "grbHobbies";
            grbHobbies.Size = new Size(371, 71);
            grbHobbies.TabIndex = 9;
            grbHobbies.TabStop = false;
            grbHobbies.Text = "Hobbies";
            // 
            // chkOutros
            // 
            chkOutros.AutoSize = true;
            chkOutros.Location = new Point(294, 44);
            chkOutros.Name = "chkOutros";
            chkOutros.Size = new Size(62, 19);
            chkOutros.TabIndex = 14;
            chkOutros.Text = "Outros";
            chkOutros.UseVisualStyleBackColor = true;
            // 
            // chkCozinhar
            // 
            chkCozinhar.AutoSize = true;
            chkCozinhar.Location = new Point(203, 44);
            chkCozinhar.Name = "chkCozinhar";
            chkCozinhar.Size = new Size(73, 19);
            chkCozinhar.TabIndex = 13;
            chkCozinhar.Text = "Cozinhar";
            chkCozinhar.UseVisualStyleBackColor = true;
            // 
            // chkLivros
            // 
            chkLivros.AutoSize = true;
            chkLivros.Location = new Point(111, 44);
            chkLivros.Name = "chkLivros";
            chkLivros.Size = new Size(57, 19);
            chkLivros.TabIndex = 12;
            chkLivros.Text = "Livros";
            chkLivros.UseVisualStyleBackColor = true;
            // 
            // chkMusica
            // 
            chkMusica.AutoSize = true;
            chkMusica.Location = new Point(19, 44);
            chkMusica.Name = "chkMusica";
            chkMusica.Size = new Size(64, 19);
            chkMusica.TabIndex = 11;
            chkMusica.Text = "Música";
            chkMusica.UseVisualStyleBackColor = true;
            // 
            // chkDancar
            // 
            chkDancar.AutoSize = true;
            chkDancar.Location = new Point(294, 21);
            chkDancar.Name = "chkDancar";
            chkDancar.Size = new Size(63, 19);
            chkDancar.TabIndex = 10;
            chkDancar.Text = "Dançar";
            chkDancar.UseVisualStyleBackColor = true;
            // 
            // chkFilmes
            // 
            chkFilmes.AutoSize = true;
            chkFilmes.Location = new Point(203, 21);
            chkFilmes.Name = "chkFilmes";
            chkFilmes.Size = new Size(60, 19);
            chkFilmes.TabIndex = 9;
            chkFilmes.Text = "Filmes";
            chkFilmes.UseVisualStyleBackColor = true;
            // 
            // chkViagens
            // 
            chkViagens.AutoSize = true;
            chkViagens.Location = new Point(111, 21);
            chkViagens.Name = "chkViagens";
            chkViagens.Size = new Size(67, 19);
            chkViagens.TabIndex = 8;
            chkViagens.Text = "Viagens";
            chkViagens.UseVisualStyleBackColor = true;
            // 
            // chkEsportes
            // 
            chkEsportes.AutoSize = true;
            chkEsportes.Location = new Point(19, 21);
            chkEsportes.Name = "chkEsportes";
            chkEsportes.Size = new Size(70, 19);
            chkEsportes.TabIndex = 7;
            chkEsportes.Text = "Esportes";
            chkEsportes.UseVisualStyleBackColor = true;
            // 
            // grbSexo
            // 
            grbSexo.Controls.Add(rdbFeminino);
            grbSexo.Controls.Add(rdbMasculino);
            grbSexo.Location = new Point(9, 89);
            grbSexo.Name = "grbSexo";
            grbSexo.Size = new Size(102, 71);
            grbSexo.TabIndex = 8;
            grbSexo.TabStop = false;
            grbSexo.Text = "Sexo";
            // 
            // rdbFeminino
            // 
            rdbFeminino.AutoSize = true;
            rdbFeminino.Location = new Point(13, 43);
            rdbFeminino.Name = "rdbFeminino";
            rdbFeminino.Size = new Size(75, 19);
            rdbFeminino.TabIndex = 6;
            rdbFeminino.TabStop = true;
            rdbFeminino.Text = "Feminino";
            rdbFeminino.UseVisualStyleBackColor = true;
            // 
            // rdbMasculino
            // 
            rdbMasculino.AutoSize = true;
            rdbMasculino.Location = new Point(13, 21);
            rdbMasculino.Name = "rdbMasculino";
            rdbMasculino.Size = new Size(80, 19);
            rdbMasculino.TabIndex = 5;
            rdbMasculino.TabStop = true;
            rdbMasculino.Text = "Masculino";
            rdbMasculino.UseVisualStyleBackColor = true;
            // 
            // txtCelular
            // 
            txtCelular.Location = new Point(66, 57);
            txtCelular.Name = "txtCelular";
            txtCelular.Size = new Size(100, 23);
            txtCelular.TabIndex = 3;
            // 
            // lblCelular
            // 
            lblCelular.AutoSize = true;
            lblCelular.Location = new Point(18, 60);
            lblCelular.Name = "lblCelular";
            lblCelular.Size = new Size(47, 15);
            lblCelular.TabIndex = 6;
            lblCelular.Text = "Celular:";
            lblCelular.TextAlign = ContentAlignment.TopCenter;
            // 
            // txtEmail
            // 
            txtEmail.Location = new Point(236, 57);
            txtEmail.Name = "txtEmail";
            txtEmail.Size = new Size(302, 23);
            txtEmail.TabIndex = 4;
            // 
            // lblEmail
            // 
            lblEmail.AutoSize = true;
            lblEmail.Location = new Point(192, 60);
            lblEmail.Name = "lblEmail";
            lblEmail.Size = new Size(44, 15);
            lblEmail.TabIndex = 4;
            lblEmail.Text = "E-mail:";
            lblEmail.TextAlign = ContentAlignment.TopCenter;
            // 
            // txtNome
            // 
            txtNome.Location = new Point(236, 28);
            txtNome.Name = "txtNome";
            txtNome.Size = new Size(302, 23);
            txtNome.TabIndex = 2;
            // 
            // txtMatricula
            // 
            txtMatricula.Location = new Point(66, 28);
            txtMatricula.Name = "txtMatricula";
            txtMatricula.Size = new Size(100, 23);
            txtMatricula.TabIndex = 1;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(192, 31);
            label1.Name = "label1";
            label1.Size = new Size(43, 15);
            label1.TabIndex = 1;
            label1.Text = "Nome:";
            label1.TextAlign = ContentAlignment.TopCenter;
            // 
            // lblMatricula
            // 
            lblMatricula.AutoSize = true;
            lblMatricula.Location = new Point(6, 31);
            lblMatricula.Name = "lblMatricula";
            lblMatricula.Size = new Size(60, 15);
            lblMatricula.TabIndex = 0;
            lblMatricula.Text = "Matrícula:";
            lblMatricula.TextAlign = ContentAlignment.TopCenter;
            // 
            // grbCursos
            // 
            grbCursos.Controls.Add(cmbCursos);
            grbCursos.Controls.Add(grbPeriodos);
            grbCursos.Controls.Add(lblMesesInicio);
            grbCursos.Controls.Add(lstMeses);
            grbCursos.Location = new Point(12, 274);
            grbCursos.Name = "grbCursos";
            grbCursos.Size = new Size(305, 161);
            grbCursos.TabIndex = 15;
            grbCursos.TabStop = false;
            grbCursos.Text = "Cursos";
            // 
            // cmbCursos
            // 
            cmbCursos.FormattingEnabled = true;
            cmbCursos.Items.AddRange(new object[] { "Téc. Desenv. de Sistemas", "Téc. Informática para internet", "Téc. Design gráfico" });
            cmbCursos.Location = new Point(10, 22);
            cmbCursos.Name = "cmbCursos";
            cmbCursos.Size = new Size(188, 23);
            cmbCursos.TabIndex = 16;
            cmbCursos.SelectedIndexChanged += cmbCursos_SelectedIndexChanged;
            // 
            // grbPeriodos
            // 
            grbPeriodos.Controls.Add(rdbNoite);
            grbPeriodos.Controls.Add(rdbTarde);
            grbPeriodos.Controls.Add(rdbManha);
            grbPeriodos.Location = new Point(208, 12);
            grbPeriodos.Name = "grbPeriodos";
            grbPeriodos.Size = new Size(83, 135);
            grbPeriodos.TabIndex = 18;
            grbPeriodos.TabStop = false;
            grbPeriodos.Text = "Períodos";
            // 
            // rdbNoite
            // 
            rdbNoite.AutoSize = true;
            rdbNoite.Location = new Point(13, 97);
            rdbNoite.Name = "rdbNoite";
            rdbNoite.Size = new Size(54, 19);
            rdbNoite.TabIndex = 21;
            rdbNoite.TabStop = true;
            rdbNoite.Text = "Noite";
            rdbNoite.UseVisualStyleBackColor = true;
            // 
            // rdbTarde
            // 
            rdbTarde.AutoSize = true;
            rdbTarde.Location = new Point(13, 59);
            rdbTarde.Name = "rdbTarde";
            rdbTarde.Size = new Size(53, 19);
            rdbTarde.TabIndex = 20;
            rdbTarde.TabStop = true;
            rdbTarde.Text = "Tarde";
            rdbTarde.UseVisualStyleBackColor = true;
            // 
            // rdbManha
            // 
            rdbManha.AutoSize = true;
            rdbManha.Location = new Point(13, 21);
            rdbManha.Name = "rdbManha";
            rdbManha.Size = new Size(62, 19);
            rdbManha.TabIndex = 19;
            rdbManha.TabStop = true;
            rdbManha.Text = "Manhã";
            rdbManha.UseVisualStyleBackColor = true;
            // 
            // lblMesesInicio
            // 
            lblMesesInicio.AutoSize = true;
            lblMesesInicio.Location = new Point(9, 49);
            lblMesesInicio.Name = "lblMesesInicio";
            lblMesesInicio.Size = new Size(88, 15);
            lblMesesInicio.TabIndex = 1;
            lblMesesInicio.Text = "Meses de Início";
            // 
            // lstMeses
            // 
            lstMeses.FormattingEnabled = true;
            lstMeses.ItemHeight = 15;
            lstMeses.Location = new Point(9, 68);
            lstMeses.Name = "lstMeses";
            lstMeses.Size = new Size(189, 79);
            lstMeses.TabIndex = 17;
            // 
            // btnSalvar
            // 
            btnSalvar.BackColor = Color.Transparent;
            btnSalvar.FlatAppearance.BorderSize = 0;
            btnSalvar.FlatStyle = FlatStyle.Flat;
            btnSalvar.Image = (Image)resources.GetObject("btnSalvar.Image");
            btnSalvar.ImageAlign = ContentAlignment.BottomCenter;
            btnSalvar.Location = new Point(328, 333);
            btnSalvar.Name = "btnSalvar";
            btnSalvar.Size = new Size(75, 80);
            btnSalvar.TabIndex = 22;
            btnSalvar.TextAlign = ContentAlignment.BottomCenter;
            tol1.SetToolTip(btnSalvar, "Salva os dados digitados!");
            btnSalvar.UseVisualStyleBackColor = false;
            btnSalvar.Click += btnSalvar_Click;
            // 
            // btnLimpar
            // 
            btnLimpar.BackColor = Color.Transparent;
            btnLimpar.FlatAppearance.BorderSize = 0;
            btnLimpar.FlatStyle = FlatStyle.Flat;
            btnLimpar.Image = (Image)resources.GetObject("btnLimpar.Image");
            btnLimpar.Location = new Point(409, 333);
            btnLimpar.Name = "btnLimpar";
            btnLimpar.Size = new Size(75, 80);
            btnLimpar.TabIndex = 23;
            btnLimpar.TextAlign = ContentAlignment.BottomCenter;
            tol1.SetToolTip(btnLimpar, "Limpa os campos digitados!");
            btnLimpar.UseVisualStyleBackColor = false;
            btnLimpar.Click += btnLimpar_Click;
            // 
            // btnSair
            // 
            btnSair.BackColor = Color.Transparent;
            btnSair.FlatAppearance.BorderSize = 0;
            btnSair.FlatStyle = FlatStyle.Flat;
            btnSair.Image = (Image)resources.GetObject("btnSair.Image");
            btnSair.Location = new Point(490, 333);
            btnSair.Name = "btnSair";
            btnSair.Size = new Size(75, 80);
            btnSair.TabIndex = 24;
            btnSair.TextAlign = ContentAlignment.BottomCenter;
            tol1.SetToolTip(btnSair, "Finaliza o programa!");
            btnSair.UseVisualStyleBackColor = false;
            btnSair.Click += btnSair_Click;
            // 
            // tol1
            // 
            tol1.IsBalloon = true;
            tol1.ToolTipIcon = ToolTipIcon.Info;
            tol1.ToolTipTitle = "Informação";
            // 
            // Form1
            // 
            AcceptButton = btnSalvar;
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = Color.White;
            CancelButton = btnSair;
            ClientSize = new Size(573, 444);
            Controls.Add(btnSair);
            Controls.Add(btnLimpar);
            Controls.Add(btnSalvar);
            Controls.Add(grbCursos);
            Controls.Add(grbDadosPessoais);
            Controls.Add(lblTitulo);
            Controls.Add(pctLogo);
            MaximumSize = new Size(589, 483);
            MinimumSize = new Size(589, 483);
            Name = "Form1";
            StartPosition = FormStartPosition.CenterScreen;
            Text = "Form1";
            Load += Form1_Load;
            ((System.ComponentModel.ISupportInitialize)pctLogo).EndInit();
            grbDadosPessoais.ResumeLayout(false);
            grbDadosPessoais.PerformLayout();
            grbHobbies.ResumeLayout(false);
            grbHobbies.PerformLayout();
            grbSexo.ResumeLayout(false);
            grbSexo.PerformLayout();
            grbCursos.ResumeLayout(false);
            grbCursos.PerformLayout();
            grbPeriodos.ResumeLayout(false);
            grbPeriodos.PerformLayout();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private PictureBox pctLogo;
        private Label lblTitulo;
        private GroupBox grbDadosPessoais;
        private GroupBox grbHobbies;
        private GroupBox grbSexo;
        private RadioButton rdbFeminino;
        private RadioButton rdbMasculino;
        private TextBox txtCelular;
        private Label lblCelular;
        private TextBox txtEmail;
        private Label lblEmail;
        private TextBox txtNome;
        private TextBox txtMatricula;
        private Label label1;
        private Label lblMatricula;
        private GroupBox grbCursos;
        private Button btnSalvar;
        private Button btnLimpar;
        private Button btnSair;
        private CheckBox chkOutros;
        private CheckBox chkCozinhar;
        private CheckBox chkLivros;
        private CheckBox chkMusica;
        private CheckBox chkDancar;
        private CheckBox chkFilmes;
        private CheckBox chkViagens;
        private CheckBox chkEsportes;
        private Label lblMesesInicio;
        private ListBox lstMeses;
        private ComboBox cmbCursos;
        private GroupBox grbPeriodos;
        private RadioButton rdbNoite;
        private RadioButton rdbTarde;
        private RadioButton rdbManha;
        private ToolTip tol1;
    }
}