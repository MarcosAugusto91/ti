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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            lbltitulo = new Label();
            pictureBox1 = new PictureBox();
            grbdados = new GroupBox();
            groupBoxhobbie = new GroupBox();
            ckbVolei = new CheckBox();
            ckbsharp = new CheckBox();
            ckbXadrez = new CheckBox();
            ckbSeries = new CheckBox();
            ckbfut = new CheckBox();
            groupBoxsexo = new GroupBox();
            rdbsexo2 = new RadioButton();
            rdbsexo3 = new RadioButton();
            rdbsexo1 = new RadioButton();
            textBox3 = new TextBox();
            textBox2 = new TextBox();
            textBox1 = new TextBox();
            lblemail = new Label();
            lblnome = new Label();
            lblmat = new Label();
            groupBoxcursos = new GroupBox();
            lstmesinicio = new ListBox();
            lblmes = new Label();
            groupBoxperiodo = new GroupBox();
            rdbnoite = new RadioButton();
            rdbtarde = new RadioButton();
            rdbmanha = new RadioButton();
            comboBox1 = new ComboBox();
            btnSalv = new Button();
            btnlimp = new Button();
            btnSair = new Button();
            ((System.ComponentModel.ISupportInitialize)pictureBox1).BeginInit();
            grbdados.SuspendLayout();
            groupBoxhobbie.SuspendLayout();
            groupBoxsexo.SuspendLayout();
            groupBoxcursos.SuspendLayout();
            groupBoxperiodo.SuspendLayout();
            SuspendLayout();
            // 
            // lbltitulo
            // 
            lbltitulo.AutoSize = true;
            lbltitulo.Font = new Font("Showcard Gothic", 14.25F, FontStyle.Bold, GraphicsUnit.Point);
            lbltitulo.Location = new Point(304, 42);
            lbltitulo.Name = "lbltitulo";
            lbltitulo.Size = new Size(245, 23);
            lbltitulo.TabIndex = 0;
            lbltitulo.Text = "CADASTRO DOS ALUNOS";
            // 
            // pictureBox1
            // 
            pictureBox1.Image = (Image)resources.GetObject("pictureBox1.Image");
            pictureBox1.Location = new Point(31, 2);
            pictureBox1.Name = "pictureBox1";
            pictureBox1.Size = new Size(241, 127);
            pictureBox1.SizeMode = PictureBoxSizeMode.StretchImage;
            pictureBox1.TabIndex = 1;
            pictureBox1.TabStop = false;
            // 
            // grbdados
            // 
            grbdados.Controls.Add(groupBoxhobbie);
            grbdados.Controls.Add(groupBoxsexo);
            grbdados.Controls.Add(textBox3);
            grbdados.Controls.Add(textBox2);
            grbdados.Controls.Add(textBox1);
            grbdados.Controls.Add(lblemail);
            grbdados.Controls.Add(lblnome);
            grbdados.Controls.Add(lblmat);
            grbdados.Location = new Point(25, 135);
            grbdados.Name = "grbdados";
            grbdados.Size = new Size(524, 290);
            grbdados.TabIndex = 2;
            grbdados.TabStop = false;
            grbdados.Text = "Dados Pessoais:";
            // 
            // groupBoxhobbie
            // 
            groupBoxhobbie.Controls.Add(ckbVolei);
            groupBoxhobbie.Controls.Add(ckbsharp);
            groupBoxhobbie.Controls.Add(ckbXadrez);
            groupBoxhobbie.Controls.Add(ckbSeries);
            groupBoxhobbie.Controls.Add(ckbfut);
            groupBoxhobbie.Location = new Point(204, 158);
            groupBoxhobbie.Name = "groupBoxhobbie";
            groupBoxhobbie.Size = new Size(314, 100);
            groupBoxhobbie.TabIndex = 7;
            groupBoxhobbie.TabStop = false;
            groupBoxhobbie.Text = "Hobbies:";
            // 
            // ckbVolei
            // 
            ckbVolei.AutoSize = true;
            ckbVolei.Location = new Point(225, 22);
            ckbVolei.Name = "ckbVolei";
            ckbVolei.Size = new Size(51, 19);
            ckbVolei.TabIndex = 4;
            ckbVolei.Text = "Vôlei";
            ckbVolei.UseVisualStyleBackColor = true;
            // 
            // ckbsharp
            // 
            ckbsharp.AutoSize = true;
            ckbsharp.Location = new Point(123, 49);
            ckbsharp.Name = "ckbsharp";
            ckbsharp.Size = new Size(120, 19);
            ckbsharp.TabIndex = 3;
            ckbsharp.Text = "programar em C#";
            ckbsharp.UseVisualStyleBackColor = true;
            // 
            // ckbXadrez
            // 
            ckbXadrez.AutoSize = true;
            ckbXadrez.Location = new Point(123, 22);
            ckbXadrez.Name = "ckbXadrez";
            ckbXadrez.Size = new Size(61, 19);
            ckbXadrez.TabIndex = 2;
            ckbXadrez.Text = "Xadrez";
            ckbXadrez.UseVisualStyleBackColor = true;
            // 
            // ckbSeries
            // 
            ckbSeries.AutoSize = true;
            ckbSeries.Location = new Point(27, 49);
            ckbSeries.Name = "ckbSeries";
            ckbSeries.Size = new Size(56, 19);
            ckbSeries.TabIndex = 1;
            ckbSeries.Text = "Séries";
            ckbSeries.UseVisualStyleBackColor = true;
            // 
            // ckbfut
            // 
            ckbfut.AutoSize = true;
            ckbfut.Location = new Point(27, 22);
            ckbfut.Name = "ckbfut";
            ckbfut.Size = new Size(64, 19);
            ckbfut.TabIndex = 0;
            ckbfut.Text = "futebol";
            ckbfut.UseVisualStyleBackColor = true;
            // 
            // groupBoxsexo
            // 
            groupBoxsexo.Controls.Add(rdbsexo2);
            groupBoxsexo.Controls.Add(rdbsexo3);
            groupBoxsexo.Controls.Add(rdbsexo1);
            groupBoxsexo.Location = new Point(17, 151);
            groupBoxsexo.Name = "groupBoxsexo";
            groupBoxsexo.Size = new Size(165, 106);
            groupBoxsexo.TabIndex = 6;
            groupBoxsexo.TabStop = false;
            groupBoxsexo.Text = "sexo";
            // 
            // rdbsexo2
            // 
            rdbsexo2.AutoSize = true;
            rdbsexo2.Location = new Point(6, 43);
            rdbsexo2.Name = "rdbsexo2";
            rdbsexo2.Size = new Size(73, 19);
            rdbsexo2.TabIndex = 2;
            rdbsexo2.TabStop = true;
            rdbsexo2.Text = "feminino";
            rdbsexo2.UseVisualStyleBackColor = true;
            // 
            // rdbsexo3
            // 
            rdbsexo3.AutoSize = true;
            rdbsexo3.Location = new Point(6, 68);
            rdbsexo3.Name = "rdbsexo3";
            rdbsexo3.Size = new Size(132, 19);
            rdbsexo3.TabIndex = 1;
            rdbsexo3.TabStop = true;
            rdbsexo3.Text = "prefiro não informar";
            rdbsexo3.UseVisualStyleBackColor = true;
            // 
            // rdbsexo1
            // 
            rdbsexo1.AutoSize = true;
            rdbsexo1.Location = new Point(6, 18);
            rdbsexo1.Name = "rdbsexo1";
            rdbsexo1.Size = new Size(80, 19);
            rdbsexo1.TabIndex = 0;
            rdbsexo1.TabStop = true;
            rdbsexo1.Text = "masculino";
            rdbsexo1.UseVisualStyleBackColor = true;
            // 
            // textBox3
            // 
            textBox3.Location = new Point(67, 93);
            textBox3.Name = "textBox3";
            textBox3.Size = new Size(429, 23);
            textBox3.TabIndex = 5;
            // 
            // textBox2
            // 
            textBox2.Location = new Point(66, 61);
            textBox2.Name = "textBox2";
            textBox2.Size = new Size(430, 23);
            textBox2.TabIndex = 4;
            // 
            // textBox1
            // 
            textBox1.Location = new Point(83, 27);
            textBox1.Name = "textBox1";
            textBox1.Size = new Size(181, 23);
            textBox1.TabIndex = 3;
            // 
            // lblemail
            // 
            lblemail.AutoSize = true;
            lblemail.Location = new Point(17, 93);
            lblemail.Name = "lblemail";
            lblemail.Size = new Size(44, 15);
            lblemail.TabIndex = 2;
            lblemail.Text = "E-Mail:";
            // 
            // lblnome
            // 
            lblnome.AutoSize = true;
            lblnome.Location = new Point(17, 64);
            lblnome.Name = "lblnome";
            lblnome.Size = new Size(43, 15);
            lblnome.TabIndex = 1;
            lblnome.Text = "Nome:";
            // 
            // lblmat
            // 
            lblmat.AutoSize = true;
            lblmat.Location = new Point(17, 30);
            lblmat.Name = "lblmat";
            lblmat.Size = new Size(60, 15);
            lblmat.TabIndex = 0;
            lblmat.Text = "Matricula:";
            // 
            // groupBoxcursos
            // 
            groupBoxcursos.Controls.Add(lstmesinicio);
            groupBoxcursos.Controls.Add(lblmes);
            groupBoxcursos.Controls.Add(groupBoxperiodo);
            groupBoxcursos.Controls.Add(comboBox1);
            groupBoxcursos.Location = new Point(20, 442);
            groupBoxcursos.Name = "groupBoxcursos";
            groupBoxcursos.Size = new Size(523, 177);
            groupBoxcursos.TabIndex = 3;
            groupBoxcursos.TabStop = false;
            groupBoxcursos.Text = "Cursos";
            //groupBoxcursos.Enter += groupBoxcursos_Enter;
            // 
            // lstmesinicio
            // 
            lstmesinicio.FormattingEnabled = true;
            lstmesinicio.ItemHeight = 15;
            lstmesinicio.Location = new Point(329, 32);
            lstmesinicio.Name = "lstmesinicio";
            lstmesinicio.Size = new Size(172, 94);
            lstmesinicio.TabIndex = 3;
            // 
            // lblmes
            // 
            lblmes.AutoSize = true;
            lblmes.Location = new Point(246, 22);
            lblmes.Name = "lblmes";
            lblmes.Size = new Size(77, 15);
            lblmes.TabIndex = 2;
            lblmes.Text = "Mês de início";
            // 
            // groupBoxperiodo
            // 
            groupBoxperiodo.Controls.Add(rdbnoite);
            groupBoxperiodo.Controls.Add(rdbtarde);
            groupBoxperiodo.Controls.Add(rdbmanha);
            groupBoxperiodo.Location = new Point(19, 66);
            groupBoxperiodo.Name = "groupBoxperiodo";
            groupBoxperiodo.Size = new Size(174, 96);
            groupBoxperiodo.TabIndex = 1;
            groupBoxperiodo.TabStop = false;
            groupBoxperiodo.Text = "período";
            // 
            // rdbnoite
            // 
            rdbnoite.AutoSize = true;
            rdbnoite.Location = new Point(3, 66);
            rdbnoite.Name = "rdbnoite";
            rdbnoite.Size = new Size(54, 19);
            rdbnoite.TabIndex = 2;
            rdbnoite.TabStop = true;
            rdbnoite.Text = "Noite";
            rdbnoite.UseVisualStyleBackColor = true;
            // 
            // rdbtarde
            // 
            rdbtarde.AutoSize = true;
            rdbtarde.Location = new Point(3, 41);
            rdbtarde.Name = "rdbtarde";
            rdbtarde.Size = new Size(53, 19);
            rdbtarde.TabIndex = 1;
            rdbtarde.TabStop = true;
            rdbtarde.Text = "Tarde";
            rdbtarde.UseVisualStyleBackColor = true;
            // 
            // rdbmanha
            // 
            rdbmanha.AutoSize = true;
            rdbmanha.Location = new Point(3, 16);
            rdbmanha.Name = "rdbmanha";
            rdbmanha.Size = new Size(62, 19);
            rdbmanha.TabIndex = 0;
            rdbmanha.TabStop = true;
            rdbmanha.Text = "Manhã";
            rdbmanha.UseVisualStyleBackColor = true;
            // 
            // comboBox1
            // 
            comboBox1.FormattingEnabled = true;
            comboBox1.Items.AddRange(new object[] { "Técnico em Desenvolvimento de Sistemas", "Técnico em Informática para Internet", "Técnico em Design Gráfico" });
            comboBox1.Location = new Point(11, 23);
            comboBox1.Name = "comboBox1";
            comboBox1.Size = new Size(178, 23);
            comboBox1.TabIndex = 0;
            comboBox1.SelectedIndexChanged += comboBox1_SelectedIndexChanged;
            // 
            // btnSalv
            // 
            btnSalv.Image = (Image)resources.GetObject("btnSalv.Image");
            btnSalv.Location = new Point(39, 653);
            btnSalv.Name = "btnSalv";
            btnSalv.Size = new Size(94, 83);
            btnSalv.TabIndex = 4;
            btnSalv.Text = "&Salvar";
            btnSalv.TextAlign = ContentAlignment.BottomCenter;
            btnSalv.UseVisualStyleBackColor = true;
            btnSalv.Click += btnSalv_Click;
            // 
            // btnlimp
            // 
            btnlimp.Image = (Image)resources.GetObject("btnlimp.Image");
            btnlimp.Location = new Point(229, 653);
            btnlimp.Name = "btnlimp";
            btnlimp.Size = new Size(94, 83);
            btnlimp.TabIndex = 5;
            btnlimp.Text = "&Limpar";
            btnlimp.TextAlign = ContentAlignment.TopLeft;
            btnlimp.UseVisualStyleBackColor = true;
            btnlimp.Click += btnlimp_Click;
            // 
            // btnSair
            // 
            btnSair.Image = (Image)resources.GetObject("btnSair.Image");
            btnSair.ImageAlign = ContentAlignment.BottomCenter;
            btnSair.Location = new Point(410, 653);
            btnSair.Name = "btnSair";
            btnSair.Size = new Size(94, 83);
            btnSair.TabIndex = 6;
            btnSair.Text = "&Sair";
            btnSair.TextAlign = ContentAlignment.TopCenter;
            btnSair.UseVisualStyleBackColor = true;
            btnSair.Click += btnSair_Click;
            // 
            // Form1
            // 
            AcceptButton = btnSalv;
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            CancelButton = btnSair;
            ClientSize = new Size(573, 776);
            Controls.Add(btnSair);
            Controls.Add(btnlimp);
            Controls.Add(btnSalv);
            Controls.Add(groupBoxcursos);
            Controls.Add(grbdados);
            Controls.Add(pictureBox1);
            Controls.Add(lbltitulo);
            Name = "Form1";
            Text = "Form1";
            ((System.ComponentModel.ISupportInitialize)pictureBox1).EndInit();
            grbdados.ResumeLayout(false);
            grbdados.PerformLayout();
            groupBoxhobbie.ResumeLayout(false);
            groupBoxhobbie.PerformLayout();
            groupBoxsexo.ResumeLayout(false);
            groupBoxsexo.PerformLayout();
            groupBoxcursos.ResumeLayout(false);
            groupBoxcursos.PerformLayout();
            groupBoxperiodo.ResumeLayout(false);
            groupBoxperiodo.PerformLayout();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label lbltitulo;
        private PictureBox pictureBox1;
        private GroupBox grbdados;
        private GroupBox groupBoxhobbie;
        private GroupBox groupBoxsexo;
        private RadioButton rdbsexo2;
        private RadioButton rdbsexo3;
        private RadioButton rdbsexo1;
        private TextBox textBox3;
        private TextBox textBox2;
        private TextBox textBox1;
        private Label lblemail;
        private Label lblnome;
        private Label lblmat;
        private GroupBox groupBoxcursos;
        private Label lblmes;
        private GroupBox groupBoxperiodo;
        private RadioButton rdbnoite;
        private RadioButton rdbtarde;
        private RadioButton rdbmanha;
        private ComboBox comboBox1;
        private CheckBox ckbVolei;
        private CheckBox ckbsharp;
        private CheckBox ckbXadrez;
        private CheckBox ckbSeries;
        private CheckBox ckbfut;
        private ListBox lstmesinicio;
        private Button btnSalv;
        private Button btnlimp;
        private Button btnSair;
    }
}