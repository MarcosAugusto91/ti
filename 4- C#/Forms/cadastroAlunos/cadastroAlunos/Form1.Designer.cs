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
            pctLogo = new PictureBox();
            lblTitulo = new Label();
            grbDadosPessoais = new GroupBox();
            grbHobbies = new GroupBox();
            checkBox5 = new CheckBox();
            checkBox6 = new CheckBox();
            checkBox7 = new CheckBox();
            checkBox8 = new CheckBox();
            checkBox4 = new CheckBox();
            checkBox3 = new CheckBox();
            checkBox2 = new CheckBox();
            chkEsportes = new CheckBox();
            grbSexo = new GroupBox();
            rdbFeminino = new RadioButton();
            rdbMasculino = new RadioButton();
            textBox1 = new TextBox();
            lblCelular = new Label();
            txtEmail = new TextBox();
            lblEmail = new Label();
            txtNome = new TextBox();
            txtMatricula = new TextBox();
            label1 = new Label();
            lblMatricula = new Label();
            grbCursos = new GroupBox();
            lblMesesInicio = new Label();
            lstMeses = new ListBox();
            btnSalvar = new Button();
            btnLimpar = new Button();
            btnSair = new Button();
            grbPeriodos = new GroupBox();
            rdbTarde = new RadioButton();
            rdbManha = new RadioButton();
            rdbNoite = new RadioButton();
            comboBox1 = new ComboBox();
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
            pctLogo.Location = new Point(12, 12);
            pctLogo.Name = "pctLogo";
            pctLogo.Size = new Size(173, 79);
            pctLogo.TabIndex = 0;
            pctLogo.TabStop = false;
            // 
            // lblTitulo
            // 
            lblTitulo.AutoSize = true;
            lblTitulo.Font = new Font("Segoe UI", 20.25F, FontStyle.Bold, GraphicsUnit.Point);
            lblTitulo.Location = new Point(218, 33);
            lblTitulo.Name = "lblTitulo";
            lblTitulo.Size = new Size(266, 37);
            lblTitulo.TabIndex = 1;
            lblTitulo.Text = "Cadastro de Alunos";
            // 
            // grbDadosPessoais
            // 
            grbDadosPessoais.Controls.Add(grbHobbies);
            grbDadosPessoais.Controls.Add(grbSexo);
            grbDadosPessoais.Controls.Add(textBox1);
            grbDadosPessoais.Controls.Add(lblCelular);
            grbDadosPessoais.Controls.Add(txtEmail);
            grbDadosPessoais.Controls.Add(lblEmail);
            grbDadosPessoais.Controls.Add(txtNome);
            grbDadosPessoais.Controls.Add(txtMatricula);
            grbDadosPessoais.Controls.Add(label1);
            grbDadosPessoais.Controls.Add(lblMatricula);
            grbDadosPessoais.Location = new Point(12, 100);
            grbDadosPessoais.Name = "grbDadosPessoais";
            grbDadosPessoais.Size = new Size(549, 174);
            grbDadosPessoais.TabIndex = 2;
            grbDadosPessoais.TabStop = false;
            grbDadosPessoais.Text = "Dados Pessoais:";
            // 
            // grbHobbies
            // 
            grbHobbies.Controls.Add(checkBox5);
            grbHobbies.Controls.Add(checkBox6);
            grbHobbies.Controls.Add(checkBox7);
            grbHobbies.Controls.Add(checkBox8);
            grbHobbies.Controls.Add(checkBox4);
            grbHobbies.Controls.Add(checkBox3);
            grbHobbies.Controls.Add(checkBox2);
            grbHobbies.Controls.Add(chkEsportes);
            grbHobbies.Location = new Point(166, 89);
            grbHobbies.Name = "grbHobbies";
            grbHobbies.Size = new Size(371, 71);
            grbHobbies.TabIndex = 9;
            grbHobbies.TabStop = false;
            grbHobbies.Text = "Hobbies";
            // 
            // checkBox5
            // 
            checkBox5.AutoSize = true;
            checkBox5.Location = new Point(294, 44);
            checkBox5.Name = "checkBox5";
            checkBox5.Size = new Size(62, 19);
            checkBox5.TabIndex = 7;
            checkBox5.Text = "Outros";
            checkBox5.UseVisualStyleBackColor = true;
            // 
            // checkBox6
            // 
            checkBox6.AutoSize = true;
            checkBox6.Location = new Point(203, 44);
            checkBox6.Name = "checkBox6";
            checkBox6.Size = new Size(73, 19);
            checkBox6.TabIndex = 6;
            checkBox6.Text = "Cozinhar";
            checkBox6.UseVisualStyleBackColor = true;
            // 
            // checkBox7
            // 
            checkBox7.AutoSize = true;
            checkBox7.Location = new Point(111, 44);
            checkBox7.Name = "checkBox7";
            checkBox7.Size = new Size(57, 19);
            checkBox7.TabIndex = 5;
            checkBox7.Text = "Livros";
            checkBox7.UseVisualStyleBackColor = true;
            // 
            // checkBox8
            // 
            checkBox8.AutoSize = true;
            checkBox8.Location = new Point(19, 44);
            checkBox8.Name = "checkBox8";
            checkBox8.Size = new Size(64, 19);
            checkBox8.TabIndex = 4;
            checkBox8.Text = "Música";
            checkBox8.UseVisualStyleBackColor = true;
            // 
            // checkBox4
            // 
            checkBox4.AutoSize = true;
            checkBox4.Location = new Point(294, 21);
            checkBox4.Name = "checkBox4";
            checkBox4.Size = new Size(63, 19);
            checkBox4.TabIndex = 3;
            checkBox4.Text = "Dançar";
            checkBox4.UseVisualStyleBackColor = true;
            // 
            // checkBox3
            // 
            checkBox3.AutoSize = true;
            checkBox3.Location = new Point(203, 21);
            checkBox3.Name = "checkBox3";
            checkBox3.Size = new Size(60, 19);
            checkBox3.TabIndex = 2;
            checkBox3.Text = "Filmes";
            checkBox3.UseVisualStyleBackColor = true;
            // 
            // checkBox2
            // 
            checkBox2.AutoSize = true;
            checkBox2.Location = new Point(111, 21);
            checkBox2.Name = "checkBox2";
            checkBox2.Size = new Size(67, 19);
            checkBox2.TabIndex = 1;
            checkBox2.Text = "Viagens";
            checkBox2.UseVisualStyleBackColor = true;
            // 
            // chkEsportes
            // 
            chkEsportes.AutoSize = true;
            chkEsportes.Location = new Point(19, 21);
            chkEsportes.Name = "chkEsportes";
            chkEsportes.Size = new Size(70, 19);
            chkEsportes.TabIndex = 0;
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
            rdbFeminino.TabIndex = 1;
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
            rdbMasculino.TabIndex = 0;
            rdbMasculino.TabStop = true;
            rdbMasculino.Text = "Masculino";
            rdbMasculino.UseVisualStyleBackColor = true;
            // 
            // textBox1
            // 
            textBox1.Location = new Point(66, 57);
            textBox1.Name = "textBox1";
            textBox1.Size = new Size(100, 23);
            textBox1.TabIndex = 7;
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
            txtEmail.TabIndex = 5;
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
            txtNome.TabIndex = 3;
            // 
            // txtMatricula
            // 
            txtMatricula.Location = new Point(66, 28);
            txtMatricula.Name = "txtMatricula";
            txtMatricula.Size = new Size(100, 23);
            txtMatricula.TabIndex = 2;
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
            grbCursos.Controls.Add(comboBox1);
            grbCursos.Controls.Add(grbPeriodos);
            grbCursos.Controls.Add(lblMesesInicio);
            grbCursos.Controls.Add(lstMeses);
            grbCursos.Location = new Point(12, 283);
            grbCursos.Name = "grbCursos";
            grbCursos.Size = new Size(549, 165);
            grbCursos.TabIndex = 3;
            grbCursos.TabStop = false;
            grbCursos.Text = "Cursos";
            // 
            // lblMesesInicio
            // 
            lblMesesInicio.AutoSize = true;
            lblMesesInicio.Location = new Point(335, 22);
            lblMesesInicio.Name = "lblMesesInicio";
            lblMesesInicio.Size = new Size(88, 15);
            lblMesesInicio.TabIndex = 1;
            lblMesesInicio.Text = "Meses de Início";
            // 
            // lstMeses
            // 
            lstMeses.FormattingEnabled = true;
            lstMeses.ItemHeight = 15;
            lstMeses.Location = new Point(335, 41);
            lstMeses.Name = "lstMeses";
            lstMeses.Size = new Size(200, 109);
            lstMeses.TabIndex = 0;
            // 
            // btnSalvar
            // 
            btnSalvar.Location = new Point(325, 454);
            btnSalvar.Name = "btnSalvar";
            btnSalvar.Size = new Size(75, 57);
            btnSalvar.TabIndex = 4;
            btnSalvar.Text = "Salvar";
            btnSalvar.UseVisualStyleBackColor = true;
            // 
            // btnLimpar
            // 
            btnLimpar.Location = new Point(406, 454);
            btnLimpar.Name = "btnLimpar";
            btnLimpar.Size = new Size(75, 57);
            btnLimpar.TabIndex = 5;
            btnLimpar.Text = "Limpar";
            btnLimpar.UseVisualStyleBackColor = true;
            // 
            // btnSair
            // 
            btnSair.Location = new Point(487, 454);
            btnSair.Name = "btnSair";
            btnSair.Size = new Size(75, 57);
            btnSair.TabIndex = 6;
            btnSair.Text = "Sair";
            btnSair.UseVisualStyleBackColor = true;
            btnSair.Click += btnSair_Click;
            // 
            // grbPeriodos
            // 
            grbPeriodos.Controls.Add(rdbNoite);
            grbPeriodos.Controls.Add(rdbTarde);
            grbPeriodos.Controls.Add(rdbManha);
            grbPeriodos.Location = new Point(240, 22);
            grbPeriodos.Name = "grbPeriodos";
            grbPeriodos.Size = new Size(83, 128);
            grbPeriodos.TabIndex = 9;
            grbPeriodos.TabStop = false;
            grbPeriodos.Text = "Períodos";
            // 
            // rdbTarde
            // 
            rdbTarde.AutoSize = true;
            rdbTarde.Location = new Point(13, 59);
            rdbTarde.Name = "rdbTarde";
            rdbTarde.Size = new Size(53, 19);
            rdbTarde.TabIndex = 1;
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
            rdbManha.TabIndex = 0;
            rdbManha.TabStop = true;
            rdbManha.Text = "Manhã";
            rdbManha.UseVisualStyleBackColor = true;
            // 
            // rdbNoite
            // 
            rdbNoite.AutoSize = true;
            rdbNoite.Location = new Point(13, 97);
            rdbNoite.Name = "rdbNoite";
            rdbNoite.Size = new Size(54, 19);
            rdbNoite.TabIndex = 2;
            rdbNoite.TabStop = true;
            rdbNoite.Text = "Noite";
            rdbNoite.UseVisualStyleBackColor = true;
            // 
            // comboBox1
            // 
            comboBox1.FormattingEnabled = true;
            comboBox1.Location = new Point(9, 85);
            comboBox1.Name = "comboBox1";
            comboBox1.Size = new Size(219, 23);
            comboBox1.TabIndex = 10;
            // 
            // Form1
            // 
            AcceptButton = btnSalvar;
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            CancelButton = btnSair;
            ClientSize = new Size(573, 520);
            Controls.Add(btnSair);
            Controls.Add(btnLimpar);
            Controls.Add(btnSalvar);
            Controls.Add(grbCursos);
            Controls.Add(grbDadosPessoais);
            Controls.Add(lblTitulo);
            Controls.Add(pctLogo);
            Name = "Form1";
            StartPosition = FormStartPosition.CenterScreen;
            Text = "Form1";
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
        private TextBox textBox1;
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
        private CheckBox checkBox5;
        private CheckBox checkBox6;
        private CheckBox checkBox7;
        private CheckBox checkBox8;
        private CheckBox checkBox4;
        private CheckBox checkBox3;
        private CheckBox checkBox2;
        private CheckBox chkEsportes;
        private Label lblMesesInicio;
        private ListBox lstMeses;
        private ComboBox comboBox1;
        private GroupBox grbPeriodos;
        private RadioButton rdbNoite;
        private RadioButton rdbTarde;
        private RadioButton rdbManha;
    }
}